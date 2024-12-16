

# InsightVista

**InsightVista** is a modern, full-stack analytics dashboard designed to showcase advanced front-end and back-end engineering skills. Built using **React**, **Node.js**, and **AWS**, it enables users to manage and visualize datasets with interactive charts, secure authentication, and cloud integration.

---

## 🚀 **Features**

1. **User Authentication**  
   - Register and log in with JWT-based authentication.
   - Role-based access control (optional enhancement).

2. **Data Upload & Management**  
   - Upload datasets (CSV/JSON) securely to **AWS S3**.
   - View and manage uploaded datasets.

3. **Interactive Visualizations**  
   - Create dynamic charts using **Chart.js** or **Recharts**.
   - Explore datasets with drill-down features and filters.

4. **AI-Driven Insights**  
   - Mocked AI recommendations to suggest data filters or patterns.
   - Structure allows for real AI integration using services like **AWS SageMaker**.

5. **Polished UI/UX**  
   - Responsive design with **TailwindCSS**.
   - Clean navigation with React Router.

6. **Code Quality & Testing**  
   - Frontend and backend unit/integration tests using **Jest** and **Supertest**.
   - Configured with **ESLint** and **Prettier** for consistency.

7. **Cloud Integration**  
   - Store and retrieve files securely from **AWS S3**.
   - Deployable on **AWS EC2**, **Netlify**, or **Render**.

---

## 🛠️ **Tech Stack**

### **Frontend:**
- **React**: Modern UI development.
- **TailwindCSS**: Styling.
- **Chart.js/Recharts**: Data visualization.
- **Axios**: API calls.

### **Backend:**
- **Node.js** and **Express**: REST API development.
- **MongoDB** (local or Atlas): Database for user and dataset metadata.
- **AWS SDK**: S3 file management.
- **JWT**: Authentication.

### **Testing & Tooling:**
- **Jest**: Unit testing.
- **Supertest**: API testing.
- **ESLint/Prettier**: Code quality.

---

## ⚙️ **Installation and Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/insightvista.git
cd insightvista
```

### **2. Backend Setup**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
   AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
   S3_BUCKET_NAME=<your-s3-bucket-name>
   ```
4. Start the backend server:
   ```bash
   npm run start
   ```

### **3. Frontend Setup**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

### **4. Access the Application**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## 🧪 **Running Tests**

### **Frontend Tests**
```bash
cd frontend
npm run test
```

### **Backend Tests**
```bash
cd backend
npm run test
```

---

## 🚀 **Deployment**

1. **Frontend Deployment:** Use Netlify or S3 + CloudFront.
2. **Backend Deployment:** Deploy to AWS EC2, Render, or Heroku.
3. Update environment variables for production.

---

## 📂 **Project Structure**

### **Frontend**
```plaintext
frontend/
  src/
    components/
    pages/
    context/
    services/
```

### **Backend**
```plaintext
backend/
  src/
    server.js
    app.js
    config/
    models/
    routes/
```

---

## 🧩 **Future Enhancements**
1. Integrate real AI models for insights using **AWS SageMaker** or similar.
2. Add role-based access control (RBAC).
3. Implement WebSockets for real-time data updates.
4. Optimize CI/CD pipeline with performance/security testing.

