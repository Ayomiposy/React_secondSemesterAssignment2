import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 0,
    name: "Samurai King Resting",
    price: 1000,
    image: "./images/dog.png",
    category: "Pets",
  },

  {
    id: 1,
    name: "Red Bench",
    image: "./images/red-bench.png",
    price: 3.89,
    category: "People",
  },

  {
    id: 2,
    name: "Egg Ballon",
    image: "./images/egg-baloon.png",
    category: "Food",
    price: 93.89,
    range: "$20 - $100",
  },

  {
    id: 3,
    name: "Egg Ballon",
    image: "./images/egg-baloon.png",
    category: "Food",
    price: 93.89,
  },

  {
    id: 4,
    name: "Man",
    image: "./images/Man.png",
    category: "People",
    price: 100.0,
  },

  {
    id: 5,
    name: "Architecture",
    image: "./images/Architecture.png",
    category: "Landmarks",
    price: 101.0,
  },

  {
    id: 6,
    name: "Architecture",
    image: "./images/Architecture.png",
    category: "Landmarks",
    price: 101.0,
  },
];

function App() {
  const [count, setCount] = useState("");

  const addToCart = () => {
    setCount(Number(count) + 1);
  };

  return (
    <>
      <Navbar count={count} />
      <Header addToCart={addToCart} />
      {/* <ProductListing addToCart={addToCart} /> */}
      <ProductList addToCart={addToCart} />
      <Pagination totalPages={4} />
    </>
  );
}

// navbar component
function Navbar({ count }) {
  return (
    <nav className="navlist">
      <img src="/images/logo.png" className="logo" alt="logo" />
      <div>
        <img
          src="/images/cart icon.png"
          className="cart-icon"
          alt="cart icon"
        />
        <span className={`cart-count ${count > 0 ? "cart-active" : ""}`}>
          {count}
        </span>
      </div>
    </nav>
  );
}

function Header({ addToCart }) {
  return (
    <header>
      <HeaderProduct addToCart={addToCart} />
      <HeaderDescription />
    </header>
  );
}

function HeaderProduct({ addToCart }) {
  const product = products.find((p) => p.id === 0);

  return (
    product && (
      <div className="top-product" key={product.id}>
        <div className="header-product-top">
          <h2>{product.name}</h2>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="top-product-image"
        />
      </div>
    )
  );
}

function HeaderDescription() {
  return (
    <div className="product-description">
      <div class="about">
        <h2>
          About the Samurai King Resting <br />
          <span>Pets</span>
        </h2>
        <p>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder text to mockup various fonts for a type specimen
          book.So how did the classical Latin become so incoherent? According to
          McClintock.
        </p>
      </div>

      <div class="featured-items">
        <h2>People also buy</h2>
        <div class="product-img-list">
          <img src="./images/Rectangle 10.png" alt="featured item" />
          <img src="./images/Rectangle 10.1.png" alt="featured item" />
          <img src="./images/red-bench.png" alt="featured item 3" />
        </div>
        <p class="details">
          <span>Details</span> <br />
          Size: 1020 x 1020 pixel <br />
          Size: 15 mb
        </p>
      </div>
    </div>
  );
}

// function ProductListing({ addToCart }) {
//   return (
//     <div className="productlist">
//       <ProductList addToCart={addToCart} />
//     </div>
//   );
// }

function Filter({ handleFilterProducts }) {
  const [Ticked, setTicked] = useState({});

  const handleTicked = (e) => {
    const { id, checked } = e.target;
    setTicked((prev) => ({ ...prev, [id]: checked }));
  };

  function renderCheckbox(id, label) {
    return (
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={label}
          onChange={(e) => {
            handleFilterProducts(e);
            handleTicked(e);
          }}
        />
        <img
          src={Ticked[id] ? "./images/tick-mark.png" : "./images/tick.png"}
          alt="mark icon"
          className="custom-checkbox"
        />
        {label}
      </label>
    );
  }

  return (
    <aside className="filter">
      <h2 className="category-title">Category</h2>
      <div className="category">
        {renderCheckbox("People", "People")}
        <br />
        {renderCheckbox("Premium", "Premium")}
        <br />
        {renderCheckbox("Pets", "Pets")}
        <br />
        {renderCheckbox("Food", "Food")}
        <br />
        {renderCheckbox("Landmarks", "Landmarks")}
        <br />
        {renderCheckbox("Cities", "Cities")}
        <br />
        {renderCheckbox("Nature", "Nature")}
        <br />
      </div>

      <h2>Price</h2>
      <div className="price">
        {renderCheckbox("Lower than $20", "Lower than $20")}
        <br />
        {renderCheckbox("$20 - $100", "$20 - $100")}
        <br />
        {renderCheckbox("$100 - $200", "$100 - $200")}
        <br />
        {renderCheckbox("More than $200", "More than $200")}
      </div>
    </aside>
  );
}

function ProductList({ addToCart }) {
  const [isChecked, setIsChecked] = useState([]);
  const handleFilterProducts = (e) => {
    const { value, checked } = e.target;
    setIsChecked((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  // filtered product
  const filteredproduct =
    isChecked.length > 0
      ? products.filter((p) => isChecked.includes(p.category))
      : products;

  return (
    <div className="products">
      <Filter handleFilterProducts={handleFilterProducts} />
      <ul className="product-grid">
        {filteredproduct.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ product }) {
  if (product.id === 0) return null;
  return (
    <li className="product-card">
      <img src={product.image} alt={product.name} />
      <button>Add to Cart</button>
      <p className="product-category">{product.category}</p>
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
    </li>
  );
}

function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        className="arrow-left"
        onClick={handlePrev}
        disabled={currentPage === 1}
      ></button>
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <p
            className={currentPage === page ? "active-page" : "page-num"}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </p>
        );
      })}
      <button
        className="arrow-right"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      ></button>
    </div>
  );
}

export default App;
