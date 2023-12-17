<template>
  <!-- <div @click="changePage()">work1</div> -->
  <div class="w-[100%] flex justify-center md:space-x-10 space-x-0">
    <div
      class="img-container flex items-center"
      :class="{'order-2': align === 'right'}"
    >
      <img class="w-[200px] md:!w-[540px]" :src="$requireSafe(`${imgPath}`)" alt="">
    </div>
    <div 
      class="flex flex-col justify-center text-right w-[340px]"
      :class="[
        {'text-white': style === 'black'},
        {'!text-left': align === 'right'},
        ]"
      >
      <div class="md:text-4xl text:xl text-bold mb-5">Lorem, ipsum.</div>
      <div class="flex flex-col space-y-[5px] mb-[10px] md:text-lg text-sm">
        <div>
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div>
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div
        class="border-[#333] border-2 rounded-md text-center px-10 py-2 md:hover:bg-[#333] md:hover:text-[#fff] cursor-pointer mr-0 ml-auto"
        :class="{'!mr-auto !ml-0': align === 'right'}"
      >
        Lorem
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const route = useRoute();
const props = defineProps({
  imgPath: {
    type: String,
    default: '',
  },
  style: {
    type: String,
    default: 'white',
  },
  align: {
    type: String,
    default: 'left',
  }
})

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
