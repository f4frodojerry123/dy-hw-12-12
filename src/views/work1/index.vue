<template>
  <div class="work-1">
    <header-1 class="mb-10 px-[20px] max-w-[1440px] mx-auto"></header-1>
    <card-1
      v-for="(card, index) in cardList"
      :key="index"
      :img-path="card.imgPath"
      :style="card.style"
      :align="card.align"
      class="p-5 mx-auto"
      :class="{'bg-black': card.style === 'black'}"
    />
  </div>
  
</template>
<script setup>
import header1 from  '../../components/_page/work1/header1/index.vue'
import card1 from  '../../components/_page/work1/card1/index.vue'
const cardList = reactive([
  {
    imgPath: 'work1-1.jpg',
    style: 'white',
    align: 'left'
  },
  {
    imgPath: 'work1-2.jpg',
    style: 'black',
    align: 'right'
  },
  {
    imgPath: 'work1-3.jpg',
    style: 'white',
    align: 'left'
  },
  {
    imgPath: 'work1-4.jpg',
    style: 'black',
    align: 'right'
  }
])
</script>
<style scoped>
</style>
