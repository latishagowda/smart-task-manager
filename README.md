# 📋 Smart Task Manager with Cloud Reminders

A full-stack web application to manage daily tasks with support for:
- ✅ Task creation, completion tracking, and deletion
- 📅 Due dates with automatic email reminders
- 🔐 User authentication via Firebase
- ☁️ Email reminders using AWS SES
- 🌐 Fully cloud-based using MongoDB Atlas and AWS
- 📱 Responsive frontend with clean UI

---

## 🚀 Tech Stack

### 🔧 Backend
- Node.js + Express
- MongoDB Atlas
- Mongoose
- AWS SDK (SES)

### 🌐 Frontend
- Next.js 14
- Firebase Authentication
- React Context API
- Fetch API

---

## 📁 Folder Structure

```

smart-task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── cron/
│   └── server.js
│
├── frontend/
│   └── (Next.js pages, components, styles, context)
│
├── .env (MongoDB, AWS credentials)
├── .env.local (Frontend API URL)
└── README.md

````

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb+srv://<your-connection-string>
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
SES_VERIFIED_EMAIL=latishagowda29@gmail.com
````

Create `.env.local` in the `frontend/` folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🧑‍💻 Getting Started

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 2. Start the Backend Server

```bash
cd backend
node server.js
```

Runs the Express API on **[http://localhost:5000](http://localhost:5000)**

---

### 3. Start the Frontend (Next.js)

```bash
cd frontend
npm run dev
```

Runs the frontend on **[http://localhost:3000](http://localhost:3000)**

---

### 4. Send Reminder Emails (Manual Trigger)

```bash
cd backend
npm run reminder
```

Runs the cron script `cron/reminderCron.js` and sends reminder emails for due tasks using AWS SES.

---

## ✨ Features

* 🔐 Login/Signup using Firebase Auth
* 📝 Create tasks with title, description, and due date
* 📆 View and sort by due dates
* ✅ Mark tasks as completed
* 🗑️ Delete tasks with one click
* 📬 Send email reminders before due dates
* 📱 Responsive, minimal design

---

## 📦 Commands Used

### Backend

```bash
npm init -y
npm install express mongoose dotenv cors aws-sdk
npm install --save-dev nodemon
```

### Frontend

```bash
npx create-next-app frontend
npm install firebase
```

---

## 📬 Email Reminder Notes

* AWS SES is in **sandbox mode**, so you can only send emails to **verified** addresses.
* You must verify both **sender and recipient** in the [AWS SES Console](https://us-east-1.console.aws.amazon.com/ses/home?region=us-east-1#/verified-identities)
* To send to any address, request production access from AWS SES.

---

## 🧠 Future Enhancements

* 🔔 Browser push notifications
* 📅 Calendar-based task view
* ⏰ Repeating/recurring tasks
* 📱 React Native mobile app
* 🧠 AI-based task suggestions

---

## 👩‍💻 Author

Built by Latisha Gowda

