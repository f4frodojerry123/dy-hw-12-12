<template>
  <router-view />
  <div v-if="!route.name" @click="page('1')">work1</div>
  <div v-if="!route.name" @click="page('2')">work2</div>
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
