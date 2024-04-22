<script setup>
</script>

<template>
    <div class="file-Container">
        <div class="file-heading">Attached File</div>
        <div class="file-box">
            <div class="file-text-icon">
                <i class="pi  pi-image left-icon"></i>
            </div>
                <div class="text">
                    <p class="text-title" >Image.01lkahjskldh;klfhaskdhf;k</p>
                    <p class="text-size">12kb</p>
                </div>
            <div class="download-more-icon">
                <i class="pi  pi-arrow-circle-down right-icons" ></i>
                <i class="pi  pi-ellipsis-h right-icons"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>

.file-Container{
    padding-bottom: 20px;
    
}

.file-box{
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 5px;
}
.file-heading{
    padding-bottom: 20px;
}
.file-text-icon{
display: flex;
justify-content: center;
align-items: center;
}
.download-more-icon{
    display: flex;
    align-items: center;
}
.pi{
    margin: 4px;
}
.left-icon{
    padding: 0 15px 0 5px; 
}
.right-icons{
    padding: 0 10px 0 10px; 
}
.text{
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
}
.text-title{
    margin: 0;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    padding: 5px 0px;
}
.text-size{
    margin: 0;
    font-size: 12px;
}
</style>