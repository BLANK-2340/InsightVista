# InsightVista

InsightVista is a full-stack analytics dashboard that allows you to:
- Register and log in using JWT-based auth
- Upload datasets to AWS S3
- Visualize data with interactive charts
- Receive mock AI-driven insights
- Manage user settings and data

## Tech Stack
- Frontend: React, TailwindCSS, React Router, Axios, Recharts
- Backend: Node.js, Express, JWT Auth, Mongoose
- Cloud: AWS S3
- Testing: Jest, React Testing Library, Supertest

## Setup Instructions

### Prerequisites
- Node.js >= 14
- npm >= 6
- A MongoDB database (local or Atlas)
- An AWS S3 bucket + credentials

### Environment Variables
Create `.env` in `backend/`:MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/insightvista?
retryWrites=true&w=majority JWT_SECRET=your_jwt_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key_id 
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=us-east-1 
S3_BUCKET_NAME=your_s3_bucket_name PORT=5000
