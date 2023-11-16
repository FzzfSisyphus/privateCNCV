<script setup>
import { NSpace,NCard,NDivider} from 'naive-ui';
import { useRouter } from "vue-router";

const router = useRouter()

function navigateToComponentOne() {
    router.push('/ped');
}
function navigateToComponentTwo() {
    router.push('/otsu');
}

</script>


<template>
    <n-divider />
    <div class="container">
    <n-space vertical  class="timeline">
        <div class="divTitle">项目经历</div>
        <n-card size="huge" hoverable @click="navigateToComponentTwo">
            <n-space vertical class="content">
            <div class="content-title">
                基于改进otsu的螺钉检测反光优化算法
            </div>
            <div>
                搭建了基于yolov5的AI检测工厂装配线螺钉数量的系统
            </div>
            <div>
                发现零件反光容易造成误检的问题,提出并实现了改进算法 最终提高了17%的检测平均置信度
            </div>
            </n-space>
        </n-card> 
        <n-card size="huge" hoverable @click="navigateToComponentOne">
            <n-space vertical class="content">
            <div class="content-title">
                人流追踪和移动分析：
            </div>
            <div>

                在五人小组中，为实现对行人的多目标追踪，在STEP-ICCV21数据集上，
            </div>
            <div>

                主导了路线选择，对比了传统CV以及Fast-RCNN，FCOS, 等AI框架选择了基于YOLO-v5，并用gamma矫正以及对比度拉伸提高了检测准确度
            </div>
            <div>
                实现了行人追踪，人群聚集检测等主要功能
            </div>
            </n-space>
        </n-card> 
    </n-space>
    </div>
</template>

<style scoped>
.content-title{
    font-size: 20px;
}
.container{
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
}

.timeline{
    width:90%
}

.content{
    font-size: 16px;
}
</style>