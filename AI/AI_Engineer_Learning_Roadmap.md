# AI Engineer Learning Roadmap

## Goal

Become a production-ready **AI Engineer / LLM Engineer** who can build, evaluate, deploy, and maintain AI systems using:

- Python
- Machine Learning
- Deep Learning
- Transformers
- LLMs
- RAG
- Vector Databases
- AI Agents
- MCP
- OCR / Document AI
- FastAPI
- Docker
- Cloud
- Evaluation
- Guardrails
- Monitoring

The focus should be on **building real AI applications**, not only learning theory.

---

# 1. AI Engineer Skill Map

```text
                    AI ENGINEER
                         |
        +----------------+----------------+
        |                |                |
        v                v                v
   Programming          AI/ML          Production
        |                |                |
     Python         Transformers       Docker
     APIs           LLMs               Cloud
     SQL            Embeddings         Monitoring
     Git            RAG                Evaluation
                    Agents             Security
                    Vision/OCR
```

---

# 2. Recommended Learning Order

1. Python
2. NumPy and Pandas
3. Machine Learning Fundamentals
4. Deep Learning
5. PyTorch
6. Transformers
7. LLM Fundamentals
8. LLM APIs and Local Models
9. Prompt Engineering
10. Structured Outputs
11. Embeddings
12. Vector Databases
13. RAG
14. Tool Calling
15. AI Agents
16. MCP
17. Evaluation
18. Guardrails and AI Security
19. Vision and OCR
20. FastAPI
21. Docker
22. Cloud Deployment
23. Monitoring and Optimization
24. Portfolio and Interview Preparation

---

# 3. Phase 1 - Python

Python should be your strongest programming language for AI engineering.

## Topics

- Variables
- Data types
- Lists
- Tuples
- Sets
- Dictionaries
- Conditions
- Loops
- Functions
- Classes
- Objects
- Inheritance
- Exception handling
- Modules
- Packages
- Virtual environments
- pip
- File handling
- JSON
- Type hints
- async / await
- HTTP requests
- Decorators
- Generators

## Important Example

```python
invoice = {
    "invoice_number": "INV001",
    "vendor": "ABC Ltd",
    "amount": 12000
}
```

You should be comfortable manipulating nested dictionaries, lists, JSON responses, and API data.

---

# 4. Phase 2 - Mathematics for AI

You do not need research-level mathematics.

## Linear Algebra

Understand:

- Vector
- Matrix
- Tensor
- Dot product
- Matrix multiplication
- Dimensions

Example:

```text
Text
 |
 v
Embedding Model
 |
 v
[0.14, -0.72, 0.91, ...]
```

## Statistics

Understand:

- Mean
- Median
- Variance
- Standard deviation
- Probability
- Distribution
- Correlation

## Calculus

Understand the intuition behind:

- Derivatives
- Gradients
- Gradient descent
- Loss functions
- Learning rate

---

# 5. Phase 3 - NumPy, Pandas and Scikit-learn

## NumPy

Learn:

- Arrays
- Shapes
- Indexing
- Slicing
- Vector operations
- Matrix operations

## Pandas

Learn:

- DataFrame
- Filtering
- groupby
- merge
- Missing values
- CSV
- JSON

## Scikit-learn

Learn:

- Data preprocessing
- Train/test split
- Feature engineering
- Model training
- Model evaluation

## Machine Learning Concepts

Understand:

- Supervised learning
- Unsupervised learning
- Classification
- Regression
- Clustering
- Features
- Labels
- Training set
- Validation set
- Test set
- Overfitting
- Underfitting
- Cross-validation

## Metrics

Know:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- MAE
- MSE
- RMSE

---

# 6. Phase 4 - Deep Learning

Learn Deep Learning with **PyTorch**.

## Concepts

- Neural Networks
- Input Layer
- Hidden Layers
- Output Layer
- Weights
- Bias
- ReLU
- Sigmoid
- Softmax
- Forward Propagation
- Backpropagation
- Loss
- Optimizer
- Epoch
- Batch
- Learning Rate
- GPU
- CUDA

