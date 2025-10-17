# Gemini Chatbot Clone

A frontend-only AI chatbot inspired by Gemini. Users can interact with the chatbot directly in the browser using the Gemini API (Google Generative Language).

---

## Features

* Interactive chat interface
* AI-powered responses via Gemini API (Google Generative Language)
* Chat history saved in the session
* Responsive design for desktop and mobile
* send messages from the chat hisory
* format the response to an interactive text format

---

## Tech Stack

* **Frontend:** HTML, CSS, React.js
* **AI Integration:** Gemini API (Google Generative Language)
* **Environment Variables:** `.env` file for API key

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hirodinn/Gemini-clone.git
   cd Gemini-clone
   ```

2. **Install dependencies: **

   ```bash
   npm install
   ```

3. **Set up the `.env` file** in the root of the project:

   ```
   VITE_GEMINI_API_KEY=your_openai_api_key
   ```

   > Replace `VITE_GEMINI_API_KEY` with the key variable your project uses.

4. **Start the frontend server:**

   ```bash
   npm run dev
   ```
---

## Usage

1. Open the project in your browser (`http://localhost:3000` if using a frontend dev server).
2. Type your message into the chat input box.
3. Press **Enter** or click **Send**.
4. The chatbot will respond using the OpenAI API.
5. Continue the conversation — messages are stored locally for the session.

---

## Folder Structure

```
GEMINI-CLONE/
├─ node_modules/ # Project dependencies
├─ public/ # Static files (images, favicon, etc.)
├─ src/ # Source code
│ ├─ assets/ # Images, icons, or other assets
│ ├─ components/ # React components
│ ├─ App.css # Main styling
│ ├─ App.jsx # Main app component
│ ├─ index.css # Global CSS
│ └─ main.jsx # Entry point
├─ .env # API key (not committed)
├─ .gitignore # Git ignore file
├─ index.html # Main HTML template
├─ package-lock.json # Lock file for dependencies
├─ package.json # Project metadata and scripts
├─ README.md # Project documentation
└─ vite.config.js # Vite configuration
```

---

## Notes

* No backend is required; all requests are made directly from the frontend.
* Keep your `.env` file secret to avoid exposing your API key.
* This project is for educational purposes only.
* to get your gemini api key .. Sign up on OpenAI, go to **API keys** in your account, and create a new key.

