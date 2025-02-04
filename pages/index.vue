<template>
  <div
    v-if="isLoading"
    class="flex gap-1 min-h-screen bg-gray-900 items-center justify-center text-3xl"
  >
    <span class="text-white font-semibold">
      Carregando...
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 36 36"> <path fill="#E1E8ED" d="M31.301 11H4.668a3 3 0 1 0 0 6c.182 0 .357-.023.53-.053L5.182 17l.637 14.004C5.918 33.202 7.8 35 10 35h16c2.2 0 4.082-1.798 4.182-3.996L30.818 17l-.015-.05c.163.027.327.05.498.05a3 3 0 1 0 0-6" /> <path fill="#DA2F47" d="M28.668 17v16.989c.863-.734 1.444-1.796 1.492-2.986L30.84 17zm-6 0h3v18h-3zm-6 18V17h3v18zm-6-18h3v18h-3zM5.16 17l.68 14.003c.054 1.342.776 2.528 1.828 3.254V17z" /> <path fill="#99AAB5" d="m5.16 17l.097 2h25.485l.098-2z" opacity=".6" /> <path fill="#FFD983" d="M30.929 11.07c.043-.184.071-.373.071-.57c0-.674-.27-1.284-.704-1.733c.422-.266.704-.732.704-1.267a1.5 1.5 0 0 0-2.058-1.39a1.5 1.5 0 0 0-1.052-1.052A1.5 1.5 0 0 0 26.5 3c-.191 0-.372.039-.54.104a2.495 2.495 0 1 0-4.897.94c-.64.113-1.19.469-1.563.969A2.49 2.49 0 0 0 17.5 4A2.5 2.5 0 0 0 15 6.5l.001.012a2.46 2.46 0 0 0-1.047-.466A2.496 2.496 0 0 0 11.5 4a2.496 2.496 0 0 0-2.455 2.055A3.5 3.5 0 0 0 8.5 6A3.5 3.5 0 0 0 5 9.5c0 .545.135 1.054.357 1.514A1.495 1.495 0 0 0 5.5 14h25a1.495 1.495 0 0 0 .429-2.93" /> <g fill="#FFAC33"> <circle cx="28" cy="8" r="1" /> <circle cx="24.5" cy="5.5" r="1.5" /> <circle cx="12" cy="7" r="1" /> <path d="M31 12.5a1.497 1.497 0 0 0-2.914-.483C28.057 12.015 28.031 12 28 12a1 1 0 0 0-1 1h3.908c.056-.157.092-.324.092-.5M9.5 12c.198 0 .385.04.558.11A1.496 1.496 0 0 1 13 12.5c0 .176-.036.343-.092.5h4.184a1.5 1.5 0 0 1-.092-.5a1.5 1.5 0 0 1 1.5-1.5c.237 0 .459.06.658.158A1.5 1.5 0 0 1 19 10.5a1.5 1.5 0 1 1 2.89.558c.638.172 1.11.749 1.11 1.442c0 .176-.036.343-.092.5h2.968l-.566-.5c.42-.367.69-.899.69-1.5a2 2 0 0 0-2-2a2 2 0 0 0-1.03.294c.015-.097.03-.193.03-.294a1.997 1.997 0 0 0-3.816-.828A1.5 1.5 0 0 0 18.5 8a1.5 1.5 0 0 0-1.39 2.058c-.638.173-1.11.75-1.11 1.442c0 .198.04.385.11.558a1.5 1.5 0 0 0-.61.332a1.5 1.5 0 0 0-1-.39c-.237 0-.459.06-.659.159c.099-.2.159-.422.159-.659a1.5 1.5 0 0 0-2.058-1.39a1.496 1.496 0 1 0-2.832.948a1.5 1.5 0 0 0-.61.332a1.5 1.5 0 0 0-1-.39A1.5 1.5 0 0 0 6 12.5c0 .176.036.343.092.5h2c.207-.581.756-1 1.408-1" /> </g> <path fill="#FFF" d="M4 13v1a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-1z" /> </svg>
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
          @mousedown="(e) => startDragA(e, $refs.carouselA)"
          @mousemove="(e) => onDragA(e, $refs.carouselA)"
          @mouseup="() => stopDragA($refs.carouselA)"
          @mouseleave="() => stopDragA($refs.carouselA)"
          @touchstart="(e) => startDragA(e, $refs.carouselA)"
          @touchmove="(e) => onDragA(e, $refs.carouselA)"
          @touchend="() => stopDragA($refs.carouselA)"      
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
          @mousedown="(e) => startDragB(e, $refs.carouselB)"
          @mousemove="(e) => onDragB(e, $refs.carouselB)"
          @mouseup="() => stopDragB($refs.carouselB)"
          @mouseleave="() => stopDragB($refs.carouselB)"
          @touchstart="(e) => startDragB(e, $refs.carouselB)"
          @touchmove="(e) => onDragB(e, $refs.carouselB)"
          @touchend="() => stopDragB($refs.carouselB)"   
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
                class="rounded-xl object-cover w-70 h-70 mb-8"
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
    </section>
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
    }
  };

  onMounted(fetchMovies);


  const amount = ref(false);
  const vacancies = ref('38');

  function amountVacancies() {
    if (vacancies >= '38') {
      amount.value = false;
    } else {
      amount.value = amount;
    }
  }

  amountVacancies()



  const isDraggingA = ref(false);
  const startX_A = ref(0);
  const scrollLeft_A = ref(0);
  const carouselA = ref(null);

  const isDraggingB = ref(false);
  const startX_B = ref(0);
  const scrollLeft_B = ref(0);
  const carouselB = ref(null);

  
  function startDragA(e) {
    isDraggingA.value = true;
    startX_A.value = e.touches ? e.touches[0].pageX : e.pageX;
    scrollLeft_A.value = carouselA.value.scrollLeft;
  }

  function onDragA(e) {
    if (!isDraggingA.value) return;
    e.preventDefault();
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX_A.value) * 1.5; 
    carouselA.value.scrollLeft = scrollLeft_A.value - walk;
  }

  function stopDragA() {
    isDraggingA.value = false;
  }

  

  function startDragB(e) {
    isDraggingB.value = true;
    startX_B.value = e.touches ? e.touches[0].pageX : e.pageX;
    scrollLeft_B.value = carouselB.value.scrollLeft;
  }

  function onDragB(e) {
    if (!isDraggingB.value) return;
    e.preventDefault();
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX_B.value) * 1.5; 
    carouselB.value.scrollLeft = scrollLeft_B.value - walk;
  }

  function stopDragB() {
    isDraggingB.value = false;
  }

</script>