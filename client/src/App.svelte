<script>
	import { onMount } from "svelte";
	import Employees from "./Employees.svelte";
	import Spinner from "./UXI/Spinner.svelte";

	let loadingData = false;
	onMount(() => {
		loadingData = true;
		setInterval(() => (loadingData = false), 500);
		// console.log("component mounted!");
		// fetchEmployees();
		// loadingData = false;
	});
	// export let name;
</script>

<!-- <header class="box is-large" /> -->
<main>
	<svelte:component this={loadingData ? Spinner : Employees} />
	<!-- 	{#if loadingData}
		<Spinner />
	{/if}
	{#if !loadingData}
		<Employees />
	{/if}
 -->
	<!-- <h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	header {
		min-height: 150px;
		text-align: center;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
