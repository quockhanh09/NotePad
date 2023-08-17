<template>
  <header class="header" >
    <img src="@/assets/favicon.png" alt="Logo" />
    <h1 @click="goToHomePage">SmartNotePad</h1>
    <div class="header-buttons">
      <button @click="showFeatures">Feature</button>
      <button @click="showRegisterLogin">Register/Login</button>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      <button v-if="isLoggedIn">Setting</button>
      <button @click="() => this.showLanguages = true" >
        <i class="fas fa-globe"></i>  Language
      </button>
      <div class="language-options">
        <From v-if="showLanguages" :handleClose="() => this.showLanguages = false"/>
      </div>
    </div>
  </header>

  <div v-if="featureShown">
      <Features/>
    </div>
    <div v-if="showRegisterLoginPage">
      <RegisterLogin @onRegistration="handleRegistration" @onLogin="handleLogin" />
    </div>
</template>

<script>
import "./styles/style.css"
import Features from "./Features.vue"
import RegisterLogin from "./RegisterLogin.vue";
import From from "./From.vue";
export default {
    data() {
        return {
            showLanguages: false,
            featureShown: false,
            showRegisterLoginPage: false,
            isLoggedIn: false,
        };
    },
    methods: {
        // handleLanguagesToggle() {
        //     this.showLanguages =true;
        // },
        changeLanguage(language) {
            console.log(`Selected language: ${language}`);
        },
        showFeatures() {
          this.featureShown = !this.featureShown; 
         },
         showRegisterLogin() {
           this.showRegisterLoginPage = !this.showRegisterLoginPage;
          },

          handleRegistration(userInfo) {
      localStorage.setItem("user", JSON.stringify(userInfo));
      this.isLoggedIn = true;
      this.showRegisterLoginPage = false;
      console.log("User registered:", userInfo);
      this.$router.push("/");
    },

    logout() {
      localStorage.removeItem("user");
      this.isLoggedIn = false;
      this.$router.push("/");
    }

    
    },
    components: {From, Features,RegisterLogin  }
};
</script>

<style>
/* Add your CSS styles for the header component here */
</style>