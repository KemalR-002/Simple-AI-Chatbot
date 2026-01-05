# AI Chatbot (Ollama Integration)

Chatbot sederhana berbasis web yang terintegrasi dengan AI lokal menggunakan **Ollama**.

## 🚀 Fitur
- Chatbot berbasis web
- Integrasi AI **tanpa API key**
- AI berjalan **secara lokal (offline)**
- UI sederhana menggunakan EJS
- Backend menggunakan Node.js & Express

---

## 🛠️ Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **EJS**
- **Axios**
- **Ollama (AI Local Service)**
- **Model AI:** `phi3` (ringan & stabil)

---

## 📦 Persyaratan
Pastikan sudah terinstall:
- Node.js (v18+ disarankan)
- Ollama

---

## ⚙️ Cara Instalasi & Menjalankan

1️⃣ Clone Repository
git clone <URL_REPOSITORY>
cd ai-chatbot

2️⃣ Install Dependency
npm install

3️⃣ Install & Setup Ollama
Download Ollama:

https://ollama.com

Pull model AI:

ollama pull phi3

Model phi3 dipilih karena lebih ringan dan stabil untuk resource lokal.

4️⃣ Jalankan Aplikasi

npm run dev 

Buka browser:

http://localhost:3000

---

🧠 Catatan Teknis <br>
- Chatbot tidak menggunakan API key
- Ollama berjalan sebagai background service
- AI diakses melalui endpoint lokal:

http://localhost:11434/api/generate

---

📌 Alasan Menggunakan Ollama
- Gratis & tanpa billing
- Bisa dijalankan offline
- Cocok untuk testing & demo
- Tidak bergantung pada layanan cloud

---

👤 Author

Kemal Raisya Badrian

---
