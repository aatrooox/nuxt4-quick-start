<script lang="ts" setup>

</script>
<template>
  <div class="flex flex-col">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>