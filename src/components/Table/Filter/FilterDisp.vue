<template>
    <div class="titleFilter">
        <h1>Disponíveis</h1>
    </div>
    <div class="container_filter">
        <div class="filter" @click="myFilterMatriz" :class="{'showFilter': showFilter_Matriz}"><p>Matriz</p></div>
        <div class="filter" @click="myFilterFilial" :class="{'showFilter': showFilter_Filial}"><p>Filial</p></div>
        <div class="filter" @click="myFilterCd" :class="{'showFilter': showFilter_Cd}"><p>CD</p></div>
        <div class="filter" @click="myFilterJaguarao" :class="{'showFilter': showFilter_Jaguarao}"><p>Jaguarão</p></div>
    </div>
    <div class="total">
        <h3>Total:</h3>
        <h1>00</h1>
    </div>
</template>
<script>
    export default {
        name: 'FilterDisp',
        emits: ['trocarValor'],
        data: () => {
            return{
                showFilter_Matriz : true,
                showFilter_Filial : false,
                showFilter_Cd : false,
                showFilter_Jaguarao : false
            }
        },
        methods:{
            myFilterMatriz(){
                this.showFilter_Matriz = !this.showFilter_Matriz;
                this.$emit("matriz");
            },
            myFilterFilial(){
                this.showFilter_Filial  = !this.showFilter_Filial ;
                this.$emit("filial");
            },
            myFilterCd(){
                this.showFilter_Cd  = !this.showFilter_Cd ;
                this.$emit("cd");
            },
            myFilterJaguarao(){
                this.showFilter_Jaguarao  = !this.showFilter_Jaguarao;
                this.$emit("jaguarao");
            }
        }
    }
</script>
<style scoped>
    .titleFilter{
        border-bottom: 2px solid rgba(0, 0, 0, 0.116);
        padding: 1rem 0;
    }
    .container_filter{
        display: flex;
        padding: 1rem 0;
    }
    .container_filter p{
        font-weight: 600;
    }
    .filter{
        background: var(--colorFilterButton);
        margin-right: .5rem;
        padding: .3rem;
        width: 5rem;
        text-align: center;
        border-radius: 1rem;
        cursor: pointer;
    }
    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem 0;
    }
    .total h3{
        color:var(--colorText-secondary);
        font-weight: 200;
    }
    .total h1{
        color:var(--colorPrimary);
        font-weight: 200;
    }
    .showFilter{
        background: var(--colorPrimary);
        color: var(--white);
    }
</style>