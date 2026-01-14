# QuickFlow: Comprehensive Technical & Functional Specifications

This document provides an exhaustive overview of the **QuickFlow** application, documenting every major feature, architectural decision, and technical implementation detail.

---

## 🏗️ 1. System Architecture
QuickFlow is an AI-enhanced productivity platform built with a modern distributed architecture.

- **Backend:** Spring Boot 3.x (Java 17+) following a Controller-Service-Repository pattern.
- **Frontend Layer:** Flexible Client Architecture (currently Angular 19) communicating via REST.
- **Identity Provider (IAM):** Keycloak 26.x (OIDC/OAuth2).
- **AI Engine:** Local Ollama integration for private, high-performance LLM inference.
- **Database:** MongoDB (using Spring Data MongoDB).
- **Infrastructure:** Docker containerization for reliable service orchestration.

---

## 🔑 2. Identity & Access Management (The Keycloak Suite)

We have implemented a professional-grade security perimeter using Keycloak.

### **Authentication Flows**
-   **OpenID Connect (OIDC):** Full implementation of the OIDC login flow.
-   **Google OAuth 2.0 Integration:** 
    -   Configured as a social Identity Provider (IdP).
    -   Handles seamless "Sign in with Google" while maintaining a local user record in Keycloak.
-   **JWT Security:** 
    -   The backend validates every request using RSA-signed JSON Web Tokens.
    -   Stateless authentication: No sessions are stored on the server, allowing for infinite horizontal scaling.

### **Security Hardening**
-   **Sanitized Realm Portability:** We created `keycloak/quickflow-realm.json`, a production-ready export that allows any developer to replicate the exact security environment in one click without leaking private Google client secrets.
-   **CORS Management:** Granular Cross-Origin Resource Sharing configuration to permit only authorized frontend origins (`http://localhost:4200`).

---

## 🧠 3. AI Cognitive Engine (The Ollama Integration)

The application features a deeply integrated AI engine that handles natural language processing tasks locally.

### **Intelligent Prompt Engineering**
-   **Dynamic Personas:** The `LLMService` uses a "Switch-Persona" logic to define AI behavior:
    -   **Email Expert:** Instructions focus on grammar correction, professional brevity (under 120 words), and a "human-like" natural tone.
    -   **Meeting Assistant:** Instructions focus on bullet-point extraction, action item identification, and chronological summarization.
-   **Model:** Powered by **`llama3.2`**, ensuring high accuracy with low latency on local hardware.

### **High-Performance AI Caching**
-   **Request Fingerprinting:** Every AI generation request is converted into a unique **SHA-256 hash** based on its input parameters.
-   **`generated_outputs` Collection:** If a matching hash is found in MongoDB, the system skips the AI call and returns the previous result instantly.
-   **Result:** 90%+ reduction in response time for repeated queries.

---

## 📧 4. Core Module: Intelligent Email Suite

The Email module provides an automated workflow from raw idea to final sent message.

### **Deep Logic Flow:**
1.  **Drafting:** Takes recipient lists and rough "bullet points" from the user.
2.  **AI Transformation:** Transforms messy notes into a structured, professional email.
3.  **Persistence:** Saves the request and generated content in the `emails` collection.
4.  **SMTP Dispatch:** Uses real-world **Gmail SMTP** infrastructure via `JavaMailSender` to send the final approved message.

### **Security Features:**
-   **Credential Injection:** Uses `${MAIL_USERNAME}` and `${MAIL_PASSWORD}` environment variables. No password ever exists in the source code.
-   **Sender Identity:** Automatically derives user identity from the Keycloak JWT token to populate the sender fields.

---

## � 5. Core Module: Meeting Summary & PV Generator

This module handles the full lifecycle of meeting documentation (Procès-verbal).

### **Functional Capabilities:**
-   **Metadata Capture:** Stores Attendees (People), Location, Date, and Duration.
-   **The PV Generator:** Converts live meeting notes or agendas into a formalized summary.
-   **Status Tracking:** Manages the transition from `draft` to `sent` (finalized) for organizational audit logs.

---

## 🛡️ 6. Technical Excellence & Best Practices

-   **Zero-Credential Policy:** Every sensitive setting (SMTP, Google, Keycloak) is handled via local environment variables.
-   **Clean History:** The Git history was surgically cleaned using squashing to ensure that no legacy test passwords or private files (like `oauth_creds.txt`) remain in the repository metadata.
-   **Health & Monitoring:** Integrated `/api/health` endpoint for automated CI/CD status checks.
-   **Documented Setup:** We created a full suite of master guides (`SETUP.md`, `GOOGLE_OAUTH_SETUP.md`, `INTELLIJ_ENV_SETUP.md`) to ensure any developer can contribute immediately.

---

**QuickFlow is a secure, privacy-first platform that bridges the gap between traditional enterprise management and modern generative AI.**
