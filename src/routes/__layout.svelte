<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <slot />
{/if}

<style>
</style>
