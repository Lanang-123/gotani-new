<template>
    <div class="mb-16">
        <div class="font-poppins mt-14">
            <div class="relative sm:h-96 mt-16">
                <img class="object-cover w-full h-56 sm:h-96 parallax" src="../assets/images/store.jfif" alt="" />
                <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div class="max-w-full">
                        <h1 class="text-3xl sm:text-6xl font-bold text-[#06B3B9] text-center">Temukan Product Menarik Untukmu !</h1>
                        <form class="max-w-full px-4 mt-4 flex flex-col items-center" @submit.prevent="performSearch">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder="Search" class="w-full  py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white " v-model="search"/>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Category -->
        <div class="category-carousel">
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
        <!-- Products -->
        <div>
            <div class="px-4  mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 my-6">
                <div class="grid gap-5 row-gap-5 mb-4 lg:grid-cols-4 sm:grid-cols-2 ml-4 md:ml-0">
                    <div v-for="product in products" :key="product.id">
                        <RouterLink :to="'/productDetail/' + product.id ">
                            <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2">
                            <img class="object-cover w-full h-48 mt-2 rounded-lg" :src="urlProduct+'images/'+product.image" :alt="product.title">
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{{ product.title }}</h1>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{{ product.description }}</p>
                            </div>
                            <div class="flex items-center justify-between px-4 py-2 bg-[#245953]">
                                <h1 class="md:text-md text-lg font-bold text-white">{{ formatRupiah(product.price) }}</h1>
                                  <div class="flex justify-center items-center">
                                      <svg
                                          class="h-5 w-5 text-yellow-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          >
                                          <path
                                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                          />
                                          </svg>
                                      <h1 class="md:text-md text-lg font-semibold text-white ml-1">{{ product.rating }}</h1>
                                  </div>
                            </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { ref,onMounted,watch } from 'vue';
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
        .then((res)=>categories.value = res.data)
        .catch((err)=>console.log(err))
    }

    const searchDataProduct = (keyword) => { 
      if(keyword.length) {
        axios.get(urlProduct + 'name/' + keyword)
        .then((res) => products.value=res.data.data)
        .catch((err) => logger.error(err))
      }else {
        fetchDataProduct()
      }
    }

    const fetchDataProduct = (index) => {
        if(index) {
          axios.get(urlProduct + 'category/' + index)
          .then((res) =>  products.value=res.data.data)
          .catch((err)=>console.log(err));
        }else if(index == 0 || !index) {
          axios.get(urlProduct)
          .then((response)=>{
              products.value=response.data.data;
          }).catch((err)=>{
              console.log(err);
          })
        }
    }

    const performSearch = () => {
      searchDataProduct(search.value);
    }

    onMounted(()=> {
        window.scrollTo(0, 0);
        fetchDataCategory();
        fetchDataProduct();
    });

    const selectCategory = (index) => {
        activeCategory.value = index === -1 ? 0 : index + 1;
    };

    watch(activeCategory,(newValue) => fetchDataProduct(newValue));
    watch(search,(value) => searchDataProduct(value));

    const prevSlide = () => {
      if (activeIndex.value > 0) {
          activeIndex.value--;
        }
    }

    const nextSlide = () => {
      if (activeIndex.value < categories.value.length ) {
          activeIndex.value++;
        }
    }
    

    function formatRupiah(harga) {
      return harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    }

    

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