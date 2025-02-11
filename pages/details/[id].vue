<template>
  <div
    v-if="isLoading"
    class="flex gap-1 min-h-screen bg-gray-900 items-center justify-center text-3xl"
  >
    <span class="h-30 w-30 border-10 border-l-gray-500 border-r-gray-500 border-b-gray-500 border-t-indigo-900 animate-spin ease-linear rounded-full"></span>
  </div>

  <template v-else>
    <section class="flex flex-col relative h-screen text-white">
      <div class="relative">
        <NuxtImg
          :src="`https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`"
          alt="Movie Poster"
          class="w-full h-150 object-cover fixed top-0 left-0 right-0 z-0 transition-opacity duration-500"
        />

        <NuxtLink
          class="flex items-center absolute top-5 left-5"
          to="/home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="white" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
          </svg>
        </NuxtLink>
      </div>


      <div class="flex flex-col gap-5 relative mt-145 p-6 bg-gray-900 rounded-t-3xl shadow-2xl">
        <div class="flex flex-col gap-3 items-start">
          <div class="flex flex-wrap text-xs gap-2 items-center">
            <div
              v-for="genres in moviesDetails.genres"
              :key="genres.id"
            >
              <p class="px-2 py-1 bg-indigo-500/60 rounded-full">
                {{ genres.name }}
              </p>
            </div>

            <p class="bg-green-400 text-black font-bold font-mono rounded px-2">
              {{ moviesDetails.runtime }} min
            </p>
          </div>

          <div class="flex gap-3 items-center">
            <p class="text-3xl font-bold">
              {{ moviesDetails.title }}
            </p>

            <p class="border border-white text-sm font-mono rounded-lg py-1 px-2 uppercase">
              {{ moviesDetails.original_language }}
            </p>
          </div>

          <p class="bg-yellow-400 text-black text-xs font-mono font-semibold rounded-lg p-1">
            IMDb {{ moviesDetails.vote_average.toFixed(1) }}
          </p>
        </div>
        
        <MovButton
          label="Comprar ingresso"
          @click="navigateTo('/vacancies')"
        />

        <div class="mt-1 mb-20">
          <h3 class="text-lg font-semibold">
            Descrição:
          </h3>

          <p class="text-sm font-light leading-relaxed mt-2">
            {{ moviesDetails.overview }}
          </p>
        </div>
      </div>
    </section>
    
    <MovNavgate />
  </template>
</template>

<script setup>
  import { NuxtImg } from '#components';
  import api from '@/clients/api';

  const isLoading = ref(true);

  const route = useRoute()
  const movieId = ref(route.params.id);
  const moviesDetails = ref([]);


  const fetchDetails = async () => {
    try {
      const response = await api.get(`/${movieId.value}`);
      moviesDetails.value = response.data;
      isLoading.value = false
    } catch (error) {
      console.error("Erro ao buscar detalhes do filme", error);
      return {};
    }
  };

  onMounted(fetchDetails);

</script>