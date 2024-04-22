<script setup>

</script>

<template>
    <div class="Container">
        <div>
            <p class="heading">If several languages coalesce, the grammar of the resulting language is more simple.</p>
        </div>
        <div class="heading-box">
            <div class="info-box">
                <i class="pi pi-user"></i>
                <p class="box-text">Adam Zampa</p>
            </div>
            <div class="info-box">
                <i class="pi pi-comment  "></i>
                <p class="box-text">admin@themesbrand.com</p>
            </div>
            <div class="info-box">
                <i class="pi pi-map-marker"></i>
                <p class="box-text">California, USA</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.Container{
    width: 22vw;
    border-bottom: 1px solid #454547;
}
.heading{
    font-size: 14px;
}
.info-box{
    display: flex;
    align-items: center;
    margin-bottom: 0;
}
.pi{
    margin-right: 8px;
}
.box-text{
    margin: 8px;
    font-size: 13px;
}
.heading-box{
    margin-bottom: 20px;
}

@media Screen and (max-width: 990px){
    .Container{
        width: 92vw;
    }
    .pi{
    margin-right: 1rem;
}
    .info-box{
        width: 20vw;
    }
}
</style>