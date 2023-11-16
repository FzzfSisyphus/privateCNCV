<script setup>
import { NSpace,NCard,NTimeline,NTimelineItem } from 'naive-ui';
</script>

<template>
    
    <div class="container">
        
        <n-timeline class="timeline">
        <div class="divTitle">教育经历</div>
            <n-timeline-item type="success" >
                <n-card class="card" title="新加坡国立大学 National University of Singapore " size="medium" hoverable>
                    <div class="degreeInfo">
                        <div class="type">软件工程 硕士</div>
                        <div class="location">新加坡</div>
                        <div class="time">08/2023 - 至今 </div>
                    </div>
                    相关课程：云原生方案设计，IoT架构设计，实时数据处理系统架构

                </n-card>
            </n-timeline-item> 
            
            <n-timeline-item type="success">
                <n-card title="新南威尔士大学 University of New South Wales" size="medium" hoverable>
                    <div class="degreeInfo">
                        <div class="type">计算机科学 荣誉学位 (Class 2 Division 1) </div>
                        <div class="location">悉尼，澳大利亚</div>             
                        <div class="time">03/2022 - 12/2022</div> 
                    </div>
                    研究课题：区块链的扩容方案      
                    相关课程： 高级算法设计，计算机视觉，神经网络和深度学习
                </n-card>
            </n-timeline-item>
            
            <n-timeline-item type="success">
                <n-card title="新南威尔士大学 University of New South Wales" size="medium" hoverable>
                    <div class="degreeInfo">
                        <div class="type"> 计算机科学 本科 	</div>	
                        <div class="location">悉尼，澳大利亚</div>             
                        <div class="time"> 07/2018 - 02/2022</div> 
                    </div>
                    相关课程： 数据结构和算法，高级C++编程，计算机图形学，深度学习
                </n-card>
            </n-timeline-item>

    </n-timeline>
        
    </div>
</template>

<style scoped>

.container{
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
}

.timeline{
    width:90%
}
.card{
    width: 100%;
}
.degreeInfo{
    font-size: 18px;
    display: flex; 
}
.type{
width: 80%;
}
.location{
    width:10%;
}
.time{
    width:10%
}
</style>