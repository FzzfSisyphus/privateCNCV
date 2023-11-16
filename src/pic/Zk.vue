
<script setup>
import {NButton,NList,NListItem} from 'naive-ui';
import { useRouter } from "vue-router";
//import { productsStore } from "@/stores/products";
const router = useRouter()
function back(){
  router.push('/')
}
</script>
<template>
  <n-button class="btn" type="success" @click="back">
    返回
  </n-button>

    <n-list class="long-image-container">
        <n-list-item class="img-div">
            <img src="./Zk0.png" alt="Long Image" class="long-image" />
        </n-list-item >
        <n-list-item class="img-div">
            <img src="./Zk1.png" alt="Long Image" class="long-image" />
        </n-list-item >
        <n-list-item class="img-div">
            <img src="./Zk2.png" alt="Long Image" class="long-image" />
        </n-list-item>
        <n-list-item class="img-div">
            <img src="./Zk3.png" alt="Long Image" class="long-image" />
        </n-list-item>
    </n-list>
    
</template>

<style>
.btn{
  height: 100px;
  font-size: 40px;
}
.img-div{
    width: 65%;
}
.long-image-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
}
.long-image {
  width: 100%; /* Make the image take up 100% of the container width */
  height: auto; /* Maintain the aspect ratio while scaling the image */
  display: block; /* Ensure it behaves as a block-level element */
  
}
</style>
