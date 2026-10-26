"""Portfolio-grade conversational AI assistant with OpenAI-compatible API support."""
import json
import os
import urllib.error
import urllib.request

import streamlit as st

st.set_page_config(
    page_title="Azhar AI Assistant",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded",
)

DEFAULT_SYSTEM_PROMPT = (
    "You are Azhar's AI assistant. Be helpful, accurate, clear, and concise. "
    "If you are uncertain, say so rather than inventing facts."
)


def call_llm(messages: list[dict[str, str]]) -> str:
    """Call an OpenAI-compatible Chat Completions endpoint."""
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key:
        raise RuntimeError(
            "No API key found. Add OPENAI_API_KEY to your environment, "
            "then restart the app."
        )

    base_url = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
    model = os.getenv("OPENAI_MODEL", "gpt-4o-mini").strip()
    payload = json.dumps(
        {"model": model, "messages": messages, "temperature": 0.4}
    ).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url}/chat/completions",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            result = json.loads(response.read().decode("utf-8"))
        return result["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:500]
        raise RuntimeError(
            f"Model provider returned HTTP {exc.code}. Check your API key, "
            f"model name, and provider settings. Details: {detail}"
        ) from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(
            "Could not reach the model provider. Check your internet connection "
            "and OPENAI_BASE_URL."
        ) from exc
    except (KeyError, IndexError, TypeError, json.JSONDecodeError) as exc:
        raise RuntimeError("The model provider returned an unexpected response.") from exc


if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "assistant",
            "content": (
                "Hi! I'm Azhar's AI Assistant. Ask me a question to explore "
                "conversational AI powered by a language model."
            ),
        }
    ]

with st.sidebar:
    st.title("🤖 Assistant Controls")
    st.caption("Conversational AI · Python · Streamlit · LLM APIs")
    model_name = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
    provider_url = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
    st.markdown("**Configuration**")
    st.code(f"Model: {model_name}\nEndpoint: {provider_url}", language="text")
    st.markdown("**Capabilities**")
    st.write("• Context-aware conversation")
    st.write("• Session-based chat history")
    st.write("• OpenAI-compatible model providers")
    st.write("• Environment-based secret management")
    st.write("• API error handling")
    if st.button("🗑️ Clear conversation", use_container_width=True):
        st.session_state.messages = [
            {"role": "assistant", "content": "Conversation cleared. What would you like to ask?"}
        ]
        st.rerun()
    st.divider()
    st.caption("API keys are read from environment variables and should never be committed.")

st.title("Azhar AI Assistant")
st.write(
    "A portfolio project demonstrating a practical LLM application: "
    "chat interface, conversation context, configurable model endpoint, and error handling."
)

api_ready = bool(os.getenv("OPENAI_API_KEY", "").strip())
if api_ready:
    st.success("Model API key detected · Live responses enabled", icon="✅")
else:
    st.info(
        "Demo is ready. Add OPENAI_API_KEY to enable live model responses.",
        icon="ℹ️",
    )

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

prompt = st.chat_input("Ask a question...")
if prompt:
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    conversation = [
        {"role": "system", "content": DEFAULT_SYSTEM_PROMPT},
        *st.session_state.messages,
    ]
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            try:
                answer = call_llm(conversation)
            except RuntimeError as exc:
                answer = f"**Assistant configuration error**\n\n{exc}"
            except Exception:
                answer = (
                    "Something unexpected happened while generating the response. "
                    "Please check the app logs and try again."
                )
        st.markdown(answer)
    st.session_state.messages.append({"role": "assistant", "content": answer})
