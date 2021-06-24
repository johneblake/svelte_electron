<script lang="ts">
  import Counter from '$lib/Counter.svelte';
  import Logo from '$lib/Logo.svelte';
</script>

<main class="container text-center pt-4 px-2 pb-2 my-0 mx-auto">
  <Logo />

  <h1 class="text-2xl">Hello Electron!</h1>

  <Counter id="0" />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    animation: fade 1s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
