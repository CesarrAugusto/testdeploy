<template>
    <div class="container_rows" :class="{'showInf': showInf}" @click="showInform">
        <div class="rows">
            <div class="inform">
                <div class="image">

                </div>
                <div class="title">
                    <h2>Embalagem  
                        <i class="fas fa-chevron-right" :class="{'showIncon': showInf}"></i> 
                    </h2>
                    <p>Jaguarão</p>
                </div>
            </div>
            <div class="number">
                <h1>00</h1>
            </div>
        </div>
        <div class="container_cliente">
            <div class="title_container">
                <h2>Cliente anexado:</h2>
            </div>
            <div class="scroll">
                <div class="rows rows-cliente">
            <div class="inform">
                <div class="image image-cliente">

                </div>
                <div class="title title-cliente">
                    <h2>Embalagem</h2>
                </div>
            </div>
            <div class="number number-cliente">
                <h1>00</h1>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return{
                showInf: false
            }
        },
        methods:{
            showInform(){
                this.showInf = !this.showInf
            }
        }
    }
</script>

<style scoped>
    .rows{
        display: flex;
        justify-content: space-between;
        padding: 1rem .2rem;
        cursor: pointer;
    }
    .rows-cliente{
       cursor: default;
       border-bottom: 1px solid rgba(42, 42, 42, 0.103);
    }

    .container_rows{
        transition: .5s;
        border-bottom: 2px solid rgba(0, 0, 0, 0.116);
        height: 5rem;
        overflow: hidden;
    }

    .showInf{
        height: 22rem;
    }
    .inform{
        display: flex;
        width: 100%;
    }
    .image{
        width: 3rem;
        min-width: 3rem;
        min-height: 3rem;
        height: 3rem;
        background: var(--bgColor);
        border-radius: 50%;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.253);
    }
    .image-cliente{
        border-radius: 0;
        box-shadow: none;
        width: 6rem;
    }
    .title{
       margin-left: 1rem;
       display: grid;
       width: 100%;
       align-items: center;
    }
    .title h2{
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title p{
        color: var(--unityJaguarao);
        font-weight: 700;
    }
    .title-cliente{
        color: var(--colorText-secondary);
    }
    .fas{
        color: var(--colorText-secondary);
        font-size: 1.2rem;
        transition: .2s;
    }
    .showIncon{
        transform: rotateZ(90deg);
    }
    .number h1{
        color: var(--colorPrimary);
    }
    .number-cliente{
        opacity: .5;
    }
    .title_container h2{
        color: var(--colorText-secondary);
        font-weight: 200;
        margin-top: 1rem;
    }
    .scroll{
        overflow-y: scroll;
        height: 14rem;
    }
    
</style>