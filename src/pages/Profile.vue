<template>
<div id="profile-container">
    <div v-for="(item,index) in items" 
    :key="index" class="list-item cover" 
        :style="{ 'background-image': 'url(' + item.url + ')' }">
        <div class="cover">
            <span>{{item.name}}</span>
        </div>
    </div>
</div>  
</template>

<script>

export default {
    data() {
        return {
            items:[
                {name:'作战训练', url:require('../assets/img/background1.jpg')},
                {name:'我的预定', url:require('../assets/img/background2.jpg')},
                {name:'设备管理', url:require('../assets/img/background1.jpg')},
                {name:'我的积分', url:require('../assets/img/background2.jpg')},
            ]
        }
    }
}
</script>

<style scoped>
#profile-container {
    display: flex;
    height: 100%;
    flex-direction: column;
}
.list-item {
    color:white;
    text-align: center;
    flex-grow: 1;
    background: no-repeat;
    background-size: cover
}
.list-item span {
    font-size: 1.5rem;
    display: inline-block;
    height: 30px;
    position: relative;
    top:50%;
    transform: translateY(-50%);
}
.cover {
    background: #00000088 no-repeat cover;
    height: 100%;
}
</style>