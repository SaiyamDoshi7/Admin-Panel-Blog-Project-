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

👉 (https://drive.google.com/file/d/1s1EjCXzS7eCUApSz1Z6wjO5veYG-H1t0/view?usp=sharing)

### 🎬 Project Presentation Video

👉 https://drive.google.com/file/d/1OukTg9jZZhjlPg4hMu4EDpLABgR28NKE/view?usp=sharing

---

# 📸 Project Screenshots

## 🏠 Dashboard

<img width="1904" height="987" alt="Screenshot 2026-06-28 212759" src="https://github.com/user-attachments/assets/d32f3679-b3d3-43e2-8245-7bb2c6b3bcea" />



---

## ➕ Add Admin

<img width="1902" height="990" alt="Screenshot 2026-06-28 212849" src="https://github.com/user-attachments/assets/0efaec14-d2ae-4cfc-bc3b-c983fccefbd0" />


---

## 📋 View Admin

<img width="1900" height="981" alt="Screenshot 2026-06-28 213004" src="https://github.com/user-attachments/assets/28da5b47-b901-4b0e-94fd-7aad28c58c08" />


---

## ✏️ Edit Admin

<img width="1895" height="945" alt="Screenshot 2026-06-28 213103" src="https://github.com/user-attachments/assets/3e4f9834-10e5-4691-bc62-33249ddc494d" />

---

## 🔑 Login Page

<img width="1902" height="986" alt="Screenshot 2026-06-28 212655" src="https://github.com/user-attachments/assets/f06d384f-c71a-479e-9a5a-cd18f279c202" />


---

## 📝 Signup Page

<img width="1915" height="988" alt="Screenshot 2026-06-28 213154" src="https://github.com/user-attachments/assets/7766b3bb-3dbf-445a-9d12-9a1a58e74d96" />


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
