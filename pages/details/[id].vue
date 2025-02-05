<template>
  <div
    v-if="isLoading"
    class="flex gap-1 min-h-screen bg-gray-900 items-center justify-center text-3xl"
  >
    <span class="text-white font-light font-semibold">
      Carregando...
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 36 36"> <path fill="#E1E8ED" d="M31.301 11H4.668a3 3 0 1 0 0 6c.182 0 .357-.023.53-.053L5.182 17l.637 14.004C5.918 33.202 7.8 35 10 35h16c2.2 0 4.082-1.798 4.182-3.996L30.818 17l-.015-.05c.163.027.327.05.498.05a3 3 0 1 0 0-6" /> <path fill="#DA2F47" d="M28.668 17v16.989c.863-.734 1.444-1.796 1.492-2.986L30.84 17zm-6 0h3v18h-3zm-6 18V17h3v18zm-6-18h3v18h-3zM5.16 17l.68 14.003c.054 1.342.776 2.528 1.828 3.254V17z" /> <path fill="#99AAB5" d="m5.16 17l.097 2h25.485l.098-2z" opacity=".6" /> <path fill="#FFD983" d="M30.929 11.07c.043-.184.071-.373.071-.57c0-.674-.27-1.284-.704-1.733c.422-.266.704-.732.704-1.267a1.5 1.5 0 0 0-2.058-1.39a1.5 1.5 0 0 0-1.052-1.052A1.5 1.5 0 0 0 26.5 3c-.191 0-.372.039-.54.104a2.495 2.495 0 1 0-4.897.94c-.64.113-1.19.469-1.563.969A2.49 2.49 0 0 0 17.5 4A2.5 2.5 0 0 0 15 6.5l.001.012a2.46 2.46 0 0 0-1.047-.466A2.496 2.496 0 0 0 11.5 4a2.496 2.496 0 0 0-2.455 2.055A3.5 3.5 0 0 0 8.5 6A3.5 3.5 0 0 0 5 9.5c0 .545.135 1.054.357 1.514A1.495 1.495 0 0 0 5.5 14h25a1.495 1.495 0 0 0 .429-2.93" /> <g fill="#FFAC33"> <circle cx="28" cy="8" r="1" /> <circle cx="24.5" cy="5.5" r="1.5" /> <circle cx="12" cy="7" r="1" /> <path d="M31 12.5a1.497 1.497 0 0 0-2.914-.483C28.057 12.015 28.031 12 28 12a1 1 0 0 0-1 1h3.908c.056-.157.092-.324.092-.5M9.5 12c.198 0 .385.04.558.11A1.496 1.496 0 0 1 13 12.5c0 .176-.036.343-.092.5h4.184a1.5 1.5 0 0 1-.092-.5a1.5 1.5 0 0 1 1.5-1.5c.237 0 .459.06.658.158A1.5 1.5 0 0 1 19 10.5a1.5 1.5 0 1 1 2.89.558c.638.172 1.11.749 1.11 1.442c0 .176-.036.343-.092.5h2.968l-.566-.5c.42-.367.69-.899.69-1.5a2 2 0 0 0-2-2a2 2 0 0 0-1.03.294c.015-.097.03-.193.03-.294a1.997 1.997 0 0 0-3.816-.828A1.5 1.5 0 0 0 18.5 8a1.5 1.5 0 0 0-1.39 2.058c-.638.173-1.11.75-1.11 1.442c0 .198.04.385.11.558a1.5 1.5 0 0 0-.61.332a1.5 1.5 0 0 0-1-.39c-.237 0-.459.06-.659.159c.099-.2.159-.422.159-.659a1.5 1.5 0 0 0-2.058-1.39a1.496 1.496 0 1 0-2.832.948a1.5 1.5 0 0 0-.61.332a1.5 1.5 0 0 0-1-.39A1.5 1.5 0 0 0 6 12.5c0 .176.036.343.092.5h2c.207-.581.756-1 1.408-1" /> </g> <path fill="#FFF" d="M4 13v1a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-1z" /> </svg>
  </div>

  <template v-else>
    <section class="flex flex-col relative h-screen text-white">
      <div class="relative">
        <img
          :src="`https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`"
          alt="Movie Poster"
          class="w-full h-150 object-cover fixed top-0 left-0 right-0 z-0 transition-opacity duration-500"
        />

        <NuxtLink class=" flex items-center absolute top-5 left-5" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="white" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
          </svg>
        </NuxtLink>
      </div>


      <div class="relative mt-145 p-6 bg-gray-900 rounded-t-3xl shadow-2xl">
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

        <div class="flex gap-2 items-center justify-center bg-indigo-400/80 text-white font-semibold px-1 py-2 rounded-full m-5 drop-shadow-xl">
          <NuxtLink
            to="/vacancies"
          >
            Comprar ingresso
          </NuxtLink>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="white" fill-rule="evenodd" d="M7.627 16.697L23.812 5.364a4 4 0 0 1 5.57.982l2.553 3.645q.056.08.107.163zM2.147 29.84L1.04 25.708a4 4 0 0 1 2.83-4.898L44.438 9.94a4 4 0 0 1 4.899 2.828l1.151 4.298a3.2 3.2 0 0 1-1.121 3.35a5.001 5.001 0 0 0 2.433 8.903a3.08 3.08 0 0 1 2.576 2.255l1.172 4.377a4 4 0 0 1-2.828 4.899L12.15 51.72a4 4 0 0 1-4.898-2.828l-1.103-4.118a3.48 3.48 0 0 1 1.16-3.6a5.001 5.001 0 0 0-2.37-8.812a3.46 3.46 0 0 1-2.791-2.52m35.478-6.689a3 3 0 1 0-1.553-5.795a3 3 0 0 0 1.553 5.795m2.07 7.728a3 3 0 1 0-1.552-5.796a3 3 0 0 0 1.553 5.796m2.071 7.727a3 3 0 1 0-1.552-5.795a3 3 0 0 0 1.552 5.795"/></svg>
        </div>

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
  </template>
</template>

<script setup>
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