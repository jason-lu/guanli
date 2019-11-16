<template>
        <div id="firstpaneDiv" class="menu_list">
            <a class="menu_head current">系统管理</a>
            <a class="menu_head">场馆管理</a>
            <router-link to="/management/activityMa">
                <a class="menu_head">活动管理</a>
            </router-link>
            <router-link to="/management/realtime">
                <a class="menu_head">实时战况</a>
            </router-link>
            <a class="menu_head">装备管理</a>
        </div>
    </div>
</template>

<style scoped>
    #firstpaneDiv {
        width: 150px;
        position: fixed;
        top: 50%;
        left: 10px;
        /*偏移*/
        transform: translateY(-50%);
        color: #fff;
    }

    .menu_head {
        /* margin-left: 50px;  */
        /* border-radius: 5px; */
        float: left;
        width: 100%;
        height: 47px;
        line-height: 47px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        border: 1px solid #f1f1f1;
        font-weight: bold;
        background: #51a9f18c;
    }

    a {
        text-decoration: none;
    }

    .menu_list .current {
        background: #51a9f18c;
    }


    .menu_nva a:hover {
        text-decoration: none;
    }

    
</style>