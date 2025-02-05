<template>
  <section class="p-1">
    <span v-if="errorMessage"
      class="text-white bg-red-600 p-2 rounded-xl m-3"
    >
      Ops! Filme não encontrado.
    </span>

    <div v-if="modalSearch"
      class="flex flex-col gap-2 bg-indigo-500 rounded-xl m-3 p-4 drop-shadow-xl">
      <p class="text-white font-light font-semibold">
        O que você está procurando?
      </p>

      <div class="flex gap-2">
        <input
          v-model="search"
          class="rounded-lg bg-white px-4 w-full drop-shadow-xl"
          placeholder="Digite o nome de um filme"
          type="text"
        >

        <button
          @click="fechSearchMovies"
          class="bg-indigo-700 rounded-xl text-white font-light p-2 drop-shadow-xl"
        >
          Pesquisar
        </button>
      </div>
    </div>

    <div class="flex bg-gray-800 rounded-xl drop-shadow-xl m-3 border-1 border-gray-900">
      <div class="flex justify-between text-white w-full">
        <NuxtLink
          v-for="link in linkPages"
          :key="link.id"
          :to="link.path"
          class="m-5"
        >
          {{ link.icon }}
          <p class="text-sm">
            {{ link.name }}
          </p>
        </NuxtLink>
        
        <div
          class="flex items-center m-3 border-2 border-white rounded-xl"
          @click="modalAplication"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
        </div>          
      </div>
    </div>
  </section>
</template>

<script setup>

  import api from  '@/clients/api';

  const modalSearch = ref(false);
  const listMovies = ref([]);
  const search = ref('');
  const filterMovies = ref([]);
  const errorMessage = ref(false);
  const linkPages = ref([
    { id: '0', name: 'Home', path: '/'},
    { id: '1', name: 'PopCorn', path: '/ticket'},
    { id: '2', name: 'Perfil', path: '/profile'},
  ]);


  function modalAplication() {
    modalSearch.value = !modalSearch.value;
  };


  const fechSearchMovies = async () => {
    try {
      const response = await api.get("/now_playing");
      listMovies.value = response.data.results;

      filterMovies.value = listMovies.value.filter(movie => 
        movie.title.toLowerCase().includes(search.value.toLowerCase())
      );

      validatorRequest();
      
    } catch (error) {
      console.error('Não foi possível fazer a requisição', error);
    }
  };


  async function validatorRequest() {
    if(filterMovies.value.length == 0) {
      menssageModal();
      search.value = '';

    } else {
      navigateTo(`/details/${filterMovies.value[0].id}`);
      modalSearch.value = false;
      search.value = '';
    }
  };

  function menssageModal() {
    errorMessage.value = !errorMessage.value;

    setTimeout(() => {
      errorMessage.value = false;
    }, 2000);
  };

</script>