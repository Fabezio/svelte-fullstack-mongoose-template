<script>
    import { onMount } from "svelte";
    import "bulma/css/bulma.css";
    import axios from "axios";

    const url = "http://localhost:3000/api/employees";
    let list = [];

    async function fetchEmployees() {
        const { data } = await axios.get(url);
        list = data;
        console.log(list);
    }

    // let loadingData = false
    onMount(() => {
        // setTimeout(()=>loadingData = true, 1000)
        // console.log("component mounted!");
        fetchEmployees();
        // loadingData = false
    });
</script>

<div class="container">
    <h1 class="title">hello</h1>
    <div class="subtitle">Employees list</div>
    {#each list as { lastname, slug }}
        <div class="notification">
            {lastname}
            <div class="delete" />
        </div>
    {/each}
</div>
