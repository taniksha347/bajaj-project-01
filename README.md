# Bajaj Finserv Backend API

This is the backend API for the Bajaj Finserv qualifier task. It provides endpoints for processing data and includes an AI-powered feature using Google Gemini.

## 🚀 Live Demo

- **Backend API URL:** [https://bajajfinserv-q1.vercel.app](https://bajajfinserv-q1.vercel.app)
- **Deployment:** The application is deployed on a VPS and accessible via Nginx reverse proxy (also configured for automated deployment via GitHub Actions).

## 👨‍💻 Author

- **Name:** Kunal Bhatia
- **Email:** kunal0638.be23@chitkara.edu.in
- **Roll Number:** 2310990638
- **GitHub Repo:** [https://github.com/kunalbhatia2601/Bajaj-finserv-Q1](https://github.com/kunalbhatia2601/Bajaj-finserv-Q1)

## 🛠️ Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Google Gemini AI**: For AI-powered responses
- **Zod**: For request validation
- **Jest / Bun Test**: For testing

## 📝 API Endpoints

### 1. `POST /bfhl`

This is the main endpoint that processes JSON input.

**Request Body:**
```json
{
  "fibonacci": 10,
  "prime": [2, 4, 6, 7, 11],
  "lcm": [12, 18],
  "hcf": [24, 36],
  "AI": "What is the capital of India?"
}
```
*Note: You can send any combination of these keys. At least one key is required.*

**Response:**
```json
{
  "is_success": true,
  "official_email": "kunal0638.be23@chitkara.edu.in",
  "data": ... // Result based on the input key(s)
}
```

### 2. `GET /health`

Health check endpoint to verify the server is running.

**Response:**
```json
{
  "is_success": true,
  "official_email": "kunal0638.be23@chitkara.edu.in",
  "data": "Server is healthy and running!"
}
```

## ⚙️ Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kunalbhatia2601/Bajaj-finserv-Q1.git
   cd Bajaj-finserv-Q1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Run Tests:**
   ```bash
   npm test
   # or
   bun test
   ```