## Basic PyTorch

```python
import torch

x = torch.tensor([1, 2, 3])
print(x)
```

You do not need to build GPT from scratch.

Your goal is to understand how neural networks and training work.

---

# 7. Phase 5 - Transformers

Transformers are fundamental to modern LLM systems.

## Learn

- Tokenization
- Tokens
- Embeddings
- Positional information
- Attention
- Self-attention
- Multi-head attention
- Feed-forward networks
- Transformer layers
- Next-token prediction

## Conceptual Flow

```text
Input
 |
 v
Tokenizer
 |
 v
Tokens
 |
 v
Embeddings
 |
 v
Transformer Layers
 |
 v
Attention
 |
 v
Output Probabilities
 |
 v
Generated Response
```

## Transformer Types

### Encoder-only

Examples:

- BERT

### Decoder-only

Examples:

- GPT
- Llama
- Qwen
- Mistral
- DeepSeek

### Encoder-Decoder

Examples:

- T5

---

# 8. Phase 6 - LLM Fundamentals

Know these terms very well.

- LLM
- SLM
- Parameters
- Tokens
- Tokenizer
- Context Window
- Prompt
- System Prompt
- Temperature
- Top-P
- Inference
- Training
- Pretraining
- Fine-tuning
- Quantization
- Distillation
- Hallucination
- Structured Output
- Function Calling
- Tool Calling
- Multimodal Models
- Vision Language Models

---

# 9. Important LLM Company Mapping

```text
GPT / Codex   -> OpenAI
Claude        -> Anthropic
Gemini        -> Google
Gemma         -> Google
Llama         -> Meta
Qwen          -> Alibaba
DeepSeek      -> DeepSeek
Grok          -> xAI
Mistral       -> Mistral AI
Phi           -> Microsoft
Command       -> Cohere
Nemotron      -> NVIDIA
GLM           -> Z.ai / Zhipu AI
Kimi          -> Moonshot AI
MiniMax       -> MiniMax
```

---

# 10. LLM Runtimes vs LLM Models

Do not confuse model runners with models.

## Model Runtimes

```text
Ollama
vLLM
llama.cpp
LM Studio
```

## Models

```text
Llama
Qwen
Gemma
Mistral
DeepSeek
GLM
Phi
```

Example:

```bash
ollama run llama3.2
```

Here:

```text
Ollama    = Model Runtime
Llama 3.2 = Model
```

---

# 11. Phase 7 - LLM Application Engineering

Learn how to integrate LLMs into applications.

## Cloud Models

Understand how to use:

- OpenAI API
- Anthropic API
- Gemini API
- Other model APIs

## Local Models

Understand:

```text
Application
    |
    v
Ollama
    |
    v
Qwen / Llama / Gemma / Mistral
    |
    v
CPU / GPU
```

## Important Topics

- Prompt engineering
- System prompts
- User prompts
- Few-shot prompting
- Structured JSON
- JSON Schema
- Streaming
- Retries
- Timeouts
- Rate limits
- Token counting
- Caching
- Model routing
- Fallback models
- Cost optimization
- Error handling

---

# 12. Phase 8 - Embeddings

Embeddings convert information into vectors.

Example:

```text
"Samsung invoice"
        |
        v
Embedding Model
        |
        v
[0.42, -0.31, 0.85, ...]
```

Learn:

- Embeddings
- Vectors
- Dimensions
- Cosine similarity
- Euclidean distance
- Semantic similarity
- Semantic search
- Nearest neighbors

---

# 13. Phase 9 - Vector Databases

Learn at least one vector database properly.

## Recommended Order

```text
FAISS
  |
  v
Qdrant
  |
  v
pgvector
```

Other options:

- Chroma
- Weaviate
- Milvus
- Pinecone

## Important Concepts

- Collections
- Vectors
- Metadata
- Indexes
- Similarity search
- Filtering
- Top-K

---

# 14. Phase 10 - RAG

RAG means:

**Retrieval-Augmented Generation**

## Document Ingestion

