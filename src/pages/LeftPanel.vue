<template>      
<div>
    <div id="firstpaneDiv" class="menu_list">
    <h3 class="menu_head current">系统管理</h3>
    <h3 class="menu_head">场馆预定</h3>
    <h3 class="menu_head">活动预定</h3>
    <h3 class="menu_head">实时战况</h3>
    <h3 class="menu_head">装备管理</h3>
    </div>
</div>
</template>

<style scoped>

.menu_list {
    width: 268px;
    margin: 0;
}
 
.menu_head {
    height: 47px;
    line-height: 47px;
    padding-left: 38px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #f1f1f1;
    position: relative;
    margin: 0px;
    font-weight: bold;
    background: #51a9f18c;
}
 
.menu_list .current {
    background: #51a9f18c;
}
 
 
.menu_nva a:hover {
    text-decoration: none;
}
#firstpaneDiv {

    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    color: #fff;
}
</style>