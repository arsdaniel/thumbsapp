<template>
  <div class="relative slide">
    <div class="absolute bottom-0 flex items-center justify-center w-3/4 h-24 bg-yellow-100 carousel-indicators">
      <ol class="z-50 flex justify-center w-4/12">
        <li v-for="(img, i) in images" :key="i" class="mx-2 bg-gray-300 rounded-full cursor-pointer md:w-4 md:h-4"></li>
      </ol>
    </div>
    <div class="relative w-full overflow-hidden carousel-inner">
      <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="relative inset-0 w-full transition-all duration-500 ease-in-out transform carousel-item">
        <img class="block w-full" :src="img" alt="First slide" />
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SlideShow',
    data: () => ({
    images: [
      "https://picsum.photos/id/237/1024/800",
      "https://picsum.photos/id/238/1024/800",
      "https://picsum.photos/id/239/1024/800"
    ],
    active: 0,
    mySVG: null,
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 3000);
  }
}
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>