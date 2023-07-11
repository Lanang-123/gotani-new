<template>
    <div class="relative  pt-12">
          <img src="../assets/images/bg-petani9.jpg" class="absolute inset-0 object-cover w-full h-full" alt="" />
          <div class="relative bg-opacity-75 bg-[#245953] ">
            <svg class="absolute inset-x-0 bottom-0 text-white " viewBox="0 0 1160 163">
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              ></path>
            </svg>
            <div class="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div class="flex flex-col items-center justify-between xl:flex-row">
                <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Bergabunglah bersama kami  <br class="hidden md:block" />
                    tingkatkan usaha anda dengan menawarkan jasa.
                  </h2>
                  <p class="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    Saatnya menjadi bagian dari revolusi pertanian modern. Mari tingkatkan efisiensi, keberlanjutan, dan keuntungan dalam usaha pertanian. Bersama, kita bisa membuat perubahan yang positif bagi masyarakat di Indonesia.
                  </p>
                  
                </div>
                <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 class="mb-4 text-xl text-[#245953] font-bold sm:text-center sm:mb-6 sm:text-2xl">
                      Daftar Penyedia Jasa
                    </h3>
                    <form>
                      <div class="mb-1 sm:mb-2">
                        <label for="firstName" class="inline-block mb-1 font-medium">Nama Lengkap</label>
                        <input
                          placeholder="Nama Lengkap Anda"
                          required=""
                          type="text"
                          class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                        />
                      </div>
                      <div class="mb-1 sm:mb-2">
                        <label for="lastName" class="inline-block mb-1 font-medium">No Hp</label>
                        <input
                          placeholder="08xxxxxxxxxx"
                          required=""
                          type="number"
                          class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                        />
                      </div>
                      <div class="mb-1 sm:mb-2">
                        <label for="email" class="inline-block mb-1 font-medium">E-mail</label>
                        <input
                          placeholder="user123@gmail.com"
                          required=""
                          type="email"
                          class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div class="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#245953] hover:bg-[#245953] focus:shadow-outline focus:outline-none"
                        >
                          Kirim
                        </button>
                      </div>
                      <p class="text-xs text-gray-600 sm:text-sm">
                        Admin akan segera menghubungi Anda.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>

        <!-- RINCIAN -->
    <div class="w-full bg-[#245953] bg-opacity-30 h-full">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="p-8 rounded shadow-xl sm:p-16 bg-white">
        <div class="flex flex-col lg:flex-row">
          <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <div class="flex gap-4">
                <img src="../assets/images/logo-gotani.png" class="w-16 h-16"/>
                <h2 class="font-sans text-3xl font-bold tracking-tight text-[#245953] sm:text-5xl sm:leading-none">
                Layanan Jasa GOTani<br class="hidden md:block" />
                </h2>
            </div>
          </div>
          <div class="lg:w-1/2">
            <p class="mb-4 text-base text-gray-700 text-justify">
              Kami menyediakan layanan jasa petani yang didedikasikan untuk membantu Anda mengoptimalkan potensi dan keuntungan dari usaha pertanian Anda. Dengan pengalaman luas dan pengetahuan yang mendalam dalam bidang pertanian, tim kami siap memberikan dukungan yang Anda butuhkan untuk mencapai keberhasilan yang berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    <!-- Kategori -->
    <div class="category-carousel mt-8">
        <div class="carousel-wrapper">
          <button class="carousel-button prev" @click="prevSlide"><i class="fas fa-chevron-left"></i></button>
          <div class="carousel-content">
            <ul class="category-list" :style="{ transform: `translateX(-${activeIndex * slideWidth}px)` }">
              <li :key="0" :class="{ active: activeIndex === -1 }">
                <button class="btn btn-wide bg-[#06B3B9] text-white" @click="selectCategory(-1)">All</button>
              </li>
              <li v-for="(category, index) in categories" :key="index" :class="{ active: index === activeIndex }">
                <button class="btn btn-wide bg-[#06B3B9] text-white" @click="selectCategory(index)">{{ category.nama_category }}</button>
              </li>
            </ul>
          </div>
          <button class="carousel-button next" @click="nextSlide"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>

    <!-- Product Jasa -->

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div class="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
      <div class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div class="flex flex-col h-full">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-full h-48" alt="" />
          <div class="flex-grow border border-t-0 rounded-b">
            <div class="p-5">
              <h6 class="mb-2 font-semibold leading-5">The doctor said</h6>
              <p class="text-sm text-gray-900">
                Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.
              </p>
            </div>
          </div>
          <div class="bg-[#245953] flex justify-center items-center h-12 w-full">
            <RouterLink to="/"><h4 class="text-white">Hubungi Jasa</h4></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
  import { ref, onMounted, watch } from 'vue';
  import '@fortawesome/fontawesome-free/css/all.css';
  import axios from 'axios';

  const activeIndex = ref(0);
  const search = ref('');
  const activeCategory = ref(0);
  const slideWidth = ref(270);
  const categories = ref(null);
  const formattedAmount = ref(null)
  const products = ref(null)

  const urlCategory = "http://localhost:8000/api/category";
  const urlProduct = "http://localhost:8000/api/products/";


  const fetchDataCategory = () => {
    axios.get(urlCategory)
      .then((res) => categories.value = res.data)
      .catch((err) => console.log(err))
  }

   const prevSlide = () => {
      if (activeIndex.value > 0) {
        activeIndex.value--;
      }
    }

    const nextSlide = () => {
      if (activeIndex.value < categories.value.length) {
        activeIndex.value++;
      }
    }

    onMounted(() => {
      window.scrollTo(0, 0);
      fetchDataCategory();
    });

</script>

<style scoped>

.category-carousel {
    width: 100%;
    padding: 20px;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    color: #06B3B9;
  }
  
  .carousel-button.prev {
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
  
  .carousel-content {
    overflow: hidden;
    margin: 0 50px;
  }
  
  .category-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .category-list li {
    margin-right: 10px;
  }
  
  .category-button {
    padding: 10px 20px;
    background-color: #245953;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .category-list li.active .category-button {
    background-color: #f00;
    color: #fff;
  }

</style>