```text
PDF
 |
 v
Extract Text
 |
 v
Chunk Text
 |
 v
Create Embeddings
 |
 v
Store in Vector Database
```

## User Query

```text
User Question
 |
 v
Create Query Embedding
 |
 v
Vector Search
 |
 v
Retrieve Relevant Chunks
 |
 v
Prompt + Context
 |
 v
LLM
 |
 v
Answer
```

## Learn

- Document loaders
- Chunking
- Chunk size
- Chunk overlap
- Embeddings
- Vector search
- Metadata filtering
- Hybrid search
- Reranking
- Top-K retrieval
- Context construction
- Grounding
- Citations

---

# 15. Phase 11 - AI Agents

An AI agent can decide when and how to use tools.

## Agent Flow

```text
User
 |
 v
LLM
 |
 v
Decides Action
 |
 v
Tool
 |
 v
Tool Result
 |
 v
LLM
 |
 v
Final Answer
```

## Example

```text
User:
"Find invoice INV001 and tell me payment status."

Agent
 |
 +--> get_invoice()
 |
 +--> database
 |
 +--> get_payment_status()
 |
 +--> PAID
 |
 v
Final Response
```

## Learn

- Function calling
- Tool calling
- Agent loops
- State
- Memory
- Planning
- Workflows
- Human-in-the-loop
- Retry handling
- Tool permissions

---

# 16. Phase 12 - MCP

MCP means:

**Model Context Protocol**

Understand:

- MCP Client
- MCP Server
- Tools
- Resources
- Prompts
- Model-to-tool communication
- Connecting AI agents to external systems

Conceptually:

```text
LLM Application
      |
      v
  MCP Client
      |
      v
  MCP Server
      |
      +--> Database
      +--> GitHub
      +--> Files
      +--> Internal APIs
```

---

# 17. Phase 13 - OCR and Document AI

Document AI can become a strong specialization.

## Recommended Architecture

```text
                 Invoice
                    |
         +----------+----------+
         |                     |
         v                     v
    Native PDF               Image
         |                     |
         |                Preprocessing
         |                     |
         |                 PaddleOCR
         |                     |
         +----------+----------+
                    |
                    v
              Layout Analysis
                    |
                    v
             Candidate Fields
                    |
                    v
               LLM / VLM
                    |
                    v
              JSON Schema
                    |
                    v
          Evidence Validation
                    |
                    v
            Business Rules
                    |
                    v
               Final JSON
```

## Learn

- PaddleOCR
- OpenCV
- PyMuPDF
- Image preprocessing
- Bounding boxes
- Layout analysis
- Table extraction
- OCR confidence
- VLMs
- Document classification
- Key-value extraction
- Line-item extraction

---

# 18. Phase 14 - Fine-Tuning

Do not start your AI journey with fine-tuning.

Recommended order:

```text
Prompt Engineering
       |
       v
RAG
       |
       v
Evaluation
       |
       v
Fine-Tuning
```

## Learn Later

- Supervised Fine-Tuning
- SFT
- LoRA
- QLoRA
- PEFT
- Dataset preparation
- Instruction tuning
- Training/validation
- Quantization

---

# 19. Phase 15 - Evaluation

AI systems must be measured.

Do not evaluate systems with:

```text
"It looks correct."
```

Use measurable tests.

## Measure

- Accuracy
- Hallucination rate
- Retrieval precision
- Retrieval recall
- Structured output validity
- Latency
- Token usage
- Cost
- Failure rate

## Invoice Evaluation Example

Expected:

```json
{
  "invoice_number": "INV001",
  "invoice_date": "2026-08-12",
  "total": 15000
}
```

Create a test dataset:

```text
invoice_001.pdf -> expected.json
invoice_002.pdf -> expected.json
invoice_003.pdf -> expected.json
...
invoice_100.pdf -> expected.json
```

Then calculate metrics:

```text
invoice_number accuracy = 99%
invoice_date accuracy   = 97%
vendor accuracy         = 96%
total accuracy          = 99%
line_item accuracy      = 91%
```

---

# 20. Phase 16 - AI Safety and Guardrails

Learn:

