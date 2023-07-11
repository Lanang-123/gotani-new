<template>
  <div class="mb-16">
    <div class="min-h-screen">
      <section class="mt-24">
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-1" v-if="product">
                <img
                  alt="Product"
                  :src="url_image+'images/'+product.images"
                  class="aspect-square w-full rounded-xl object-cover"
                />
        
                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                  <img
                    alt="Product"
                    :src="url_image+'images/'+product.images"
                    class="aspect-square w-full rounded-xl object-cover"
                  />
        
                  <img
                    alt="Product"
                    :src="url_image+'images/'+product.images"
                    class="aspect-square w-full rounded-xl object-cover"
                  />
        
                  <img
                    alt="Product"
                    :src="url_image+'images/'+product.images"
                    class="aspect-square w-full rounded-xl object-cover"
                  />
        
                  <img
                    alt="Product"
                    :src="url_image+'images/'+product.images"
                    class="aspect-square w-full rounded-xl object-cover"
                  />
                </div>
              </div>
        
              <div class="sticky top-0 " v-if="product">
                <strong
                  class="rounded-full bg-amber-500 px-3 py-0.5 text-xs font-medium tracking-wide text-zinc-800"
                >
                  {{ product.category.nama_category }}
                </strong>
        
                <div class="mt-8 flex flex-col justify-between">
                  <div class="max-w-[35ch] w-full space-y-2">
                    <h1 class="text-xl font-bold sm:text-2xl">
                      {{product.title}} <span class="text-gray-300 ">({{ product.sold }})</span>
                    </h1>
                    <p class="text-sm">{{ product.location }}</p>
                  
        
                    <div class="-ms-0.5 flex  items-center justify-start">
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
        
                      <svg
                        class="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <p class="text-sm ml-3">{{ product.rating }}</p> 
                      <div class="h-3.5 bg-gray-500 ml-4" style="width: 2px;"></div>
                      <div class="text-sm ml-3">Stok {{ product.stock }}</div>
                    </div>
                  </div>
                  <p class="md:text-xl text-lg font-bold text-amber-500">{{ formatRupiah(product.price) }}</p>
                </div>
                
                <div class="mt-4" >
                  <div class="prose md:max-w-md ">
                    <p>
                      {{product.desc}} 
                    </p>
                  </div>
      
                </div>
        
                <div class="mt-8">
                  <fieldset>
                    <div class="flex gap-2 items-center mb-2">
                      <legend class="mb-1 text-sm font-medium">Paket</legend>
                      <i class="fas fa-info-circle text-zinc-800" @click="openModal()"></i>
                    </div>
        
                    <div class="flex flex-wrap gap-1">
                      <label v-if="pakets != null" v-for="(paket, index) in pakets" :key="paket.id" :for="'color_tt_' + index" class="cursor-pointer">
                        <input v-model="selectPaket" :value="paket.id" type="radio" :id="'color_tt_' + index" name="color" class="peer sr-only" />
                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          {{ paket.nama_paket }}
                        </span>
                      </label>
                    </div>

                  </fieldset>
        
                  <!-- <fieldset class="mt-4">
                    <legend class="mb-1 text-sm font-medium">Size</legend>
        
                    <div class="flex flex-wrap gap-1">
                      <label for="size_xs" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          class="peer sr-only"
                        />
        
                        <span
                          class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          XS
                        </span>
                      </label>
        
                      <label for="size_s" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_s"
                          class="peer sr-only"
                        />
        
                        <span
                          class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          S
                        </span>
                      </label>
        
                      <label for="size_m" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_m"
                          class="peer sr-only"
                        />
        
                        <span
                          class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          M
                        </span>
                      </label>
        
                      <label for="size_l" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_l"
                          class="peer sr-only"
                        />
        
                        <span
                          class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          L
                        </span>
                      </label>
        
                      <label for="size_xl" class="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xl"
                          class="peer sr-only"
                        />
        
                        <span
                          class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        >
                          XL
                        </span>
                      </label>
                    </div>
                  </fieldset> -->
        
                  <div class="mt-8 flex gap-4">
                    <div>
                      <h1>{{  }}</h1>
                      <label for="quantity" class="sr-only">Qty</label>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        v-model="data.quantity"
                        class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>
        
                    <button
                      @click="addToChart"
                      type="submit"
                      class="block rounded bg-amber-500 px-5 py-3 text-xs font-medium text-zinc-800 hover:bg-amber-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="data.id_product !== null && comm !== null">
        <ReviewProduct :productId="data.id_product" :comms = "comm"/>
    </div>



    <!-- Modal -->
  <div
    class="fixed inset-0 flex items-center justify-center z-50"
    v-if="isModalOpen"
  >
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black opacity-50 z-40"></div>
  
    <div class="bg-white rounded-lg shadow-lg p-6 w-96 z-50">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Info Paket</h2>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
          @click="closeModal()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div v-if="pakets != null">
        <div v-for="paket in pakets">
          <h3 class="font-semibold mb-1 text-zinc-800">{{ paket.nama_paket }}</h3>
          <p>{{ paket.description }}</p>
          <br />
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button
          class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-2"
          @click="closeModal()"
        >
          OKE
        </button>
      </div>
    </div>
  </div>





  </div>
