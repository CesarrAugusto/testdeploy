<template>

<div class="containercard">
   <div class="card">
     <div class="titulo">
          <h1>SDRCTP</h1>
     </div>
    <div class="inputform">
      <p>Cadastro</p>
      <input type="text" name="" id="cadastro">
      <p>Senha</p>
      <input type="password" name="" id="senha">
    </div>
    <button class = "btlogin" @click="Home()">Login</button>

   
  </div>
    
</div>
 

</template>

<script>


export default {

  
  components:{
     
  },

  methods:{
   Home(){
    this.$router.push('/home')
    }
  }  
}

</script>

<style>
   
  .containercard{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   .card{
    width: 25rem;
    height: 30rem;
    background-color: var(--white);
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
    border-radius: 1rem;
    padding: 1.5rem;
    display: grid;
    justify-content: center;
    }

  .titulo{
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputform input{
    width: 100%;
    font-size: 1.5rem;
    border: none;
    margin-bottom: 10px;
    border-bottom: 2px solid var(--colorPrimary);
    padding: .5rem 0;
    outline: none;
  }

  .btlogin{
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    background-color: var(--colorPrimary);
    color: var(--white);
  }

  .btlogin:hover{
    background-color: var(--hoverColor-footer);
  }

  .titulopagina{
    justify-content: center;
    align-content: center;
    display: flex;
    padding-top: 1rem;
  }

</style>