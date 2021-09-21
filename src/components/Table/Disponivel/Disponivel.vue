<template>
    <div class="containerTable">
        <div class="title">
            <h2>Embalagem</h2>
            <h2>Quant.</h2>
        </div>
        <slot></slot>
    </div>
</template>

<script>


export default {

}
</script>

<style scoped>
    .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid rgba(0, 0, 0, 0.116);
        padding: 1rem 0;
        
    }
    .title h2{
        color:var(--colorText-secondary);
        font-weight: 400;
    }
</style>