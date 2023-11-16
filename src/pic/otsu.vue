
<script setup>
import {NButton} from 'naive-ui';
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

  <div class="long-image-container">
    <img src="./otsu.png" alt="Long Image" class="long-image" />
  </div>
</template>

<style>
.btn{
  height: 100px;
  font-size: 40px;
}
.long-image-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
}

.long-image {
  width: 50%; /* Make the image take up 100% of the container width */
  height: auto; /* Maintain the aspect ratio while scaling the image */
  display: block; /* Ensure it behaves as a block-level element */
  
}
</style>
