# 🚀 Zeta Admin Panel

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge\&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge\&logo=mongodb)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge\&logo=bootstrap)
![EJS](https://img.shields.io/badge/EJS-Template-orange?style=for-the-badge)

### 🌟 Modern Admin Panel with Authentication & Complete CRUD Operations

A professional Admin Panel developed using **Node.js, Express.js, MongoDB, EJS, Bootstrap 5, Multer, Bcrypt, Cookie Authentication**, and **MVC Architecture**.

---

## 🎥 Live Demo & Project Presentation

### 🌐 Live Project

👉 **YOUR_LIVE_DEMO_LINK**

### 🎬 Project Presentation Video

👉 **YOUR_VIDEO_LINK**

---

# 📸 Project Screenshots

## 🏠 Dashboard

<img width="1904" height="987" alt="Screenshot 2026-06-28 212759" src="https://github.com/user-attachments/assets/4adce8bc-1a45-4062-b5e1-4b253d1e5277" />


---

## ➕ Add Admin

<img width="1902" height="990" alt="Screenshot 2026-06-28 212849" src="https://github.com/user-attachments/assets/670ca90f-5359-4d77-9367-7f854511c2ae" />


---

## 📋 View Admin

<img width="1900" height="981" alt="Screenshot 2026-06-28 213004" src="https://github.com/user-attachments/assets/d58f02c0-4b27-453c-b76a-03c89b610e2e" />


---

## ✏️ Edit Admin

<img width="1895" height="945" alt="Screenshot 2026-06-28 213103" src="https://github.com/user-attachments/assets/920bd5be-0606-459c-9f27-245622a900c1" />

---

## 🔑 Login Page

<img width="1902" height="986" alt="Screenshot 2026-06-28 212655" src="https://github.com/user-attachments/assets/b809c719-4bef-4886-8883-108d7e8ea8c4" />


---

## 📝 Signup Page

<img width="1915" height="988" alt="Screenshot 2026-06-28 213154" src="https://github.com/user-attachments/assets/b2e87aa8-d879-4521-a5a1-ae2bc2b3974d" />


---

# ✨ Features

## 🔐 Authentication

* ✅ Admin Registration
* ✅ Secure Login
* ✅ Logout
* ✅ Cookie Authentication
* ✅ Protected Routes
* ✅ Password Encryption using Bcrypt

---

## 👨‍💼 Admin Management

* ➕ Add Admin
* 📋 View All Admins
* ✏️ Edit Admin
* 🗑 Delete Admin
* 📷 Upload Profile Image
* 🖼 Update Profile Image
* ❌ Delete Old Image Automatically

---

## 📊 Dashboard

* 📈 Total Admins
* 👤 Welcome Logged-in Admin
* 📱 Fully Responsive
* 🎨 Professional Bootstrap UI

---

## 📂 Image Upload

* 📷 Multer Image Upload
* 📁 Separate Upload Folder
* 🖼 Preview Images

---

## 🛡 Security

* Password Hashing
* Cookie Authentication
* Protected Dashboard
* Secure Login
* Authentication Middleware

---

# 🛠 Tech Stack

| Technology    | Usage               |
| ------------- | ------------------- |
| Node.js       | Backend             |
| Express.js    | Server              |
| MongoDB       | Database            |
| Mongoose      | ODM                 |
| Bootstrap 5   | UI                  |
| EJS           | Template Engine     |
| Multer        | Image Upload        |
| Bcrypt        | Password Encryption |
| Cookie Parser | Authentication      |

---

# 📂 Project Structure

```text
Zeta-AdminPanel/

│── config/
│     db.js
│
│── controllers/
│     adminController.js
│
│── middleware/
│     auth.js
│
│── models/
│     adminModel.js
│
│── routes/
│     adminRoute.js
│
│── public/
│     css/
│     js/
│     assets/
│     uploads/
│
│── views/
│     dashboard.ejs
│     login.ejs
│     signup.ejs
│     add-admin.ejs
│     edit-admin.ejs
│     view-admin.ejs
│
│── app.js
│── package.json
│── README.md
```

---

# 📚 Application Flow

```text
Start
   │
   ▼
Signup
   │
   ▼
Login
   │
   ▼
Cookie Authentication
   │
   ▼
Dashboard
   │
   ├─────────────┐
   ▼             ▼
Add Admin    View Admin
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
   Edit      Delete      Profile
                 │
                 ▼
             Dashboard
```

---

# 🚀 Installation

Clone Repository

```bash
git clone https://github.com/SaiyamDoshi7/Zeta-AdminPanel.git
```

Open Project

```bash
cd Zeta-AdminPanel
```

Install Dependencies

```bash
npm install
```

Create `.env`

```env
PORT=8080
MONGO_URI=mongodb://127.0.0.1:27017/adminPanel
```

Run Project

```bash
npm run dev
```

Open Browser

```text
http://localhost:8080
```

---

# 📌 Available Routes

| Route             | Description     |
| ----------------- | --------------- |
| /signup           | Register Admin  |
| /login            | Login           |
| /                 | Dashboard       |
| /add-admin        | Add Admin       |
| /view-admin       | View All Admins |
| /edit-admin/:id   | Edit Admin      |
| /delete-admin/:id | Delete Admin    |
| /logout           | Logout          |

---

# 🎯 Future Improvements

* 🔍 Search Admin
* 📄 Pagination
* 🌙 Dark Mode
* 📊 Dashboard Charts
* 📧 Email Verification
* 🔐 JWT Authentication
* 👥 Role Based Access
* 📤 Export PDF
* 📤 Export Excel
* 🔔 Toast Notifications

---

# 👨‍💻 Author

**Saiyam Doshi**

💻 Full Stack Web Developer

🌐 GitHub: https://github.com/SaiyamDoshi7

---

## ⭐ Support

If you like this project, don't forget to ⭐ the repository.
