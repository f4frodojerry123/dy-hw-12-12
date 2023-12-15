<template>
  <div class="work-2 p-[20px] bg-black !pb-[5px]">
    <div class="header-2 flex bg-gray-400 rounded-[5px] mb-[5px]">
      <div
        v-for="list in navList"
        :key="list.name"
        class="px-[20px] hover:bg-black py-[10px] cursor-pointer text-black hover:text-white flex justify-center items-center"
        @click="changePage(list.path)"
      >
        <template v-if="list.name === 'logo'">
          <img
            :src="$requireSafe(`logo2.svg`)"
            alt=""
            class="w-[40px] h-[40px] mx-auto my-0"
          />
        </template>
        <template v-else>
          <div>
            {{ list.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="banner flex bg-white justify-center space-x-[20px] mb-[5px]">
      <div class="flex flex-col justify-center p-[20px]">
        <span class="title"> Hello, </span>
        <span class="title"> Im Mac. </span>
        <span> I'm a free retro Webflow template made by </span>
        <span class="underline decoration-2 font-bold"> DY Cor. </span>
      </div>
      <div class="img-container p-[20px] py-[80px]">
        <img :src="$requireSafe(`mac-banner.svg`)" alt="" />
      </div>
    </div>
    <div class="swiper-container bg-white flex flex-col items-center">
      <div
        class="quick-links-container flex justify-between translate-y-[-50%] bg-gray-300 w-[80%] cursor-pointer"
      >
        <div
          v-for="(links, index) in quickLinks"
          :key="index"
          class="quick-links p-[5px] border border-y-2 border-black hover:bg-black hover:text-white flex-grow"
          :class="{
            'border-l-2': !index,
            'border-r-2': index === quickLinks.length - 1,
          }"
          @click="changePage(list.path)"
        >
          <div>
            {{ links.name }}
          </div>
        </div>
      </div>

      <div class="w-[80%] my-[50px]">
        <span class="swiper-title text-4xl font-black"> Projects </span>
        <swiper
          :speed="500"
          :slides-per-view="2.3"
          :space-between="50"
          class="!mt-[50px] !p-[10px]"
          slide-to-clicked-slide
          grabCursor
        >
          <swiper-slide v-for="(item, index) in 4" :key="index">
            <div class="border border-black card-shadow min-w-[350px]">
              <div
                class="slider-title flex bg-gray-400 border-b-2 border-black py-[5px]"
              >
                <div class="dot"></div>
                <div class="dot"></div>
                <span class="mx-auto my-0 pr-[20px]">
                  {{ `2023-12-1${item}` }}
                </span>
              </div>
              <div
                class="w-full h-[150px] border-b-2 border-black leading-[150px] text-center"
              >
                圖片
              </div>
              <div class="content p-[20px] flex flex-col space-y-[10px]">
                <span class="title">www</span>
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, sint. Aliquid ea repellendus ad voluptate
                  recusandae ipsa neque cum. Dignissimos!</span
                >
                <div
                  class="btn bg-gray-400 border-2 border-black text-center w-[120px] p-[10px] px-[5px] hover:bg-black hover:text-white"
                >
                  view project
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const router = useRouter();
const route = useRoute();
const changePage = () => {
  router.push("/work1");
};
const navList = reactive([
  {
    name: "logo",
    path: "/",
  },
  {
    name: "Project",
    path: "/work1",
  },
  {
    name: "Blog",
    path: "/work1",
  },
  {
    name: "Learn",
    path: "/work1",
  },
  {
    name: "Find me",
    path: "/work1",
  },
  {
    name: "blablabla",
    path: "/work1",
  },
]);

const quickLinks = reactive([
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Project",
    path: "/work1",
  },
  {
    name: "About",
    path: "/work1",
  },
  {
    name: "Contact",
    path: "/work1",
  },
]);
</script>
<style scoped lang="postcss">
.title {
  @apply text-5xl font-black;
}
.dot {
  @apply w-[10px] h-[10px] rounded-full border-2 bg-white mx-0 my-auto ml-1;
}

.card-shadow {
  box-shadow: 10px 5px 5px black;
}
</style>
