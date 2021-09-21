<template>
  <div v-if="TelaLogin"> <Login /> </div>
  
  <div v-else>
    <Navbar />
    <router-view/>
    <Footer /> 
  </div>
  


</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Login from './views/Login.vue'




export default {
  components: {
    Login,
    Navbar,
    Footer
  },
  computed:{
    TelaLogin() {
     return this.$route.name === 'Login'
    }
  }
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --white:#ffffff;
    --bgColor:#F8F8F8;
    --colorPrimary:#09B44D;
    --colorFilterButton:#EAEAEA;

    --colorText-default:#7B7B7B;
    --colorText-secondary:#97A7C3;

    --notifyDelay:#FF7777;
    --notifyAmount:#586FFF;

    --hoverColor-footer:#097C37;

    --unityMatriz:#09B44D;
    --unityFilial:#FFA217;
    --unityCd:#586FFF;
    --unityJaguarao:#da2c38;

    --confirmColor:#1492E6;
  }

  ::selection {
    background: none;
    color: none;
  }

  body{
    background: var(--bgColor);
    color: var(--colorText-default);
    font-family: sans-serif;
  }
  a{
    text-decoration: none;
    
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .limitW{
    max-width: 500px;
    width: 100%;
  }
  .containerAba{
    width: 100%;
    height: 85vh;
    position: relative;
    top: 4rem;
    display: flex;
    justify-content: center;
  }

</style>
