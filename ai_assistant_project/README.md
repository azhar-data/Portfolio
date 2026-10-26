# 🤖 Azhar AI Assistant

A configurable conversational AI application built with **Python and Streamlit**, designed to demonstrate a practical LLM-powered chat workflow. It supports OpenAI-compatible Chat Completions APIs, keeps conversation context during the active session, and reports common configuration/network errors clearly.

> **Status:** Portfolio project. Live responses require a valid API key and access to a compatible model provider.

## Project Summary

Built an interactive conversational AI assistant with a Streamlit chat interface, session-based conversation history, configurable LLM endpoint/model settings, secure environment-variable configuration, and API error handling. The application can connect to OpenAI or another OpenAI-compatible provider without hard-coding credentials into the source code.

## Architecture

```text
User message
    ↓
Streamlit chat interface
    ↓
Session conversation history
    ↓
System prompt + message context
    ↓
OpenAI-compatible Chat Completions API
    ↓
Response validation and error handling
    ↓
Assistant response in the UI
```

## Features

- **Interactive chat UI** with distinct user/assistant messages.
- **Conversation context** maintained during the current Streamlit session.
- **Configurable model provider** through environment variables.
- **OpenAI-compatible API support** for providers that expose the Chat Completions endpoint.
- **Credential safety** by reading API keys from environment variables.
- **Clear conversation control** for starting a fresh session.
- **Helpful error handling** for missing keys, HTTP/API errors, network failures, and unexpected provider responses.
- **Wide, responsive Streamlit layout** with a sidebar for model configuration and capabilities.

## Technology Stack

- Python
- Streamlit
- OpenAI-compatible Chat Completions API
- Python standard library (`urllib`, `json`, `os`)

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/azhar-data/Portfolio.git
cd Portfolio/ai_assistant_project
```

### 2. Create and activate a virtual environment (recommended)

Windows PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure the model provider

Set these environment variables in your terminal. Use credentials from your chosen provider.

Windows PowerShell:

```powershell
$env:OPENAI_API_KEY="your-api-key"
$env:OPENAI_MODEL="gpt-4o-mini"
$env:OPENAI_BASE_URL="https://api.openai.com/v1"
```

macOS/Linux:

```bash
export OPENAI_API_KEY="your-api-key"
export OPENAI_MODEL="gpt-4o-mini"
export OPENAI_BASE_URL="https://api.openai.com/v1"
```

For another OpenAI-compatible provider, set `OPENAI_BASE_URL` to its API base URL and `OPENAI_MODEL` to a model available to your account. The app appends `/chat/completions` to the base URL.

### 5. Start the application

```bash
streamlit run app.py
```

Streamlit will print a local URL (usually `http://localhost:8501`) to open in your browser.

## Configuration Reference

| Variable | Purpose | Default |
|---|---|---|
| `OPENAI_API_KEY` | API credential for the selected provider | Required for live responses |
| `OPENAI_BASE_URL` | OpenAI-compatible API base URL | `https://api.openai.com/v1` |
| `OPENAI_MODEL` | Model identifier supported by the provider | `gpt-4o-mini` |

## Security Notes

- Never commit API keys, passwords, or other secrets to GitHub.
- Environment variables configured in a terminal apply to that terminal session.
- API usage may incur charges according to your model provider's pricing.
- Only send information to an AI provider that you are comfortable sharing with that provider.

## Current Scope and Next Steps

The current version is a single-user portfolio demo with session-scoped chat history. Possible next steps include streaming output, persistent conversation storage, document Q&A with RAG, tool/function calling, automated tests, rate limiting, and usage/cost monitoring.

## CV-Ready Summary

**Developed a configurable LLM-powered AI assistant using Python and Streamlit, integrating an OpenAI-compatible API, contextual chat history, environment-based credential management, and robust API/network error handling.**
