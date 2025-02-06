<template>
  <div
    v-if="isLoading"
    class="flex gap-1 min-h-screen bg-gray-900 items-center justify-center text-3xl"
  >
    <span class="h-30 w-30 border-10 border-l-gray-500 border-r-gray-500 border-b-gray-500 border-t-indigo-900 animate-spin ease-linear rounded-full"></span>

  </div>

  <template v-else>
    <section class="flex flex-col min-h-screen bg-gray-900 gap-2">

      <Header></Header>
      
      <section class="overflow-hidden mx-5">
        <p class="flex text-white font-light font-semibold items-start pb-3">
          Em cartaz
        </p>

        <div
          ref="carouselA"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide active:cursor-grabbing scroll-smooth"
          @mousedown="startDragA(e)"
          @mousemove="onDragA(e, $refs.carouselA)"
          @mouseup="stopDragA"
          @mouseleave="stopDragA"
          @touchstart="startDragA(e)"
          @touchmove="onDragA(e, $refs.carouselA)"
          @touchend="stopDragA"      
        >
          <div
            v-for="movie in movies"
            :key="movie.id"
            class="flex flex-col items-start gap-1 rounded-xl drop-shadow-xl relative w-80 h-full flex-shrink-0 snap-center"
          >
            <NuxtLink
              :to="`/details/${movie.id}`"
            >
              <img
                :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                alt="Movie Poster"
                class="rounded-xl object-cover w-85 h-85"
              />
            </NuxtLink>
    
            <span class="bg-yellow-400 text-black text-xs font-mono font-semibold rounded-lg p-1 drop-shadow-xl absolute top-2 left-2">
              IMDb {{ movie.vote_average.toFixed(1) }}
            </span>
    
            <div class="flex gap-1 text-white text-sm font-light font-semibold">
              <p class="text-sm">
                {{ movie.title }}
              </p>
              <p>({{ movie.release_date.split("-")[0] }})</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="overflow-hidden m-5">
        <p class="flex text-white font-light font-semibold items-start pb-3">
            Recomendado para você
        </p>

        <div
          ref="carouselB"
          class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide active:cursor-grabbing scroll-smooth"
          @mousedown="startDragB(e)"
          @mousemove="onDragB(e, $refs.carouselB)"
          @mouseup="stopDragB"
          @mouseleave="stopDragB"
          @touchstart="startDragB(e)"
          @touchmove="onDragB(e, $refs.carouselB)"
          @touchend="stopDragB"   
        >
          <div
            v-for="movie in imdbBest"
            :key="movie.id"
            class="flex flex-col items-start gap-1 rounded-xl drop-shadow-xl relative w-50 h-full flex-shrink-0 snap-center"
          >
            <NuxtLink
              :to="`/details/${movie.id}`"
            >
              <img
                :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                alt="Movie Poster"
                class="rounded-xl object-cover w-70 h-70"
              />
            </NuxtLink>
    
            <span class="bg-yellow-400 text-black text-xs font-mono font-semibold rounded-lg p-1 drop-shadow-xl absolute top-2 left-2">
              IMDb {{ movie.vote_average.toFixed(1) }}
            </span>
    
            <div class="flex gap-1 text-white text-sm font-light font-semibold mb-15">
              <p class="text-sm">
                {{ movie.title }}
              </p>
              <p>({{ movie.release_date.split("-")[0] }})</p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <Navgate  
      class="fixed bottom-0 left-0 right-0 z-50"
    />
  </template>
</template>

<script setup>

  import api from '@/clients/api';

  const isLoading = ref(true);
  const movies = ref([]);
  const imdbBest = ref([]);

  const fetchMovies = async () => {
    try {
      const response = await api.get("/now_playing");
      movies.value = response.data.results;
      isLoading.value = false

      imdbBest.value = movies.value.filter(movie => movie.vote_average >= 7.0);

    } catch (error) {
      console.error("Erro ao buscar filmes", error);
      navigateTo('/');
    }
  };

  onMounted(fetchMovies);


  let isDraggingA = false;
  let startX_A = 0;
  let startY_A = 0;
  
  const startDragA = (e) => {
    isDraggingA = true;
    startX_A = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    startY_A = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
  };

  const onDragA = (e, carousel) => {
    if (!isDraggingA) return;

    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    const diffX = currentX - startX_A;
    const diffY = currentY - startY_A;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      carousel.scrollLeft -= diffX;
      startX_A = currentX;
    }
  };

  const stopDragA = () => {
    isDraggingA = false;
  };
  
  


  let isDraggingB = false;
  let startX_B = 0;
  let startY_B = 0;
  const carouselB = ref(null);

  const startDragB = (e) => {
    isDraggingB = true;
    startX_B = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    startY_B = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
  };

  const onDragB = (e, carousel) => {
    if (!isDraggingB) return;

    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    const diffX = currentX - startX_B;
    const diffY = currentY - startY_B;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      carousel.scrollLeft -= diffX;
      startX_B = currentX;
    }
  };

  const stopDragB = () => {
    isDraggingB = false;
  };

</script>