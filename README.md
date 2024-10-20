# Store Management System

## Link Frontend: https://dalocal-project-frontend.vercel.app/
## Link Backend: https://dalocalprojectbackend.vercel.app/

This full-stack store management system allows users to register, log in, and manage store items. The system supports role-based access control, enabling admin users to access certain pages without logging in, while regular users must be authenticated to view specific pages.

## Prerequisites

Before running the project, ensure you have the following installed:
- Node.js (Version 12 or above)
- MongoDB (Local or cloud instance)

## Backend Setup

1. Navigate to the Backend Directory:
   ```bash
   cd backend
2. Install Dependencies:
npm install

3. Start the Backend Server:
npm start

## Frontend Setup

1. Navigate to the Frontend Directory:
cd store-app

2. Install Dependencies:
npm install

3. Start the Frontend:
npm start

## API Endpoints
Register: POST /users/register
Login: POST /users/login
Get Store Items: GET /stores
Create Store Item: POST /stores/create (Admin Only)


Screenshots
1. Home page
   <img width="1182" alt="Screenshot 2024-10-18 at 10 56 12 PM" src="https://github.com/user-attachments/assets/f42f67b0-1ff8-434b-ad28-8fe7fb5cc15d">
   <img width="1440" alt="Screenshot 2024-10-18 at 10 57 19 PM" src="https://github.com/user-attachments/assets/9b79b768-b81d-4cbc-8a98-8fa9e289c164">

2. Register Page
   <img width="748" alt="Screenshot 2024-10-18 at 10 57 53 PM" src="https://github.com/user-attachments/assets/adf83765-2733-4e59-b265-ebb130e9e715">

3. Login Page
<img width="634" alt="Screenshot 2024-10-18 at 10 58 08 PM" src="https://github.com/user-attachments/assets/d6d905cd-4f58-42b4-ba12-e4777e6f343a">

4. Store Page
<img width="1440" alt="Screenshot 2024-10-19 at 10 52 00 AM" src="https://github.com/user-attachments/assets/1a3062ef-47f4-4864-b29f-ff7927578de1">

6. Card Page
   <img width="572" alt="Screenshot 2024-10-18 at 10 58 46 PM" src="https://github.com/user-attachments/assets/563c7909-360a-4dae-a762-7b0663f05ead">

7. Favorite Pages
   <img width="918" alt="Screenshot 2024-10-18 at 10 58 26 PM" src="https://github.com/user-attachments/assets/1321b7c5-c2c5-405c-8d1c-d82e93964346">
   
8. Not Authorised (user, not an Admin)
   isAdmin (false)
   <img width="721" alt="Screenshot 2024-10-19 at 10 47 44 AM" src="https://github.com/user-attachments/assets/541f8d1a-2647-418d-ad55-3e6af589e636">
   <img width="1177" alt="Screenshot 2024-10-18 at 11 25 08 PM" src="https://github.com/user-attachments/assets/db9a3e45-ff77-4ab3-848f-fc7eaec709bd">


Local Storage
After login, the following data is stored in the browser's localStorage:

token: JWT for authentication.
isAdmin: Boolean value that determines if the user is an admin.

Author
Samreen Inayat
Email: inayatsamreen1411@gmail.com
GitHub: https://github.com/Summi51/mini-project-practice



