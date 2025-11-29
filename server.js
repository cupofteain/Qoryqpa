import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Папка public как корень статических файлов
app.use(express.static(path.join(__dirname, "public")));

// Загружаем справочник
const faq = JSON.parse(fs.readFileSync(path.join(__dirname, "public", "army_faq.json"), "utf8"));

// История чата (можно хранить в памяти)
const chatHistory = [];

// Функция поиска ответа по ключевым словам
function getBotReply(message, lang) {
    const text = message.toLowerCase();
    for (const item of faq) {
        if (item.keywords.some(k => text.includes(k))) {
            return item.answer[lang] || item.answer["ru"];
        }
    }
    return lang === "ru" ? "Извините, я пока не знаю, как ответить на это." :
           lang === "kz" ? "Кешіріңіз, мен әлі қалай жауап беруді білмеймін." :
           "Sorry, I don't know how to respond to that yet.";
}

// Обработка сообщений от пользователя
app.post("/chat", (req, res) => {
    const { message, language } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const lang = ["kz","ru","en"].includes(language) ? language : "ru";
    const reply = getBotReply(message, lang);
    chatHistory.push({ user: message, bot: reply });

    res.json({ reply });
});

// Главная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("✅ Qoryqpa server running on http://localhost:3000");
});
