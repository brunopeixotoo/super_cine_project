<template>
  <div
    v-if="isLoading"
    class="flex gap-1 min-h-screen bg-gray-900 items-center justify-center text-3xl"
  >
    <span class="h-30 w-30 border-10 border-l-gray-500 border-r-gray-500 border-b-gray-500 border-t-indigo-900 animate-spin ease-linear rounded-full"></span>

  </div>

  <template v-else>
    <section class="flex flex-col min-h-screen bg-gray-900 gap-2">
      <MovCard>
        <div class="flex items-center text-white">
          <NuxtLink
            class="font-mono font-semibold text-4xl m-3"
            to="/"
          >
            Moov
          </NuxtLink>
        </div>

        <div class="flex items-center text-xs gap-2 m-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18q.371.465.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.4 3.4 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05zM14.661.436l-3.838 4.563l.027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.38 8.38 0 0 0 14.67.439zM9.466 5.868L14.162.285l-.047-.012A8.3 8.3 0 0 0 11.986 0a8.44 8.44 0 0 0-6.169 2.766l-.016.018z"/></svg>

          <p class="text-white font-mono">
             Boa Vista
          </p>
        </div>
      </MovCard>
      
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
              <NuxtImg
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
              <NuxtImg
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

    <MovNavgate />
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