<template>
    <div id="products-page">
      <h1>Veggies Store!</h1>
      <div class="products-container">
        <!-- Product Cards -->
        <div
          class="product-card"
          v-for="product in products"
          :key="product.id"
        >
          <h2>{{ product.name }}</h2>
          <p>Price per kg: ₹{{ product.price }}</p>
  
          <!-- Input for Weight -->
          <input
            type="number"
            v-model="product.weight"
            :placeholder="'Enter weight in kg'"
            min="0.1"
            step="0.1"
            @input="calculatePrice(product)"
          />
  
          <!-- Display Total Price -->
          <p v-if="product.calculatedPrice">
            Total Price: ₹{{ product.calculatedPrice.toFixed(2) }}
          </p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { cartStore } from "../store/cart";
  
  export default {
    name: "ProductsPage",
    data() {
      return {
        products: [
          { id: 1, name: "Apples", price: 199, weight: 0, calculatedPrice: 0 },
          { id: 2, name: "Bananas", price: 79, weight: 0, calculatedPrice: 0 },
          { id: 3, name: "Carrots", price: 99, weight: 0, calculatedPrice: 0 },
          { id: 4, name: "Potatoes", price: 49, weight: 0, calculatedPrice: 0 },
          { id: 5, name: "Tomatoes", price: 89, weight: 0, calculatedPrice: 0 },
          { id: 6, name: "Onions", price: 60, weight: 0, calculatedPrice: 0 },
          { id: 7, name: "Cucumber", price: 40, weight: 0, calculatedPrice: 0 },
          { id: 8, name: "Lettuce", price: 120, weight: 0, calculatedPrice: 0 },
        ],
      };
    },
    methods: {
      // Calculate total price based on weight
      calculatePrice(product) {
        if (product.weight > 0) {
          product.calculatedPrice = product.price * product.weight;
        } else {
          product.calculatedPrice = 0;
        }
      },
      // Add product to the cart
      addToCart(product) {
        if (product.weight > 0) {
          const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            weight: product.weight,
            calculatedPrice: product.calculatedPrice,
          };
          cartStore.cart.push(cartItem);
          alert(`${product.name} (${product.weight} kg) has been added to the cart for ₹${product.calculatedPrice.toFixed(2)}!`);
          // Reset product weight and calculated price after adding to cart
          product.weight = 0;
          product.calculatedPrice = 0;
        } else {
          alert("Please enter a valid weight before adding to the cart.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Product Page Styles */
  #products-page {
    text-align: center;
    padding: 16px;
  }
  .products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row */
    gap: 16px;
    margin-top: 16px;
  }
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-card h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  .product-card input {
    margin: 8px 0;
    padding: 8px;
    width: 90%;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .product-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  .product-card button:hover {
    background-color: #0056b3;
  }
  </style>
  