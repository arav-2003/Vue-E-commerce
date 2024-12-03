<template>
  <div id="products-page">
    <h1>Products</h1>
    <div v-if="loading">Loading products...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="products-container">
      <!-- Product Cards -->
      <div
        class="product-card"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h2>{{ product.title }}</h2>
        <p>Price: ₹{{ product.price }}</p>

        <!-- Input for Quantity -->
        <input
          type="number"
          v-model="product.Number"
          placeholder="Enter quantity"
          min="0"
          @input="calculatePrice(product)"
        />

        <!-- Display Total Price -->
        <p v-if="product.calculatedPrice > 0">
          Total Price: ₹{{ product.calculatedPrice.toFixed(2) }}
        </p>

        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { cartStore } from "../store/cart";

export default {
  name: "ProductsPage",
  data() {
    return {
      loading: true,
      products: [],
      error: null,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data.map((product) => ({
          ...product,
          Number: 0,
          calculatedPrice: 0,
        }));
      } catch (err) {
        this.error = "Failed to load products. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    calculatePrice(product) {
      if (product.Number > 0) {
        product.calculatedPrice = product.price * product.Number;
      } else {
        product.calculatedPrice = 0;
      }
    },
    addToCart(product) {
      if (product.Number > 0) {
        cartStore.addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          Number: product.Number,
          calculatedPrice: product.calculatedPrice,
        });
        alert(`${product.title} (${product.Number}) has been added to the cart.`);
        product.Number = 0;
        product.calculatedPrice = 0;
      } else {
        alert("Please enter a valid quantity.");
      }
    },
  },
  async mounted() {
    await this.fetchProducts();
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.product-image {
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 10px;
  object-fit: contain;
}
.product-card h2 {
  font-size: 18px;
  margin-bottom: 8px;
}
.product-card input {
  margin: 8px 0;
  padding: 8px;
  width: 20%;
  align-self: center;
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
