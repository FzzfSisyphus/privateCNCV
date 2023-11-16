<script setup>
import AboutMe from './AboutMe.vue';
import EdgBg from './EduBg.vue';
import Reserch from './reserch.vue';
import Project from './Project.vue';
import Selfintro from './Selfintro.vue';
import Skills from './Skills.vue';
import Ped from '../pic/PedestrainDetection.vue';
import { defineComponent, ref } from 'vue'



</script>

<template>

  <main>
    <AboutMe/>
    <selfintro/>
    <skills/>
    <EdgBg/>
    <Reserch/>
    <Project/>
    

  </main>
</template>

<style >
.divTitle{
  font-size: 24px;
}
</style>