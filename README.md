# # Fitness Hub

[Live URL](https://fitness-hub-ruby.vercel.app/)

This is the frontend part of the Fitness Hub e-commerce application built using React, React Router DOM, Redux, RTK Query, Tailwind CSS, and DaisyUI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

### Features

- Product Listings: Displays all products with search and filter functionalities.
- Categories: Filter products by categories with the ability to select multiple categories.
- Sorting: Sort products by price and other criteria.
- Cart Management: Add, remove, and update product quantities in the cart.
- Checkout: Collect user information and process orders.
- Responsive Design: Built with Tailwind CSS and DaisyUI for a mobile-first responsive design.
- Debounced Search: Reduces API calls while searching.

### APIs

This frontend interacts with the backend APIs to fetch product data, manage cart operations. Refer to the backend repository for detailed API documentation.
[Backend Repository](https://github.com/ahmedhimel21/fitness-equipment-and-accessories-backend)

### Technologies

- React: JavaScript library for building user interfaces.
- Redux: State management library.
- RTK Query: Data fetching and caching tool.
- React Router DOM: Declarative routing for React.
- Tailwind CSS: Utility-first CSS framework.
- DaisyUI: Tailwind CSS components.
- lodash: Debounce api calls
- react-beforeunload: Listen to the beforeunload window event in React.
- redux-persist: to persist redux local state to local storage
- sonner: showing toast