</template>

<script setup>  
  import axios from 'axios';
  import { useRoute,useRouter } from 'vue-router';
  import { ref,onMounted,reactive,watch,computed } from 'vue';
  import ReviewProduct from './ReviewsProduct.vue'

  const router = useRouter();
  const product = ref(null);
  const comm = ref(null);
  const pakets = ref(null);
  const selectPaket = ref(null);
  const isModalOpen = ref(false);
  const getToken = () => localStorage.getItem('token');
  const route = useRoute();
  const url_image = "http://localhost:8000/api/products/";
  const url = `http://localhost:8000/api/products/${route.params.id}`;
  const apiCarts = "http://localhost:8000/api/carts";
  const apiMe = "http://localhost:8000/api/me";
  const apiOwner = "http://localhost:8000/api/toko/owner";
  const data = reactive({
    id_user : null,
    id_product: null,
    quantity:1,
    id_paket: null,
  });

  watch(selectPaket,(newPaket) => {
    if(newPaket) {
      data.id_paket = newPaket
    }
  })
  

  const validationOwner = async (productId) => {
    const token = getToken();
    try {
      const response = await axios.get(apiOwner, {
      headers: { 'Authorization': `Bearer ${token}` }
      });

      const data = response.data.data[0];
      let valid = true;
      let check = data.products.filter(dt => dt.id == productId);
      if (check.length) {
        return valid;
      } else {
        valid = false;
        return valid;
      }
    } catch (error) {
      if(error.response && error.response.status === 401) {
        router.push({
          name: 'login'
        });
      }
    }
    
  }
  
  const addToChart = async (e) => {
    const token = getToken();
    let valid = await validationOwner(data.id_product);
    if (token && !valid) {
      try {
        const response = await axios.post(apiCarts, {
          id_user: data.id_user,
          id_paket: data.id_paket,
          id_product: data.id_product,
          quantity: data.quantity
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else if(token && valid) {
      console.log('Data ini milik anda');
    }
  }

  const getActiveUser = async () => {
    const token = getToken();
    if (token) {
      try {
        const response = await axios.get(apiMe, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const activeUser = response.data;
        data.id_user = activeUser.id;
      } catch (error) {
        console.log(error);
      }
    } 
  }

  const openModal = () => {
    isModalOpen.value = true;
  }

  const closeModal = () => {
    isModalOpen.value = false;
  }
  

  function formatRupiah(harga) {
      return harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    }
  
  onMounted(() => {
    window.scrollTo(0, 0);

    getActiveUser();

    axios.get(url)
    .then((res) => {
      product.value = res.data.data;
      data.id_product = res.data.data.id;
      comm.value = res.data.data.reviews;
      pakets.value = res.data.data.pakets;
    })
    .catch((err)=> console.log(err));
  })

</script>

<style  scoped>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
  }
</style>