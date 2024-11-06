# Gadget Heaven

### Live Website Link
[Visit Gadget Heaven](https://flourishing-meringue-0cb97b.netlify.app/)

### Requirement Document
[View Requirement Document](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-UniqueCoder17)

---

## Project Overview

Gadget Heaven is an e-commerce platform where users can explore, filter, and manage various gadgets. This website allows users to add items to a cart or wishlist, view their profiles, and create custom profiles to engage with the platform.

---

## Table of Contents
- [Live Website Link](#live-website-link)
- [Requirement Document](#requirement-document)
- [Project Overview](#project-overview)
- [React Fundamentals Used](#react-fundamentals-used)
- [Data Management](#data-management)
- [Key Features](#key-features)

---

### React Fundamentals Used

This project incorporates several key React concepts, including:

1. **Component-Based Architecture:** Structuring the UI into reusable components like `Gadgets`, `NavBar`, `Profile`, and `Dashboard`.

2. **State Management with Hooks:** Using `useState` and `useEffect` to manage state and side effects, such as loading and filtering gadgets.

3. **React Router:** Enabling smooth page navigation with components like `NavLink`, `useLocation`, and `Outlet` for a single-page app experience.

4. **Conditional Rendering:** Conditionally displaying components and styles based on state or route paths.

5. **Props Passing:** Passing data through props to enable child components, such as the `Gadget` component, to display specific gadget data.

---

### Data Management

Data in this project is handled through:

- **Local Storage:** Used for persistent storage of cart and wishlist items, allowing data to be saved across sessions.
  
- **React Context API (optional, if used):** Provides a global state to manage user information and profile data, making it accessible across multiple components.

---

### Key Features

1. **Product Filtering:** Users can filter gadgets by category such as "Laptops," "Phones," "Accessories," etc., to easily find products they are interested in.

2. **Cart and Wishlist Management:** Users can add gadgets to their cart or wishlist, with all data being stored in the local storage for persistence.

3. **Profile Creation:** Users can create and manage their profile, adding their personal information like name, email, and phone number.

4. **Interactive Navigation:** The navigation bar allows users to seamlessly move between different sections of the website, such as Home, Dashboard, and Profile.

5. **Responsive Design:** The website is fully responsive, providing a great user experience on both mobile and desktop devices.

---

### Installation Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-UniqueCoder17.git
