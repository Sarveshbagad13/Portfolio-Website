# 🚀 Sarvesh Bagad — Developer Portfolio

A modern, high-performance personal portfolio built with **React 19**, **Vite**, and **Tailwind CSS**, featuring interactive 3D-styled UI components, ambient lighting, and automated contact form delivery.

---

## ✨ Features

- **Case Study & GitHub Repository Explorer**: Detailed modal popups with metrics, architectural highlights, and live links.
- **Working Contact Form**: Live email delivery straight to inbox via Web3Forms API with real-time submission feedback.
- **Optimized Performance**: Zero layout thrashing, throttled RAF scroll listeners, and responsive design across all viewports.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS v4, Vite 8
- **Icons**: React Icons (`react-icons/fi`, `react-icons/fa`, `react-icons/si`)
- **Forms & Email**: Web3Forms API
- **Deployment**: Vercel

---

## 🏁 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Sarveshbagad13/Portfolio-Website.git
cd Portfolio-Website/Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `Portfolio` root by copying the template:
```bash
cp .env.example .env
```
Add your free Web3Forms Access Key:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
