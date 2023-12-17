<template>
  <router-view />
  <div v-if="!route.name" class="text-5xl flex flex-col items-center justify-center space-y-2">
    <div @click="page('1')">work1</div>
    <div @click="page('2')">work2</div>
  </div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
const page = (index) => {
  router.push(`/work${index}`)
}
</script>
<style scoped lang="scss">

</style>
