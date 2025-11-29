# Qoryqpa – Legal Assistance Chatbot

#### Video Demo: <https://youtu.be/U7LJxLv1Olw>

#### Description:

**Qoryqpa** is a lightweight, multilingual legal assistance chatbot designed to help users quickly access legal information, particularly related to military service and fraud situations. I developed this project as part of my CS50 final project. The inspiration for this project came from a personal experience: my younger brother, a student, was taken into the army against his will. I wanted to create a tool that could provide accessible legal guidance and prevent similar situations for others.

### Project Overview

Qoryqpa is a **full-stack web application** built using **HTML, CSS, JavaScript** for the frontend and **Node.js with Express** for the backend. Its primary goal is to deliver accurate, easy-to-understand legal guidance in **Kazakh, Russian, and English**, while remaining lightweight and easy to maintain. The system uses a structured **FAQ knowledge base** in JSON format, which allows the chatbot to answer user questions instantly without needing an external API or database.

The project includes multiple **navigation tabs** to make it user-friendly and informative:

- **Главная (Home):** The landing page introducing the project and its purpose.
- **О нас (About Us):** A page describing the motivation behind Qoryqpa, its creators, and the project’s goals.
- **Конституция (Constitution):** A reference page that contains important legal guidelines, acts, and constitutional information, providing users with additional context and knowledge outside the chatbot interaction.
- **Чат-бот (Chatbot):** The main interactive page where users can type their questions and receive automated responses.

This structure allows users to easily navigate through the project and access both interactive and static information.

---

### Frontend

The frontend was designed with simplicity and usability in mind. It features:

- A **chat window** that displays user and bot messages.
- **User and bot message bubbles** for a clean, readable interface.
- A **text input** where users type their questions.
- A **language selector** for switching between Kazakh, Russian, and English.

The frontend loads `army_faq.json`, which contains pre-written questions, answers, and keywords in three languages. The system is capable of **automatic language detection**, allowing it to reply in the same language the user types in, improving accessibility for multilingual users.

The chat interface is responsive and lightweight, ensuring smooth performance even on lower-spec devices. The choice of using a static JSON file allows for fast responses without depending on external APIs, which is particularly important for privacy and security when dealing with legal information.

---

### Backend

The backend is built using **Node.js and Express**, which provides a lightweight and fast server environment. Its main responsibilities include:

1. Serving static frontend files from the `public` directory.
2. Processing chat messages through a `/chat` POST endpoint.

When a user sends a message:

- The server reads the FAQ JSON file.
- Searches for either exact matches or keyword matches in the user's input.
- Returns the corresponding answer in the requested language.
- Temporarily stores the conversation in memory (`chatHistory`) for review or debugging purposes.

The backend design was deliberately kept simple to avoid unnecessary complexity. By not using a database, the project remains easy to deploy, maintain, and extend.

---

### Knowledge Base (`army_faq.json`)

The FAQ file is the core of the chatbot. Each entry includes:

- `question` — the question text in Kazakh, Russian, and English.
- `answer` — the corresponding answer in three languages.
- `keywords` — a set of keywords used to match user input with the correct answer.

This structure ensures fast, reliable responses while keeping the system completely offline and independent of third-party APIs. Updating or expanding the knowledge base is as simple as editing the JSON file, which allows the project to grow over time without changing the code.

---

### Design Decisions

During development, I considered multiple options for the chatbot’s design:

- **AI vs rule-based system:** I chose a keyword-based approach for accuracy and predictability, ensuring legal information is reliable.
- **Multilingual support:** Combining automatic language detection with a dropdown selector provides both convenience and flexibility.
- **Lightweight architecture:** Avoiding databases and heavy frameworks keeps the system fast and easy to maintain.
- **Navigation tabs:** The multiple pages (Home, About Us, Constitution, Chatbot) allow users to access legal information outside the chat, making the project more comprehensive.

The combination of these design choices allows the system to be simple, functional, and user-friendly.

---

### Future Improvements

- **AI/NLP integration:** Implementing OpenAI or other NLP engines could allow more flexible and natural answers.
- **Expanded legal modules:** Adding information for fraud victims, civil rights, and other legal areas.
- **Mobile optimization:** Creating a responsive or mobile-first interface for broader accessibility.
- **Analytics:** Logging user questions anonymously to identify gaps in the knowledge base and improve bot performance.

---

### Conclusion

Qoryqpa demonstrates how a simple, lightweight chatbot can deliver valuable legal information in a multilingual environment. Its combination of structured knowledge, responsive design, and clear navigation makes it both functional and accessible.

Through this project, I learned about full-stack web development, JSON handling, multilingual support, and user-centered design. Qoryqpa is more than just a technical project; it is a tool inspired by real-world experiences and a desire to help others protect their rights.
