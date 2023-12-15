<template>
  <div class="header flex w-full h-[60px] justify-between items-center">
    <div class="logo-container cursor-pointer flex items-center" @click="changePage('/')">
      <img :src="$requireSafe(`logo.svg`)" alt="" class="w-20 min-w-[50px]">
    </div>
    <div class="navlist flex">
      <div
        v-for="list in navList"
        :key="list.name"
        class="navlist-list leading-[60px] whitespace-nowrap px-[10px] hover:bg-[#333] hover:text-[#fff] cursor-pointer"
        @click="changePage(list.path)"
      >
      {{ list.name }}
      </div>
    </div>
    <div class="nav-button flex items-center">
      <img :src="$requireSafe(`nav.svg`)" alt="" class="mx-[0] my-auto min-w-[20px]">
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
// defineProps({
//   msg: String,
// })

const changePage = (path) => {
  router.push(path)
}

const navList = reactive([
  {
    name: 'About',
    path: '/work2'
  },
  {
    name: 'Blog',
    path: '/work2'
  },
  {
    name: 'Learn',
    path: '/work2'
  },
  {
    name: 'Clone me',
    path: '/work2'
  },
  {
    name: 'Find me',
    path: '/work2'
  },
  {
    name: 'blablabla',
    path: '/work2'
  },
])

const count = ref(0)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
