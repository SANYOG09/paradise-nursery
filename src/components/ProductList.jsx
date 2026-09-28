import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  // MEDICINAL PLANTS
  {
    id: 1,
    name: "Aloe Vera",
    price: 299,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 399,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400",
  },
  {
    id: 3,
    name: "Tulsi",
    price: 199,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
  },
  {
    id: 4,
    name: "Lavender",
    price: 349,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400",
  },
  {
    id: 5,
    name: "Mint Plant",
    price: 179,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400",
  },
  {
    id: 6,
    name: "Rosemary",
    price: 249,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8f5b5f4?w=400",
  },

  // FLOWERING PLANTS
  {
    id: 7,
    name: "Rose",
    price: 249,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=400",
  },
  {
    id: 8,
    name: "Orchid",
    price: 599,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1566907225476-3d9b8c8e9c5b?w=400",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 299,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 279,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 11,
    name: "Marigold",
    price: 199,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=400",
  },
  {
    id: 12,
    name: "Petunia",
    price: 229,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1523430118842-7e5e1e6e6f47?w=400",
  },

  // INDOOR PLANTS
  {
    id: 13,
    name: "Money Plant",
    price: 199,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594575281-4a0f0f4f3f4f?w=400",
  },
  {
    id: 14,
    name: "Spider Plant",
    price: 249,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
  },
  {
    id: 15,
    name: "ZZ Plant",
    price: 499,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
  },
  {
    id: 16,
    name: "Monstera",
    price: 699,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594575281-4a0f0f4f3f4f?w=400",
  },
  {
    id: 17,
    name: "Rubber Plant",
    price: 549,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 18,
    name: "Peace Lily",
    price: 449,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Medicinal", "Flowering", "Indoor"];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">
      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2>{category} Plants</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;