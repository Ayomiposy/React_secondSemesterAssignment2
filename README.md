📦 React_secondSemesterAssignment2 – Bejamas Product Page
This project is a product listing and cart functionality demo built using **React, Bun, and Vite**. It dynamically renders products, allows users to add items to a cart, updates the cart count, supports filtering by category/price, and includes pagination for navigating product pages.

---

✨ Features

**Dynamic Product Grid**
Products are stored in a JavaScript array and rendered dynamically into the UI using React components.

**Add to Cart Functionality**
Each product includes an **Add to Cart** button. Clicking it:

- Increases the cart count displayed in the Navbar.
- Keeps track of how many items have been added.

**Filter by Category & Price**

- Includes reusable checkbox filters for categories (e.g., People, Pets, Food, Landmarks).
- Supports filtering by price ranges such as _Lower than $20_, _$20–$100_, etc.
- Custom checkbox styling with tick icons is implemented.

**Pagination**

- Simple page navigation with left/right arrows.
- Active page number is styled using CSS.

**Reusable Components**
The app is broken into small, reusable components:

- `Navbar` – Displays logo and cart count.
- `Header` – Highlights the featured product and description.
- `ProductListing` – Wraps the filter and product list.
- `Filter` – Renders category and price filters.
- `ProductList` – Handles filtering logic and product mapping.
- `ProductCard` – Displays individual product details.
- `Pagination` – Manages page navigation.

---

🛠️ Technologies Used

- **React (Vite + Bun)** – Component-based UI and fast dev server.
- **CSS3** – Styling, layout, and custom checkbox design.
- **JavaScript (ES6)** – React state management with `useState`.

---

📂 Project Structure

```
📦 React_secondSemesterAssignment2
 ┣ 📂 public
 ┃ ┗ 📂 assets        # Images and static files
 ┣ 📂 src
 ┃ ┣ 📜 App.css       # Component styles
 ┃ ┣ 📜 App.jsx       # Main App logic and components
 ┃ ┣ 📜 index.css     # Global styles
 ┃ ┣ 📜 main.jsx      # React DOM entry point
 ┣ 📜 index.html      # Root HTML
 ┣ 📜 style.css       # Additional styling
 ┣ 📜 vite.config.js  # Vite configuration
 ┣ 📜 bun.lock        # Bun lockfile
 ┣ 📜 package.json    # Project metadata & dependencies
 ┗ 📜 README.md       # Documentation
```

---

🚀 Setup Instructions

1. **Clone or Download** this repository.
2. Install dependencies with **bun**:

   ```bash
   bun install
   ```

3. Start the dev server:

   ```bash
   bun run dev
   ```

4. Open the local server link (usually `http://localhost:5173/`).
5. Interact with the app — filter products, add them to the cart, and test pagination.
