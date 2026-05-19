# ⚡ OZU CRASHER V2

> The Most Powerful WhatsApp Bug Bot with Web-Based Pairing

![Node](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🚀 Features

- 🐞 **25+ Bug Commands** — Android, iOS, Samsung & Group exploits
- 🌐 **Web Pairing** — No QR code needed, pair with phone number
- 🔐 **User Auth** — Signup/Login system with hashed passwords
- 📊 **Dashboard** — Manage your bot from the browser
- 👥 **Group Tools** — Tagall, hidetag, kick, hijack, promote/demote
- 🔄 **Auto-reconnect** — Bot reconnects if disconnected

---

## 📁 Project Structure

```
ozu-v2/
├── index.js              # Server + Auth + Bot engine
├── base.js               # Bot command handler
├── config.js             # Bot configuration
├── package.json          # Dependencies
├── .gitignore            # Git ignore rules
│
├── public/               # Frontend pages
│   ├── index.html        # Landing page
│   ├── login.html        # Login page
│   ├── signup.html       # Create account page
│   ├── dashboard.html    # User dashboard + pairing
│   └── pair.html         # Redirect to dashboard
│
├── database/             # Data storage
│   ├── owner.json        # Bot owner numbers
│   └── premium.json      # Premium users
│
├── lib/                  # Libraries
│   ├── myfunction.js     # Helper functions
│   ├── image/            # Bot images
│   └── *.mp3             # Audio files
│
└── sessions/             # WhatsApp sessions (auto-created)
```

---

## 🖥️ Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/ozu-v2.git
cd ozu-v2

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# 4. Open in browser
# http://localhost:3000
```

---

## ☁️ Deploy to Render (Free)

1. Push this repo to **GitHub**
2. Go to [render.com](https://render.com) → New → **Web Service**
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** `Node`
5. Click **Deploy**

---

## ☁️ Deploy to Railway

1. Push to GitHub
2. Go to [railway.app](https://railway.app) → New Project → **Deploy from GitHub**
3. Select your repo
4. It auto-detects Node.js — just deploy!

---

## ☁️ Deploy to Koyeb

1. Push to GitHub
2. Go to [koyeb.com](https://koyeb.com) → Create App → GitHub
3. Select repo, set:
   - **Build:** `npm install`
   - **Run:** `npm start`
   - **Port:** `3000`

---

## ☁️ Deploy to VPS (Ubuntu)

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone & setup
git clone https://github.com/YOUR_USERNAME/ozu-v2.git
cd ozu-v2
npm install

# Run with PM2 (keeps it alive)
npm install -g pm2
pm2 start index.js --name ozu-v2
pm2 save
pm2 startup
```

---

## 🔄 User Flow

```
Landing Page (/)
    ↓
Create Account (/signup) ←→ Login (/login)
    ↓                          ↓
    └──→ Dashboard (/dashboard) ←──┘
              ↓
         Enter phone number
              ↓
         Get 8-digit code
              ↓
         Enter in WhatsApp → Linked Devices
              ↓
         ✅ Bot goes live! Type .menu
```

---

## ⚠️ Credits

- **Developer:** bad_boi_stillchasing
- **Telegram:** [@badboistillchasing](https://t.me/badboistillchasing)
- **Contact:** +2349017593981

---

## 📜 License

MIT — Do not remove credits.
