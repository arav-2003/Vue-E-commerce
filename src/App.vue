<template>
  <div id="app">
    <!-- Navbar -->

    <header v-if="!isNotFoundPage">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/About">About</router-link></li>
          <li><router-link to="/Products">Products</router-link></li>
          <li><router-link to="/Cart">Cart</router-link></li>
          <!----<li><router-link to="/Register"> Register</router-link></li>-->
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view></router-view>  <!-- This will display the routed components -->
    </main>

    <!-- Footer -->
    <footer v-if="!isNotFoundPage">
      <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    // Check if the current route is the 404 page
    isNotFoundPage() {
      return this.$route.name === "NotFound";
    },
  },
};
</script>

<style scoped>
/* Styles for App.vue */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar Styles */
header {
  background-color: #333;
  padding: 1rem;
}
header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 0;
  padding: 0;
}
header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 22px;
}
header nav ul li a:hover {
  text-decoration: underline;
}

/* Main Content Styles */
main {
  flex: 1;
  padding: 2rem;
}

/* Footer Styles */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 4px;
}
</style>
