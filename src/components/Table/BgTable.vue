<template>
    <div class="containerTable">
        <slot></slot>
        <div class="box"></div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .containerTable{
        padding: 1rem;
        width: 100%;
        min-height: 100%;
        margin-bottom: 2rem;
        background: var(--white);
        border: 2px solid var(--colorPrimary);
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;

        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.253);
    }
    /* a class box nesse component */
    .box{
        width: 100%;
        height: 4rem;
    }
    
</style>