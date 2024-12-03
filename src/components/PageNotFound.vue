<template>
    <div class="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found-page {
    text-align: center;
    margin-top: 50px;
  }
  .not-found-page h1 {
    font-size: 48px;
    color: #ff6b6b;
  }
  .not-found-page p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .not-found-page a {
    color: #000000;
    text-decoration: none;
  }
  .not-found-page a:hover {
    text-decoration:underline;
  }
  </style>
  