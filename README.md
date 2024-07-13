# # Fitness Hub

This is the frontend part of the e-commerce application built using React, React Router DOM, Redux, RTK Query, Tailwind CSS, and DaisyUI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [APIs](#apis)
- [Technologies](#technologies)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedhimel21/fitness-equipment-and-accessories-client
   cd your-repo-name/frontend
   ```
2. Install dependencies::
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   or
   yarn run dev
   The app should now be running on http://localhost:5173.
   ```

### Usage

1. Navigate through the application to explore different features like product listings, category filters, search functionality, and more.
2. You can manage the state using Redux, and data fetching is handled by RTK Query.
3. For styling, Tailwind CSS and DaisyUI are used to create responsive and modern UI components.

### Project Structure

├── src
│ ├── assets
│ ├── components
│ │ ├── layouts
│ │ ├── UI
│ ├── pages
│ │ ├── AboutUs
│ │ ├── Cart
│ │ ├── Checkout
│ │ ├── HomePage
│ │ ├── ProductDetails
│ │ |── ProductManagement
│ │ ├── Products
| |
│ │  
│ ├── redux
| | |---api
| | | |---baseApi.ts
│ │ ├── features
│ │ │ ├── cart
│ │ │ ├── filter
│ │ │ └── order
│ │ └── store.ts
│ ├── App.tsx
│ ├── index.tsx
| |--main.tsx
│ └──routes
| |--utils
├── public
│ └── images
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
