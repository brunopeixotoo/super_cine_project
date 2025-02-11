<template>
  <div class="md:col-span-2">
    <label class="block mb-1">
      {{ label }}
    </label>

    <input
      class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>

  defineProps({
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  });

  defineEmits(['update:modelValue']);

</script>
