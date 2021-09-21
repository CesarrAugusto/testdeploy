<template>
    <footer>
        <div class="footer_container limitW">
            <div class="buttonFooter">
                <i class="fas fa-dolly-flatbed"></i>
                <p>Disponíveis</p>
            </div>
            <div class="QR-CodeButton">
                <i class="fas fa-qrcode"></i>
            </div>
            <div class="buttonFooter">
                <i class="fas fa-dolly-flatbed"></i>
                <p>Em uso</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 5rem;

        background: var(--bgColor);
        box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.253);
    }
    .footer_container{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .QR-CodeButton{
        box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.253);
        background: var(--colorPrimary);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        font-size: 2.3rem;
        position: relative;
        bottom: 2.5rem;
        cursor: pointer;
    }

    .buttonFooter{
        text-align: center;
        padding: 0 1rem;
    }
</style>