<template>
  <section class="flex flex-col gap-5 min-h-screen bg-gray-900">
    <div class="relative">
      <NuxtLink
        class="flex items-center absolute top-5 left-5"
        to="/vacancies"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="white"
            d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z" />
        </svg>
      </NuxtLink>
    </div>

    <div class="flex flex-col gap-4 bg-gray-800 text-white mt-12 mx-5 mb-20 rounded-xl p-3">
      <h2 class="text-2xl font-semibold text-center my-3">
        PopCorn Moov
      </h2>

      <p class="flex items-center justify-center m-3 border-b-1 border-white p-1">
        Comidas
      </p>
      <div
        v-for="(food, index) in storeFoods"
        :key="food.id"
        :class="[
          'flex gap-3 bg-gray-700 rounded-xl m-3 justify-between p-4',
        ]"
        
      >
        <div class="flex gap-5 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="#edd8b4" d="M51 11.9c1.9-5.8-5.4-9-8.4-5.8c-3.9-6.4-12.2-1.8-12.2-1.8s-4.5-5-10.3-.4c-2.1-2.1-8.4-2.6-8.2 7.6c-7 .6-6.9 10.4-3.7 11.9l46.2 4c4.5-1.8 6.2-13.8-3.4-15.5"/><path fill="#fff8d6" d="M21.8 4.8C22.3.5 14 1.3 15.3 6c-3.1 1.1-.9 5.8 1.6 4.6c.1 3.7 6.3 2.8 5.4-1.1c2.3 1 4.3-5.2-.5-4.7"/><path fill="#edd8b4" d="M20.7 6.1c.9-1.6-2.1-3.4-2.3-.5c-1.8-1.5-4.1 2.7-.9 2.8c-1.5 2.3 2.4 3.7 3.1 1.5c3.1-.3 2.2-4.3.1-3.8"/><path fill="#c9ae81" d="M20.8 7.7c-1.2-.3-1-.4-.9-1.3c.2-1.7-.8-1.7-.7-.1c.1 1-.1 1.4-1.1.6c-1.3-.9-1.4.1-.2.5c1.1.5.7.2.7 1.6c0 1.1.6 1.4.7 0s0-1.3 1.1-.6c1.1.6 1.5-.4.4-.7"/><path fill="#fff8d6" d="M17.9 15.8c2.3-2-3.3-7.4-5.4-1.9c-4.4-2.7-6.5 5.4-2.2 7.7c2.1 1.2 14.2.4 7.6-5.8"/><path fill="#edd8b4" d="M13.3 15.8c-1.2-1.8-4.8.5-1.9 2.3c-6.3 2.9 11.4 5 5.9-.3c1.4-3.6-3.3-4.6-4-2"/><path fill="#c9ae81" d="M15.1 16.5c-1 1.1-1 .9-1.9.4c-1.7-1.1-2.3.6-.4 1.4c1.1.4 1 .6 2.5 1.4c1.2.6 1.8 0 .3-.8s-1.4-.6 0-1.5c1.3-1.1.4-2-.5-.9"/><path fill="#fff8d6" d="M55.6 18.6c2.1-1.8-2.9-6.6-4.8-1.7c-3.9-2.4-7.3 6-2 6.9c-.4 3.6 5.2 3.6 5.2.6c3.6 1.7 5.9-4.8 1.6-5.8"/><path fill="#edd8b4" d="M51.5 18.6c-1.1-1.6-4.4.4-1.7 2c-2.4 1.1.6 5.2 2.3 2.1c1.6 2.5 4.8-.7 3.1-2.4c1.1-3.1-3.1-4-3.7-1.7"/><path fill="#c9ae81" d="M53.1 19.2c-.9 1-.9.8-1.7.3c-1.5-1-2.1-.1-.4.6c1 .4 1.3.7 0 1.4c-1.5.8-.5 1.4.4.5c1-1 .5-.7 1.8 0c1.1.5 1.6 0 .3-.7s-1.3-.6 0-1.4c1.2-.8.4-1.7-.4-.7"/><path fill="#fff8d6" d="M35.8 7c2.2-1.9-3.1-6.9-5-1.8c-4.1-2.5-7.6 6.2-2.1 7.2c-.4 3.7 5.4 3.8 5.5.6c3.7 1.8 6-5 1.6-6"/><path fill="#edd8b4" d="M31.5 7c-1.1-1.7-4.5.4-1.8 2.1c-2.5 1.1.6 5.4 2.4 2.2c1.6 2.6 5-.7 3.2-2.5c1.3-3.3-3.2-4.2-3.8-1.8"/><path fill="#c9ae81" d="M33.1 7.6c-1 1.1-.9.9-1.8.4c-1.6-1-2.2-.1-.4.6c1 .4 1.3.8.1 1.4c-1.6.9-.6 1.5.4.5s.5-.7 1.9 0c1.1.6 1.7 0 .3-.7c-1.4-.8-1.3-.6 0-1.4c1.2-.9.4-1.7-.5-.8"/><path fill="#fff8d6" d="M27.6 16.1c.6-2.9-7-4-5.3 1.6c-5 .4-2.9 7.4 2.9 7.4c8.2-.1 6.7-10.9 2.4-9"/><path fill="#edd8b4" d="M23.2 18.8c-1.6 7.9 9.9 5 5.1-.8c-1-3.6-4.5-1.8-5.1.8"/><path fill="#c9ae81" d="M25.7 18.2c-.1 1.5-1.2.8-2 1.5c-2.3 2 3.9 3.9 4.9.3c.2-.9-2.6.1-2.1-1.4c.6-1.5-.6-1.7-.8-.4"/><path fill="#fff8d6" d="M45.3 9.3c.6-2.9-6.9-3.9-5.2 1.6c-4.9.4-2.3 9.7 2.8 7.2c2 3.3 6.8-.1 4.9-2.7c4.1-.9 1.8-7.9-2.5-6.1"/><path fill="#edd8b4" d="M41.8 11.9c-2-.7-3.4 3.1-.1 2.8c-1.3 2.4 3.9 4.1 3.3.4c3 1.2 3.7-3.6 1.1-3.9c-1.1-3.6-5.3-1.7-4.3.7"/><path fill="#c9ae81" d="M43.6 11.4c-.1 1.5-.2 1.3-1.2 1.3c-1.9.1-1.8 1.2 0 .8c1.1-.3 1.6-.2.9 1.2c-.8 1.7.5 1.6.7.1s0-.9 1.5-1.1c1.3-.2 1.4-1-.2-.8s-1.4.3-.9-1.2c.5-1.4-.7-1.6-.8-.3"/><path fill="#ed4c5c" d="M7.8 22.4L15.7 62h6.5l-5.3-39.6c-.4-5.6-9.9-5.6-9.1 0"/><path fill="#f9f9f9" d="M16.9 22.4L22.2 62h6.5L26 22.4c0-5.6-9.5-5.6-9.1 0"/><path fill="#ed4c5c" d="M26 22.4L28.7 62h6.5V22.4c.3-5.6-9.2-5.6-9.2 0"/><path fill="#f9f9f9" d="M35.2 22.4V62h6.4l2.7-39.6c.6-5.6-8.8-5.6-9.1 0"/><path fill="#c94747" d="m41.6 62l4.1-2.8l1.9-35.5c.6-4.3-3-5.9-3.4-1.3z"/><path fill="#e8e8e8" d="M49.2 56.8L51.1 25c.7-4-2.8-5.6-3.4-1.3l-1.9 35.5z"/><path fill="#c94747" d="m52.1 54.9l2.3-28.5c.8-3.7-2.6-5.3-3.3-1.3l-1.9 31.8z"/><path fill="#e8e8e8" d="m54 53.6l2.3-26c.2-2.9-1.6-3.9-1.9-1.2l-2.3 28.5z"/></svg>
  
          <div class="flex flex-col gap-1">
            <p class="text-base">
              {{ food.title }}
            </p>

            <span class="text-xs text-gray-300">
              {{ food.description }}
            </span>
          </div>
        </div>

        <div class="flex gap-5 items-center text-xl p-2">
          <button @click="removeFood(index)"> - </button>
          
          <p>
            {{ food.quantity }}
          </p>
          
          <button @click="addFood(index)"> + </button>
        </div>
      </div>


      <p class="flex items-center justify-center m-3 border-b-1 border-white p-1">
        Bebidas
      </p>

      <div
        v-for="(drink, i) in storeDrinks"
        :key="drink.id"
        :class="[
          'flex gap-3 bg-gray-700 rounded-xl m-3 justify-between p-4',
        ]"
      >
        <div class="flex gap-5 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4V1a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v3h0a3.36 3.36 0 0 0-1.5 2.8v5.7a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V6.8A3.36 3.36 0 0 0 8.25 4Zm-4 3.5h5.5m0 3.5h-5.5"/></svg>          
          
          <div class="flex flex-col gap-1">
            <p class="text-base">
              {{ drink.title }}
            </p>

            <span class="text-xs text-gray-300">
              {{ drink.description }}
            </span>
          </div>
        </div>

        <div class="flex gap-5 items-center text-xl p-2">
          <button @click="removeDrink(i)"> - </button>
          
          <p>
            {{ drink.quantity }}
          </p>
          
          <button @click="addDrink(i)"> + </button>
        </div>
      </div>

      <div class="flex flex-col gap-3 m-3 bg-indigo-600 p-3 rounded-xl">
        <div class="flex flex-col gap-2 font-light">
          <p>
            Ingresso(s): R${{ totalTickets }}
          </p>
          <p>
            PopCorn: R${{ totalPopCorn }}
          </p>

          <hr>

          <p>
            Total: R${{ totalPayment }}
          </p>
        </div>
      </div>

      <MovButton
        :label="`R$${totalPayment}`"
        @click="navigateTo('/payment')"
      />
    </div>


    <MovNavgate />
  </section>
