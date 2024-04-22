<script setup></script>
<template>
    <div class="Container">
        <div class="User-container">
            <div class="User-box">
                <div class="img-div">
                    <img src="../../../../../Utils/adamzempa.jpg" alt="An Image of a Man" height="39px" width="39px"
                        class="image">
                    <div class="Status"></div>
                </div>
            </div>
            <div>
                <p class="userName">Steve Ruth</p>
                <p class="userStatus">Active</p>
            </div>
        </div>
        <div class="icons">
            <i class="pi pi-search" id="styles"></i>
            <i class="pi pi-phone bookmark" id="styles"></i>
            <i class="pi pi-video video" id="styles"></i>
            <i class="pi pi-info-circle" id="styles"></i>
            <i class="pi pi-ellipsis-v added profile" id="styles"></i>
        </div>

    </div>
</template>

<style scoped>
.Container {
    display: flex;
    width: 67vw;
    justify-content: space-between;
    align-items: center;
    padding: 13px 8px;
    background-color: #343535b8;
    position: fixed;
    top: 0;
    gap: 20px;
}

.User-container {
    display: flex;
    align-items: center;
    margin: 2px 8px;
}

.userName {
    margin: 0;
    font-size: 20px;
}

.userStatus {
    margin: 0;
    font-size: 15px;
}

.User-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-div {
    margin-right: 10px;
    display: flex;
}


.image {
    border-radius: 50%;
    height: 45px;
    width: 45px;
}

.Status {
    height: 9px;
    width: 9px;
    background-color: green;
    border-radius: 50%;
    position: relative;
    top: 31px;
    right: 9px;
}

.pi {
    font-size: 17px
}

.icons {
    display: flex;
    gap: 35px;
}



@media screen and (max-width: 990px) {
    .Container {
        width: 98vw;
    }
}
</style>
