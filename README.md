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
Create `.env` in `backend/`:
