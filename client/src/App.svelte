<script>
	import { onMount } from "svelte";
	// import { Router, Route, Link } from "svelte-navigator";
	// import Employees from "./pages/Employees.svelte";
	// import Cities from "./pages/Cities.svelte";
	// import Spinner from "./UXI/Spinner.svelte";
	import Nav from "./UXI/Nav.svelte";
	// import WorkersForm from "./UXI/WorkersForm.svelte";

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

<Nav />

<!-- <header class="box is-large" /> -->
<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	} */
	/* header {
		min-height: 150px;
		text-align: center;
	} */

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
