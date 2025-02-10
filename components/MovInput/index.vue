<template>
  <div class="md:col-span-2">
    <label class="block mb-1">
      {{ label }}
    </label>

    <input
      class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      :placeholder="placeHolder"
      :type="type"
    />
  </div>
</template>

<script setup>  

  defineProps({
    label: {
      type: String,
      default: ''
    },
    placeHolder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
  });

</script>