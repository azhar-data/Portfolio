# ATLAS — Autonomous AI Workforce

ATLAS is a goal-driven autonomous AI workforce and agent orchestration platform. A user provides a high-level goal; ATLAS decomposes it into an auditable task graph, delegates work to specialized agents, controls tool access, evaluates outputs, recovers from failures, tracks cost, and requires human approval before sensitive external actions.

## Current build

This folder contains the first implementation slice:

- Premium dark dashboard UI
- Goal submission flow
- Agent status cards
- Activity timeline and approval indicators
- FastAPI backend skeleton
- Structured goal/task domain models
- Planner service
- Deterministic workflow engine
- Agent registry and base contract
- Evaluation and approval placeholders
- Docker-ready local setup

## Architecture

```text
User / Dashboard
      |
      v
Goal Service
      |
      v
Planner -> Task DAG
      |
      v
Workflow Engine / Orchestrator
      |
      +--> Research Agent
      +--> Analysis Agent
      +--> Outreach Agent
      +--> Document Agent
      |
      v
Tool Gateway / Permissions
      |
      v
Evaluator -> Retry / Repair / Continue
      |
      v
Approval Gate -> External Action
      |
      v
Artifacts + Audit + Cost Tracking
```

## Run the UI

Open `frontend/index.html` directly in a browser, or serve the folder with any static server.

## Run the API

```bash
cd ATLAS/backend
python -m venv .venv
# Windows
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Then open:

- API: `http://127.0.0.1:8000`
- Swagger: `http://127.0.0.1:8000/docs`
- Health: `http://127.0.0.1:8000/api/health`

## Development direction

ATLAS is deliberately not designed as a chatbot or as a group of agents freely chatting with each other. The workflow engine owns execution state, dependencies, retries, budgets and approvals. Agents perform bounded specialist work through explicit contracts.

### Planned milestones

1. Persistent PostgreSQL storage
2. OpenRouter LLM router
3. Real task DAG planning
4. Tool registry + capability permissions
5. Research and analysis agents
6. Evaluation + repair loops
7. Human approval queue
8. Memory + RAG
9. Artifact management
10. Audit events + token/cost tracking
11. End-to-end benchmark scenarios

## Core principle

> LLMs think. Agents perform specialized work. Tools interact with the outside world. Evaluators check. Approval protects. The workflow engine controls. The database remembers. Audit logs explain what happened.