- Prompt injection
- Indirect prompt injection
- Jailbreaking
- Data leakage
- PII handling
- Secret protection
- Tool permissions
- Input validation
- Output validation
- SQL injection
- Hallucination prevention
- Rate limiting

## Never Blindly Trust an LLM

Bad:

```text
LLM
 |
 v
amount = 900000
 |
 v
Save to Database
```

Better:

```text
LLM Prediction
      |
      v
Evidence Validation
      |
      v
Business Rule Validation
      |
      v
Confidence Check
      |
      v
Accept / Human Review / Reject
```

---

# 21. Phase 17 - AI Backend Development

Learn:

- FastAPI
- REST APIs
- Pydantic
- Async Python
- WebSockets
- Streaming
- PostgreSQL
- MySQL
- Redis
- Background jobs
- Queues

Typical architecture:

```text
Angular / React
       |
       v
    FastAPI
       |
       v
    AI Layer
 +-----+------+------+
 |            |      |
 v            v      v
LLM          OCR   Vector DB
 |            |      |
 +------------+------+
              |
              v
       Database / Storage
```

---

# 22. Phase 18 - Docker and Deployment

Learn:

- Linux
- Git
- Docker
- Docker Compose
- Environment variables
- GPU containers
- NVIDIA CUDA basics
- Nginx
- Reverse proxy
- CI/CD
- Logging
- Monitoring

Recommended learning order:

```text
Docker
  |
  v
Docker Compose
  |
  v
Cloud VM
  |
  v
CI/CD
  |
  v
Kubernetes
```

Do not start Kubernetes too early.

---

# 23. Phase 19 - Cloud

Learn the basics of at least one:

- AWS
- Azure
- Google Cloud Platform

Understand:

- Virtual Machines
- Containers
- Object Storage
- Managed Databases
- Secrets
- IAM
- Logging
- Monitoring
- Autoscaling
- GPU instances

---

# 24. Phase 20 - AI Inference Engineering

Understand how models consume hardware.

Learn:

- CPU vs GPU
- VRAM
- Model parameters
- FP32
- FP16
- BF16
- INT8
- INT4
- Quantization
- GGUF
- KV Cache
- Context Length
- Tokens per second
- Batching
- Latency
- Throughput

Example:

```text
Qwen 7B
   |
   v
4-bit Quantization
   |
   v
Lower Memory Usage
   |
   v
Easier Local Deployment
```

---

# 25. Recommended 24-Week Learning Plan

| Weeks | Focus |
|---|---|
| 1-3 | Python |
| 4 | NumPy + Pandas |
| 5-6 | Machine Learning Fundamentals |
| 7-8 | Neural Networks + PyTorch |
| 9-10 | Transformers + Hugging Face |
| 11-12 | LLM APIs + Ollama |
| 13 | Prompt Engineering + Structured Output |
| 14 | Embeddings |
| 15-16 | Vector Databases + RAG |
| 17-18 | Agents + Tool Calling + MCP |
| 19 | Evaluation + Guardrails |
| 20 | Vision + VLMs |
| 21 | OCR + Document AI |
| 22 | Docker + Deployment |
| 23 | Monitoring + Optimization |
| 24 | Portfolio + Interview Preparation |

---

# 26. Recommended Learning Ratio

```text
30% Learning
70% Building
```

Avoid spending months only watching courses.

Every major topic should produce a small project.

---

# 27. Portfolio Projects

Build 4 strong projects rather than many basic tutorials.

---

## Project 1 - Machine Learning API

Example:

```text
Customer Churn Dataset
        |
        v
Scikit-learn Model
        |
        v
FastAPI
        |
        v
Docker
```

Demonstrate:

- Data preprocessing
- Model training
- Evaluation
- REST API
- Docker

---

## Project 2 - Production RAG Application

```text
PDF Upload
   |
   v
PyMuPDF
   |
   v
Chunking
   |
   v
Embeddings
   |
   v
Qdrant
   |
   v
LLM
   |
   v
Answer + Citation
```

Include:

