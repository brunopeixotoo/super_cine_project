<template>
  <button
    type="submit"
    class="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white text-lg font-semibold transition-all flex items-center justify-center"
  >
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">

  defineProps({
    label: {
      type: String,
      default: '',
    },
  });

</script>
