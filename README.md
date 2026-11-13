# Nail Design — Ljiljana Medović

A responsive salon website for manicure, permanent makeup, and beauty training. Built with React and Vite, with an Express/Nodemailer API for contact-form messages.

**Live website:** https://naildesign-online.vercel.app

## Features
- Responsive layout for phones, tablets, and desktop
- Home, About, Services, service detail, Contact, and 404 pages
- Service accordions, image gallery, and lightbox
- Framer Motion animations and page transitions
- Contact form with client- and server-side validation
- Email delivery through Nodemailer
- SEO metadata, Open Graph/Twitter metadata, robots.txt, and sitemap.xml
- Accessible focus states, descriptive gallery alt text, and reduced-motion support
- Vercel-ready frontend and backend configuration

## Technology
**Frontend:** React, Vite, React Router, Tailwind CSS, Framer Motion, React Hook Form, Axios, React Helmet Async, React Icons, Yet Another React Lightbox.

**Backend:** Node.js, Express, Nodemailer, CORS, dotenv.

## Project structure
```text
Nail-Design-Website/
├── frontend/
│   ├── public/
│   └── src/ (components, pages, sections, assets)
├── backend/
│   ├── index.js
│   ├── .env.example
│   └── vercel.json
└── README.md
```

## Run locally
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
```
Copy `backend/.env.example` to `backend/.env`, then set valid email credentials. For Gmail, use a Google App Password, not your regular account password.

```env
PORT=5000
EMAIL_USER=your-gmail-address@example.com
EMAIL_PASS=your-google-app-password
FRONTEND_URL=https://naildesign-online.vercel.app,http://localhost:5173
```
Start the backend with `npm run dev` (or `npm start` for production).

To use the local API, create `frontend/.env.local` with `VITE_API_URL=http://localhost:5000`, then restart Vite. The contact form defaults to the existing deployed API URL.

## API
- `GET /` — service status
- `GET /health` — health check
- `POST /send-email` — validates and emails a contact message

Request body example:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+381 60 123 4567",
  "message": "I would like to ask about an appointment."
}
```

## Deploy on Vercel
**Frontend:** import the repository, set Root Directory to `frontend`, Build Command to `npm run build`, and Output Directory to `dist`.

**Backend:** create a separate Vercel project from the same repository and set Root Directory to `backend`. Add `EMAIL_USER`, `EMAIL_PASS`, and `FRONTEND_URL` under Environment Variables. If the backend URL changes, set `VITE_API_URL` in the frontend project to the backend origin and redeploy the frontend. Verify the backend using `/health`.

## Security
Never commit `.env` files or credentials. The API validates inputs, escapes user content in HTML email, limits JSON request size, and restricts browser origins. Rotate any email password previously committed or shared.

## Quality checks
```bash
cd frontend
npm run lint
npm run build
```

No license is included; add a `LICENSE` file if you intend to open-source the project.
