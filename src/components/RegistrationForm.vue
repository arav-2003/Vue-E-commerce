<template>
    <div class="registration-form">
      <h1>Register</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="form.username" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <button class="btn" type="submit">Register</button>
        
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: ''
        },
    methods: {
      handleSubmit() {
        if(this.form.username && this.form.email && this.form.password)
        {
          alert("Registered successfully")
        }
          this.form.username = '';
          this.form.email = '';
          this.form.password = '';
        }
      }
    }
  }
}

  </script>
  
  <style scoped>
  .registration-form {
    max-width: 400px;
    padding: 40px;
    border: 1px solid #e9b2b2;
    border-radius: 30px;
    background-color: #f9f9f9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .registration-form h1, h2 {
    text-align: center;
  }
  .registration-form form div {
    margin-bottom: 15px;
  }
  .registration-form input {
    width: 100%;
    padding: 8px;
  }
  .btn
  {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;

  }
  </style>
  