- Multiple PDFs
- Metadata
- Reranking
- Citations
- Evaluation
- Docker

---

## Project 3 - AI Agent

Example:

```text
Finance Assistant
       |
       v
      LLM
       |
 +-----+-----+------+
 |           |      |
 v           v      v
SQL         API   Search
```

Include:

- Tool calling
- State
- Memory
- Logging
- Human approval
- Error handling

---

## Project 4 - Invoice Intelligence System

This should be a flagship AI project.

```text
PDF / JPG / PNG
       |
       v
Preprocessing
       |
       v
PaddleOCR
       |
       v
Layout Analysis
       |
       v
Candidate Extraction
       |
       v
LLM / VLM
       |
       v
Vendor-specific Mapping
       |
       v
JSON Schema
       |
       v
Evidence Validator
       |
       v
Confidence Scoring
       |
       v
Line Item Extraction
       |
       v
Final JSON
```

Add:

- FastAPI
- Docker
- pytest
- Logging
- Vendor-specific aliases
- Default aliases
- Confidence scores
- Human review
- Model comparison
- Latency benchmark
- Accuracy benchmark
- Structured output validation
- Retry strategy
- OCR fallback
- VLM fallback
- Local and cloud LLM support

Possible models:

- Qwen
- Gemma
- Llama
- Mistral
- DeepSeek
- GPT
- Claude
- Gemini

---

# 28. Target AI Engineer Technology Stack

## Programming

```text
Python             ★★★★★
SQL                ★★★★
JavaScript/TS      ★★★
```

## Data

- NumPy
- Pandas
- Scikit-learn

## Deep Learning

- PyTorch

## LLM

- Hugging Face Transformers
- OpenAI API
- Anthropic API
- Gemini API
- Ollama

## Local Models

- Qwen
- Gemma
- Llama
- Mistral
- DeepSeek
- GLM

## RAG

- Embeddings
- FAISS
- Qdrant
- pgvector
- Reranking

## Agents

- Tool Calling
- MCP
- LangGraph

## Document AI

- PaddleOCR
- OpenCV
- PyMuPDF
- VLMs

## Backend

- FastAPI
- Pydantic

## Database

- PostgreSQL
- MySQL
- Redis

## Deployment

- Git
- Linux
- Docker
- Docker Compose
- AWS / Azure / GCP

## Production AI

- Evaluation
- Observability
- Caching
- Guardrails
- Security
- Cost Optimization
- Latency Optimization

---

# 29. What Not to Spend Too Much Time On Initially

Avoid over-investing in:

- Building GPT from scratch
- Advanced calculus
- Research-level statistics
- CUDA kernel programming
- Training billion-parameter models from scratch
- GAN mathematics
- Kubernetes at the beginning
- Learning every vector database
- Learning every agent framework
- Memorizing every LLM available

Learn the core concepts and become very strong with a smaller set of tools.

---

# 30. Interview Topics You Must Know

You should be able to explain these clearly.

## LLM Fundamentals

- What is an LLM?
- What is a token?
- What is context window?
- What is inference?
- What is hallucination?
- What is temperature?
- What is quantization?
- What is fine-tuning?
- What is LoRA?
- What is structured output?

## Transformer Fundamentals

- What is attention?
- What is self-attention?
- What is an embedding?
- Encoder vs decoder
- Why are Transformers powerful?

## RAG

- What is RAG?
- RAG vs fine-tuning
- How chunking works
- Chunk size vs overlap
- What is reranking?
- What is hybrid search?
- How do you evaluate RAG?

## Vector Databases

- What is a vector?
- What is cosine similarity?
- What is semantic search?
- What is Top-K?
- Vector database vs relational database

## Agents

- What is an AI agent?
- Agent vs chatbot
- Function calling
- Tool calling
- Agent state
- Agent memory
- Workflow vs agent
- MCP

## Production AI

- How do you reduce hallucinations?
- How do you validate LLM output?
- How do you monitor an AI application?
- How do you reduce latency?
- How do you reduce API cost?
- How do you secure LLM tools?
- Local LLM vs cloud LLM

## OCR / Document AI

