<template>
  <section class="p-1">
    
    <div v-if="modalSearch"
    class="flex flex-col fixed bottom-18 left-0 right-0 z-50 gap-2 bg-indigo-400 rounded-xl m-3 p-4 drop-shadow-xl"
    >
      <MovError v-if="errorMessage"
        label="Ops! Filme não encontrado."
      />
      
      <p class="text-white font-light font-semibold">
        O que você está procurando?
      </p>

      <div class="flex flex-col gap-2">
        <input
          v-model="search"
          class="rounded-lg bg-white px-4 h-11 w-full drop-shadow-xl"
          placeholder="Digite o nome de um filme"
          type="text"
        >
        
        <MovButton
          @click="fechSearchMovies"
          label="Pesquisar"
        />
      </div>
    </div>

    <div class="flex fixed bottom-0 left-0 right-0 z-50 bg-gray-800 rounded-xl drop-shadow-xl m-3">
      <div class="flex justify-between text-white w-full">
        <NuxtLink
          v-for="link in linkPages"
          :key="link.id"
          :to="link.path"
          class="m-5"
        >
          {{ link.icon }}
          <p class="text-base">
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

  const search = ref('');
  const errorMessage = ref(false);
  const modalSearch = ref(false);
  const listMovies = ref([]);
  const filterMovies = ref([]);

  const linkPages = ref([
    { id: '0', name: 'Home', path: '/home'},
    { id: '1', name: 'PopCorn', path: '/premises'},
    { id: '2', name: 'Perfil', path: '/'},
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
    }, 3000);
  };

</script>