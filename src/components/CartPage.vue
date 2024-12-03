<template>
  <div id="cart-page">
    <h1>Your Cart</h1>
    <div v-if="cart.length" class="cart-container">
      <div class="cart-card" v-for="product in cart" :key="product.id">
        <img :src="product.image" class="product-image" />
        <h3>{{ product.title }}</h3>
        <p>Price per Unit: ₹{{ product.price }}</p>
        
        <!-- Editable Quantity Input -->
        <div class="quantity-control">
          <label for="quantity">Quantity: </label>
          <input type="number" :id="'quantity' + product.id" v-model.number="product.Number" min="0"
            @input="updateQuantity(product.id, product.Number)"
          />
        </div>
        <p>Total Price: ₹{{ product.calculatedPrice.toFixed(2) }}</p>
        <button @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>

    <div v-else>
      <p>Your cart is empty. Add some products!</p>
    </div>

    <div v-if="cart.length > 0" class="checkout-container">
      <button class="checkout" @click="proceedToCheckout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { cartStore } from "../store/cart";

export default {
  name: "CartPage",
  data() {
    return {
      cart: cartStore.cart, // Access shared cart state
    };
  },
  methods: {
    removeFromCart(productId) {
      cartStore.removeFromCart(productId);
    },
    updateQuantity(productId, newQuantity) {
      cartStore.updateQuantity(productId, newQuantity);
    },
    proceedToCheckout() {
      alert("Proceeding to checkout with your selected items!");
      this.cart.splice(0);
    },
  },
};
</script>

<style scoped>
#cart-page {
  text-align: center;
  padding: 16px;
}

.cart-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.cart-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.cart-card h2 {
  font-size: 18px;
}

.cart-card button {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-card button:hover {
  background-color: #c9302c;
}

.checkout-container {
  margin-top: 16px;
}

.checkout {
  background-color: #5cb85c;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

.quantity-control input {
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

</style>