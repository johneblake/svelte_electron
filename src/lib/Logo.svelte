<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => (visible = true));
</script>

{#if visible}
	<img
		src="/sveltekit-electron.svg"
		alt="Svelte Logo"
		draggable="false"
		class="inline-block"
		in:fly={{ y: 100, duration: 1500 }}
	/>
{:else}
	<div style="height: 16rem" />
{/if}

<style>
	img {
		height: 16rem;
		width: 16rem;
		user-select: none;
	}
</style>
