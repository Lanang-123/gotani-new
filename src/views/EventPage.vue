<template>
    <div class="my-12">
        <section class="text-gray-600 body-font mt-4 bg-[#245953] bg-opacity-30">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded-xl shadow-md" alt="hero" src="../assets/images/bg-petani8.jpg">
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-3xl text-3xl mb-4 text-start font-medium text-[#245953]">Satukan Langkah, Berkolaborasi Menuju
                    <br class="hidden lg:inline-block">Pertanian Berkelanjutan
                </h1>
                <p class="mb-3 leading-relaxed text-justify">Miliki kesempatan untuk belajar, berinteraksi, dan berbagi ide dengan individu yang memiliki minat dan semangat yang sama dalam menjaga keberlanjutan pertanian dan menyediakan pangan berkualitas.Tunggu apa lagi? Bergabunglah di <b class="text-[#06B3B9]"> Event GOTani</b> dalam event pertanian yang luar biasa ini, dan bersama-sama, mari satukan langkah, berkolaborasi, dan menuju pertanian berkelanjutan yang gemilang!</p>
               
                </div>
            </div>
        </section>
        <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="flex flex-col w-full lg:justify-between lg:flex-row md:mb-8">
                <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                <img src="../assets/images/logo-gotani.png" class="w-20 h-20" alt="">
                <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-[#245953] sm:text-4xl">
                    <span class="inline-block mb-2">Layanan Event GOTani</span>
                    <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
                </h2>
                </div>
            
            </div>
            <div class="grid gap-8 row-gap-5 mb-8 md:-mt-6 lg:grid-cols-3 lg:row-gap-8">
                <RouterLink to="/" class="bg-white border-1 rounded-lg border-gray-400 p-3 shadow-lg hover:shadow-emerald-100">
                    <img class="object-cover w-full h-56 mb-2 rounded shadow-lg md:h-34 xl:h-60" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div class="flex gap-2 items-center">
                            <i class="fas fa-calendar-alt text-gray-500"></i>
                            <p class="text-gray-500">2023-07-12</p>
                    </div>
                    <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                        Galaxies Orion
                    </p>
                    <p class="text-gray-700">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                    </p>
                </RouterLink>
            </div>
        </div>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
    .gradient-background {
    background-image: linear-gradient(to right, #f12711, #f5af19);
    position: relative;
    z-index: -1;
  }
</style>