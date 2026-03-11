# E-Commerce Frontend

😎 Link to: [Back-End](https://github.com/lavetted/Skin-Deep-Back-End)

## Overview

This project is the frontend for a full-stack e-commerce application. It allows users to browse products, view product details, add items to a shopping cart, and complete purchases using Stripe checkout.

The application is built using **React** and communicates with a backend REST API to manage products, authentication, and cart functionality.

---

## Features

* User registration and login
* Product browsing
* Product detail pages
* Add items to cart
* Update or remove cart items
* Checkout with Stripe
* Shipping address form
* Responsive UI layout
* Protected routes for authenticated users

---

## Tech Stack

* React
* React Router
* Axios
* Context API (State Management)
* CSS
* Stripe Checkout

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── CartItem.jsx
│   ├── ProductCard.jsx
│
├── pages
│   ├── ProductsPage.jsx
│   ├── ProductDetailsPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── OrderPage.jsx
│   ├── Homepage.jsx
│
├── context
│   └── CartContext.jsx
│
├── services
│   └── api.jsx
│
├── App.jsx
└── main.jsx
```

---

## Application Pages

| Page            | Description                     |
| --------------- | ------------------------------- |
| Home / Products | Displays available products     |
| Product Details | Shows product information       |
| Cart            | Displays items added to cart    |
| Checkout        | Shipping form and order summary |
| Login           | User authentication             |
| Register        | Create new account              |

---

## API Integration

The frontend communicates with a backend API using Axios.

Example API configuration:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.onrender.com/api"
});

export default API;
```

---

## Environment Variables

You may optionally configure:

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## Deployment

The frontend can be deployed using platforms such as:

* Netlify
* Render
* Vercel

For production deployment:

```bash
npm run build
```

This will generate the `dist` folder for hosting.

---

## Future Improvements

* Product search and filtering
* User order history
* Quantity selectors in product pages
* Improved mobile responsiveness
* Wishlist functionality

---

## Author

Lavette D. ❤️
