import { reactive } from "vue";

export const cartStore = reactive({
  cart: [],
  addToCart(product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct)
      {
      existingProduct.Number += product.Number;
      existingProduct.calculatedPrice += product.calculatedPrice;
    } else {
      this.cart.push({ ...product });
    }
  },
  removeFromCart(productId) {
    const index = this.cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  },
  updateQuantity(productId, newQuantity) {
    const product = this.cart.find((item) => item.id === productId);
    if (product && newQuantity >= 0) {
      product.Number = newQuantity;
      product.calculatedPrice = product.price * product.Number;
    }
  }
});
