<div align="center">
  <img src="/public/assets/images/logo.svg" alt="Promptopia Logo" width="100" height="100" />
  <h1>Promptopia - AI Prompt Sharing Platform</h1>
  <p>An open-source AI prompt discovery and sharing platform designed for the modern AI ecosystem (ChatGPT, Midjourney, Claude, and more).</p>

  <div>
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
    <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
    <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextAuth" />
  </div>
</div>

---

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [License](#-license)

---

## 🚀 About the Project

**Promptopia** is a full-stack Next.js web application built for the modern AI era. It allows users to discover, create, share, and organize creative AI prompts for models like ChatGPT, Claude, Midjourney, and Stable Diffusion.

Whether you're looking for high-converting marketing copy prompts, complex coding assistant prompts, or stunning digital art prompts, Promptopia provides a centralized hub to explore and copy community-tested prompts with ease.

---

## ✨ Key Features

- 🎨 **Modern Glassmorphism UI**: High-end user interface built with custom glassmorphism styles and smooth responsive layouts.
- 🔍 **Real-Time Search & Tag Filtering**: Instantly search prompts by prompt text, specific tag (e.g., `#webdevelopment`, `#idea`, `#ai`), or creator username.
- 🔐 **OAuth Authentication**: Seamless and secure single click login using **Google OAuth 2.0** powered by **NextAuth.js**.
- 📋 **One-Click Copy to Clipboard**: Quickly copy any prompt to your clipboard to use directly in your AI models.
- 👤 **Personal Profile Management**: Dedicated profile page showing all created prompts, with instant edit and delete functionality.
- 🌐 **Creator Profiles**: Click on any prompt author to view their public profile and explore their shared prompt collection.
- ⚡ **Full CRUD Capabilities**: Create, read, update, and delete prompts stored in a cloud-hosted MongoDB Atlas database.

---

## 🛠 Tech Stack

| Domain | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Frontend** | [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend & APIs** | Next.js Serverless Route Handlers |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) with [Mongoose ODM](https://mongoosejs.com/) |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/) (Google OAuth 2.0 Provider) |
| **Styling** | Custom Glassmorphism, CSS Modules, Tailwind |

---

## 📂 Project Architecture

```text
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js   # NextAuth authentication handlers
│   │   ├── prompt/                       # CRUD API endpoints for prompts
│   │   └── users/[id]/posts/route.js    # User-specific prompt fetching
│   ├── create-prompt/page.jsx           # Prompt creation page
│   ├── update-prompt/page.jsx           # Prompt editing page
│   ├── profile/                         # User profile view page
│   ├── layout.jsx                       # Root layout & providers
│   └── page.jsx                         # Home page with feed view
├── components/
│   ├── Feed.jsx                         # Main feed & search controller
│   ├── Form.jsx                         # Shared reusable Prompt Form
│   ├── Nav.jsx                          # Dynamic navbar component
│   ├── Profile.jsx                      # Profile view card grid
│   ├── PromptCard.jsx                   # Individual prompt card
│   └── Provider.jsx                     # NextAuth session context wrapper
├── models/
│   ├── prompt.js                        # Mongoose Prompt schema definition
│   └── user.js                          # Mongoose User schema definition
├── utils/
│   └── database.js                      # Singleton MongoDB connection helper
└── styles/
    └── globals.css                      # Global design system & background mesh
```

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**
- A **MongoDB Atlas** account
- A **Google Cloud Console** account (for OAuth login)

### 1. Clone the Repository

```bash
git clone https://github.com/letera1/Prompt-Suggestion-Platform.git
cd Prompt-Suggestion-Platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your credentials into `.env`:

```env
GOOGLE_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/share_prompt?retryWrites=true&w=majority

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔑 Environment Variables Reference

| Variable | Description |
|---|---|
| `GOOGLE_ID` | OAuth 2.0 Client ID generated from Google Cloud Console |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 Client Secret generated from Google Cloud Console |
| `MONGODB_URI` | Connection URI string for your MongoDB Atlas database |
| `NEXTAUTH_URL` | Canonical URL of your app (`http://localhost:3000` in dev) |
| `NEXTAUTH_SECRET` | Secret key used to encrypt NextAuth JWT tokens |

---

## 🔌 API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/prompt` | `GET` | Fetch all shared prompts with creator data populated |
| `/api/prompt/new` | `POST` | Create and save a new AI prompt |
| `/api/prompt/[id]` | `GET` | Fetch a single prompt by ID |
| `/api/prompt/[id]` | `PATCH` | Edit/Update an existing prompt |
| `/api/prompt/[id]` | `DELETE` | Delete a prompt by ID |
| `/api/users/[id]/posts` | `GET` | Fetch all prompts created by a specific user |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
