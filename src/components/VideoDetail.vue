<template>
   <!-- component -->
<section class="text-gray-700 body-font overflow-hidden bg-white mt-12">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap" v-if="education">
        <video alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" controls>
          <source :src="url + 'video/' + education.video_path" type="video/mp4">
        </video>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ category.nama_education }}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ education.name_education }}</h1>
          <div class="flex mb-4">
            
            <span class="flex py-2">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import {ref,onMounted} from "vue";
    import axios from 'axios';
    import { useRoute } from "vue-router";

    const route = useRoute();

    const url = 'http://localhost:8000/api/education/';
    const urlId = 'http://localhost:8000/api/education/' + route.params.id;

    const education = ref(null);
    const category = ref(null);

    onMounted(()=> {
      window.scrollTo(0, 0);

      axios.get(urlId)
        .then((res)=>{
          education.value = res.data.data;
          category.value = res.data.category;
          console.log(res.data.category);
        })
        .catch((err)=>log.error(err))
    })

</script>

<style lang="scss" scoped>

</style>