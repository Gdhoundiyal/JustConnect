<script setup>
</script>

<template>
    <div class="media-Container">
        <div class="media-box">
            <p class="media-text">MEDIA</p>
            <p class="showall-text">Show all</p>
        </div>
        <div class="img-box">
            <div><img src="../../../../../Utils/adamzempa.jpg" alt="an image of a man" height="50px" width="50" class="image "/></div>
            <div><img src="../../../../../Utils/adamzempa.jpg" alt="an image of a man" height="50px" width="50" class="image"/></div>
            <div><img src="../../../../../Utils/adamzempa.jpg" alt="an image of a man" height="50px" width="50" class="image"/></div>
            <div><img src="../../../../../Utils/adamzempa.jpg" alt="an image of a man" height="50px" width="50" class="image"/></div>
            <div class="media-num">+15</div>
        </div>
    </div>
</template>

<style scoped>

.media-Container{
    padding: 10px 0 30px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #454547;;
}
.media-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px;
}
.media-text{
    font-size: 13px;
}
.showall-text{
    font-size: 13px;
    color: green;
}
.img-box{
    display: flex;
    align-items: center;
}
.image{
    border-radius: 5px;
    margin: 2px;
}
.media-num{
    font-size: 13px;
}
</style>