</template>

<script setup>

  const route = useRoute();
  // const selectedChairs = JSON.parse(route.query.chairs || '[]');
  const totalTickets = route.query.total || 0;
  const totalPopCorn = ref(0);
  const totalPayment = computed(() => Number(totalTickets) + totalPopCorn.value);

  
  const storeFoods = ref([
    {
      id: 0,
      title: 'Pipoca',
      description: 'Tamanho: Grande',
      value: 20,
      quantity: 0,
    },
    {
      id: 1,
      title: 'Pipoca',
      description: 'Tamanho: Média',
      value: 15,
      quantity: 0,
    },
    {
      id: 2,
      title: 'Pipoca',
      description: 'Tamanho: Pequena',
      value: 10,
      quantity: 0,
    },
    {
      id: 3,
      title: 'HotDog',
      description: 'Tamanho: 10cm',
      value: 17,
      quantity: 0,
    },
    {
      id: 4,
      title: 'Chocolate Garoto',
      description: 'Tamanho: 260g',
      value: 6,
      quantity: 0,
    },
    {
      id: 5,
      title: 'Chocolate Lacta',
      description: 'Tamanho: 240g',
      value: 8,
      quantity: 0,
    },
  ]);
  
  const storeDrinks = ref([
    {
      id: 6,
      title: 'Coca-Cola Lata',
      description: 'Tamanho: 350ml',
      value: 5,
      quantity: 0,
    },
    {
      id: 7,
      title: 'Coca-Cola',
      description: 'Tamanho: 610ml',
      value: 8,
      quantity: 0,
    },
    {
      id: 8,
      title: 'Guaraná-Antartica',
      description: 'Tamanho: 350ml',
      value: 5,
      quantity: 0,
    },
    {
      id: 9,
      title: 'Pepsi',
      description: 'Tamanho: 350ml',
      value: 5,
      quantity: 0,
    },
    {
      id: 10,
      title: 'Fanta Laranja',
      description: 'Tamanho: 350ml',
      value: 4,
      quantity: 0,
    },
  ]);

  
  function removeFood(index) {
    if (storeFoods.value[index].quantity <= 0) {
      storeFoods.value[index].quantity = 0;
    } else {
      storeFoods.value[index].quantity -= 1;
      totalPopCorn.value -= storeFoods.value[index].value
    };
  };

  function addFood(index) {
    if(storeFoods.value[index].quantity >= 10 ) {
      storeFoods.value[index].quantity = 10;
    } else {
      storeFoods.value[index].quantity += 1;
      totalPopCorn.value += storeFoods.value[index].value
    };
  };


  function removeDrink(index) {
    if(storeDrinks.value[index].quantity <= 0) {
      storeDrinks.value[index].quantity = 0;
    } else {
      storeDrinks.value[index].quantity -= 1;
      totalPopCorn.value -= storeDrinks.value[index].value
    };
  };

  function addDrink(index) {
    if(storeDrinks.value[index].quantity >= 10 ) {
      storeDrinks.value[index].quantity = 10;
    } else {
      storeDrinks.value[index].quantity += 1;
      totalPopCorn.value += storeDrinks.value[index].value
    };
  };

</script>