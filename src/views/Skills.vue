<script setup>
import { NSpace,NCard,NDivider,NButton,NList,NListItem,NTag} from 'naive-ui';
</script>

<template>
    <n-divider />
    <div class="container">
    <n-space vertical  class="timeline">
        <div class="divTitle" >技能</div>
        <n-card size="small">
            语言：熟练Python, 掌握C/C++，Java，Golang，Javascript YOLO, OpenCV
        </n-card> 
        <n-card size="small" >
            框架：YOLO, OpenCV，OpenGL，Flask, React,Vue
        </n-card> 
        <n-card size="small" >
           工具类： Git，Linux, PostgreSQL,AWS,Docker
        </n-card> 
        <n-card size="small">
            英语流利，熟练办公软件
        </n-card> 
    </n-space>
    </div>
    
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
    width: 100%;
}
.timeline{
    width:90%
}

.content{
    font-size: 16px;
}
</style>