<template>
    <div class="navbar_container">
        <div class="navbar limitW">
            <div class="burgerMenu" @click="showNav">
                <i class="fas fa-bars"></i>
            </div>
            <div class="title">
                <h2>SDRTCP</h2>
            </div>

            <div class="notify" @click="showNotify">
                <i class="fas fa-bell"></i>
            </div>
        </div>
    </div>
    
        <div class="menu" :class="{'show': showMenu}">
            <div class="container_link">
                <ul>
                    <div class="titleMenu">
                    <p>Telas de acesso</p>  
                    </div>
                    <li><router-link to="/about"><i class="fas fa-plus"></i> Todas embalagens</router-link></li>
                    <li><router-link to="/lista-manutencao"><i class="fas fa-wrench"></i> Em manutenção</router-link></li>
                    <div class="titleMenu">
                    <p>Dicas</p>  
                    </div>
                    <li><router-link to="/lista-manutencao"><i class="fas fa-file"></i> Manual</router-link></li>
                    <div class="titleMenu">
                        <p>Outros</p>
                    </div>
                    <li><router-link to="/lista-manutencao"><i class="fas fa-cog"></i> Configuração</router-link></li>
                    <li><router-link to="/"><i class="fas fa-door-open" ></i> Sair</router-link></li>
                </ul>
            </div>
        </div>
<!-- notificação -->
        <div class="menuNotify" :class="{'showNoti': showNoti}">
            <div class="container_link container_notify">
                <div class="titleNotify">
                    <h2>Embalagens paradas</h2>
                    <p>Nos clientes:</p>
                </div>

                <div class="listNotify">
                    <div class="imageNotify">
                        <p>image</p>
                    </div>
                    <div class="notifyName">
                        <h1>nomecliente</h1>
                    </div>
                    <div class="notifyNumber">
                        <h1>00</h1>
                        <div class="alert">
                            <div class="alertIcon"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="bgMenu" :class="{'showBgMenu': showMenu}"></div>
        <div class="bgMenu" :class="{'showBgMenu': showNoti}"></div>

</template>
<script>
    export default{
        data: () => {
            return {
                showMenu: false,
                showNoti: false
            }
        },
        methods:{
            showNav(){
                this.showMenu = !this.showMenu
                this.showBgMenu = !this.showBgMenu
                this.showNoti = false
            },
            showNotify(){
                this.showNoti = !this.showNoti
                this.showMenu = false
            },

            Home(){
                this.$router.push('/home')
            }  
        }
    }

</script>

<style scoped>
    .navbar{
        padding: 0 1rem;
        
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    .navbar_container{
        position: fixed;
        width: 100%;
        background: var(--bgColor);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.253);
        z-index: 9999;
    }
    .navbar_container .title{
        color:var(--colorPrimary);
    }
    /* menu lateral ==============================================*/
    .burgerMenu{
        font-size: 2rem;
        cursor: pointer;
    }
    .menu{
        background: var(--white);
        height: 100%;
        width: 0px;
        transition: .2s;
        z-index: 10;
        display: grid;
        align-items: center;
        position: fixed;
        overflow: hidden;
    }
    .show{
       width: 500px; 
    }
    .bgMenu{
        z-index: 0;
        width: 100%;
        height: 100vh;
        position: fixed;
    }
    .showBgMenu{
        z-index: 9;
        transition: .5s;

        background: #020e484d;
        backdrop-filter: blur(5px);
    }
    .container_link{
        height: 75vh;
    }
    .titleMenu{
        padding: 1rem .5rem;
        color: var(--colorPrimary);
        font-weight: 700;
    }
    li{
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: 700;
        background: var(--bgColor);
    }
    li a{
        color: var(--colorText-default);
    }
    
    li:hover{
        background: var(--colorPrimary);
    }
    li:hover a{
        color: var(--white);
    }
    /* notificação ==========================================================*/
    .notify{
        font-size: 1.5rem;
        cursor: pointer;
    }
    .container_notify{
        color:var(--colorText-secondary);
        padding: 0 2vw;
    }
    .titleNotify{
        width: 100%;
        border-bottom: 2px solid rgba(0, 0, 0, 0.116);
        padding: 1rem 0;
    }
    .titleNotify h2{
        margin-bottom: 1rem;
    }
    .listNotify{
        display: flex;
        justify-content: space-between;
        height: 3rem;
        align-items: center;
    }

    .notifyNumber{
        display: flex;
        align-items: center;
    }

    .notifyNumber h1{
        color: var(--colorPrimary);
        font-size: 2.2rem;
        display: flex;
    }
    .notifyName h1{
        font-size: 1rem;
        text-transform: uppercase; 
    }
    .alertIcon{
        background: var(--notifyDelay);
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }
    .alert{
        width: 2rem;
        display: flex;
        justify-content: center;
    }

    .menuNotify{
        background: var(--white);
        height: 100%;
        width: 0px;
        transition: .2s;
        z-index: 10;
        display: grid;
        align-items: center;
        position: fixed;
        right: 0;
        overflow: hidden;
    }
    .showNoti{
        width: 500px;
    }
    @media only screen and (max-width: 600px) {
       .show, .showNoti{
           width: 80%;
       }
  }
</style>