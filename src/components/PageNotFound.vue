<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-5">
        <img src="/images/page-not-found.jpg" class="w-50">
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
