<template>
  <div class="font-poppins min-h-screen py-5 md:py-0 mb-16">
    <div class="mx-auto md:max-w-full">
        <img class="object-cover w-full md:h-100 -mt-5 md:-mt-0 h-screen sm:h-100 parallax" src="../assets/images/bg-petani.jpg" alt="" />
        <div class="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center flex-col md:px-0 h-full">
          <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 md:px-12 md:pt-10 px-7 pt-28">
                <div class="max-w-xl mb-6">
                  <div>
                    <p class="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-[#245953] uppercase rounded-full bg-teal-accent-400">
                      Platform E-commerece
                    </p>
                  </div>
                  <h2 class="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-[#245953] sm:text-4xl sm:leading-none mt-5">
                    Semua bisa jadi <br class="hidden md:block" />
                  
                    <span class="inline-block text-[#245953] ">juragan tani.</span>
                  </h2>
                  <p class="text-base text-white md:text-lg">
                     Platform Berbasis Aplikasi Digital yang akan Mempertemukan antara Petani dengan Para Penyedia barang & jasa kebutuhan petani
                  </p>
                </div>
                <div class="flex items-center space-x-3">
                  <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
                    <img src="https://kitwind.io/assets/kometa/app-store.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
                  </a>
                  <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
                    <img src="https://kitwind.io/assets/kometa/google-play.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
                  </a>
                </div>
              </div>
              <div class="flex items-center justify-center lg:w-1/2 mt-6 md:mt-28 mr-14 md:mr-0">
                <div class="max-w-lg bg-[#245953]  rounded-full p-1 ml-20 -mt-3">
                  <img class="h-35 w-35 animate-bounce " src="../assets/images/mockup.png" alt="" />
                </div>
              </div>
          </div>
        </div>
    </div>

    <!-- Fitur -->
    <HomeFeature />

    <!-- Card Produk Home -->
    <HomeCardFeature />
    
    <!-- Card Education Home -->
    <EducationCardHome />
  </div>
  </template>

<script setup>
    import HomeCardFeature from '../components/HomeCardFeature.vue';
    import HomeFeature from '../components/HomeFeature.vue';
    import EducationCardHome from '../components/EducationCardHome.vue'

    import { onMounted } from 'vue';
    
    onMounted(() => {
      window.scrollTo(0, 0);
    });

</script>

<style lang="scss" scoped>

</style>