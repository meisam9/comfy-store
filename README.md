# Comfy Store — React E‑commerce Starter

A clean, minimal e‑commerce starter built with React, Vite, Tailwind CSS and DaisyUI — a learning project with completed challenge notes archived separately.

Live:

Overview

- Purpose: A hands‑on course project demonstrating a complete e‑commerce flow (product listings, single product, cart, checkout, orders) with modern React tooling.
- Audience: Frontend developers learning React, React Router, Redux Toolkit, and React Query integrations with a REST API.

Key features

- Product listing with filtering, sorting and pagination
- Single product page with color, amount and add‑to‑cart flow
- Cart state managed with Redux Toolkit and persisted to localStorage
- Checkout and orders flow integrated with a backend API
- React Query for data fetching and caching
- Responsive UI with Tailwind CSS + DaisyUI components

Tech stack

- React + Vite
- Tailwind CSS + DaisyUI
- React Router (v6)
- Redux Toolkit (cart & user)
- @tanstack/react-query
- Axios (custom instance to communicate with Strapi API)
- react-toastify for notifications

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

Notes

- This repository contains an archive of the original course README moved to `README_LEGACY.md` and excluded from version control to keep the root README concise.
- The project expects an API (Strapi or similar). See `src/utils` for the custom Axios instance base URL and adjust as needed.

Contributing

- Feel free to open issues or pull requests. If you want the full, original challenge walkthrough restored into the repo, let me know.

Contact

- Email: meisam949494@gmail.com

License

- MIT (or choose your preferred license)