- OCR vs VLM
- Bounding boxes
- OCR confidence
- Image preprocessing
- Table extraction
- Key-value extraction
- Line-item extraction
- Evidence validation

---

# 31. Final Learning Path

```text
Python
   |
   v
NumPy / Pandas
   |
   v
Machine Learning
   |
   v
PyTorch
   |
   v
Transformers
   |
   v
LLMs
   |
   v
Prompt Engineering
   |
   v
Structured Output
   |
   v
Embeddings
   |
   v
Vector Databases
   |
   v
RAG
   |
   v
Tool Calling
   |
   v
Agents
   |
   v
MCP
   |
   v
Evaluation
   |
   v
Guardrails
   |
   v
Vision / OCR
   |
   v
FastAPI
   |
   v
Docker
   |
   v
Cloud
   |
   v
Production AI Systems
```

---

# 32. Main Goal

At the end of this roadmap, you should be capable of independently building systems such as:

```text
                    Production AI Application

Frontend
   |
   v
FastAPI
   |
   +-------------------+-------------------+
   |                   |                   |
   v                   v                   v
LLM API            Local LLM             OCR/VLM
   |                   |                   |
   +---------+---------+-------------------+
             |
             v
         AI Pipeline
             |
     +-------+-------+
     |               |
     v               v
Vector DB         SQL Database
     |               |
     +-------+-------+
             |
             v
       Validation Layer
             |
             v
         Evaluation
             |
             v
        Monitoring
             |
             v
       Production Output
```

The objective is not simply to know how to call an LLM API.

The objective is to become an engineer who can build:

- Reliable AI systems
- Secure AI systems
- Measurable AI systems
- Cost-efficient AI systems
- Scalable AI systems
- Production-ready AI systems

---

# Checklist

## Foundation

- [ ] Python
- [ ] NumPy
- [ ] Pandas
- [ ] Scikit-learn
- [ ] Basic Mathematics
- [ ] Machine Learning Fundamentals

## Deep Learning

- [ ] Neural Networks
- [ ] PyTorch
- [ ] Transformers
- [ ] Attention
- [ ] Tokenization
- [ ] Embeddings

## LLM Engineering

- [ ] LLM APIs
- [ ] Ollama
- [ ] Hugging Face
- [ ] Prompt Engineering
- [ ] Structured Outputs
- [ ] Tool Calling
- [ ] Quantization

## RAG

- [ ] Vector Databases
- [ ] FAISS
- [ ] Qdrant
- [ ] pgvector
- [ ] Chunking
- [ ] Embeddings
- [ ] Reranking
- [ ] Hybrid Search
- [ ] RAG Evaluation

## Agents

- [ ] Function Calling
- [ ] Tool Calling
- [ ] Agent State
- [ ] Memory
- [ ] Workflows
- [ ] Human-in-the-loop
- [ ] MCP
- [ ] LangGraph

## Document AI

- [ ] PaddleOCR
- [ ] OpenCV
- [ ] PyMuPDF
- [ ] Layout Analysis
- [ ] Table Extraction
- [ ] VLMs
- [ ] Key-value Extraction
- [ ] Line-item Extraction
- [ ] Confidence Scoring

## Production

- [ ] FastAPI
- [ ] Pydantic
- [ ] PostgreSQL
- [ ] Redis
- [ ] Docker
- [ ] Docker Compose
- [ ] Linux
- [ ] Cloud
- [ ] CI/CD
- [ ] Logging
- [ ] Monitoring
- [ ] Evaluation
- [ ] Guardrails
- [ ] Security
- [ ] Cost Optimization
- [ ] Latency Optimization

## Portfolio

- [ ] ML API Project
- [ ] RAG Project
- [ ] AI Agent Project
- [ ] Invoice Intelligence Project
- [ ] GitHub Documentation
- [ ] Architecture Diagrams
- [ ] Test Cases
- [ ] Benchmarks
- [ ] Resume Update
- [ ] Interview Preparation

---

**Recommended rule: Learn a concept, build something with it, evaluate it, and then move to the next concept.**
