<template>
  <div>
    <div class="px-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
        <div class="flex justify-between items-center mb-3">
            <h2 class="max-w-md mb-6 font-sans text-2xl font-bold tracking-tight text-[#245953] sm:leading-none xl:max-w-lg">
                Rekomendasi Edukasi
            </h2>
              <RouterLink
              to="/education"
              class="md:inline-flex hidden  items-center justify-center md:h-10 h-10 px-6 font-medium tracking-wide text-[#06B3B9] hover:text-white transition duration-200 rounded shadow-md bg-white hover:bg-[#245953] focus:shadow-outline focus:outline-none mb-6"
              aria-label="Sign up"
              title="Sign up"
            >
              View More
            </RouterLink>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:px-8 mb-32 mx-5 md:mx-0">
      <div v-for="education in educations" :key="education.id">
        <article class="flex flex-col md:flex-row bg-white transition shadow-xl">
          <div class="sm:basis-56">
            <video class="aspect-square h-36 md:h-full w-full object-cover" controls>
              <source :src="url + 'video/' + education.video_path" type="video/mp4">
            </video>
          </div>
        
          <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <h3 class="font-bold uppercase text-gray-900">
                {{ education.name_education }}
              </h3>
        
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {{ education.description }}
              </p>
            </div>
        
            <div class="sm:flex sm:items-end sm:justify-end">
              <RouterLink
                :to="'/eduDetail/' + education.id"
                class="block bg-[#06B3B9] px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-[#245953] hover:text-white"
              >
                Lihat Detail
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
      <div class="md:hidden flex items-center justify-center mt-5 ">
          <RouterLink
            to="/education"
            class="inline-flex items-center justify-center md:h-10 h-10 px-6 font-medium tracking-wide text-[#06B3B9] hover:text-white transition duration-200 rounded shadow-md bg-white hover:bg-[#245953] focus:shadow-outline focus:outline-none mb-6"
            aria-label="Sign up"
            title="Sign up"
          >
            View More >>
          </RouterLink>
      </div>
    </div>
  </div> 
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import axios from 'axios';
  import {ref,onMounted} from 'vue'

  const educations = ref(null);
  const url = 'http://localhost:8000/api/education/'

  onMounted(()=>{
    axios.get(url)
      .then((res) => educations.value = res.data.data)
      .catch((err) => console.log(err));
  })


</script>

<style lang="scss" scoped>

</style>










