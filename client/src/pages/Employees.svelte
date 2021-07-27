<script>
    import { onMount } from "svelte";
    // import { Router, Route, Link } from "svelte-navigator";
    // import addSpace from "./middlewares/addspaces";

    import axios from "axios";

    import WorkersForm from "../UXI/WorkersForm.svelte";
    import Card from "../UXI/Card.svelte";

    const url = "http://localhost:3000/api/workers";
    let list = [];

    let showList = true;

    async function fetchEmployees() {
        const { data } = await axios.get(url);
        list = data;
    }

    onMount(() => {
        fetchEmployees();
    });

    async function removeWorker(id) {
        const response = await axios.delete(`${url}/${id}`);
        if (response.data.id === id) {
            list = list.filter((t) => t.id !== id);
        }
    }
</script>

<!-- <Route path="workers" /> -->

<h2 id="workers" class="title">Employés</h2>
<button class="is-primary" on:click={() => (showList = !showList)}
    >Ajouter Employé</button
>
{#if showList}
    <div class="subtitle">Employees list</div>
    {#each list as { nom, prenom, phone, email, _id }}
        <Card {nom} {prenom} {phone} {email} />
        <!-- <div class="notification is-info">
                {prenom}
                {nom};
                <i class="fas fa-phone" />
                {addSpace(phone)};
                <i class="far fa-envelope" />
                {email}

                <div class="delete" on:click={removeWorker(_id)} />
            </div> -->
    {/each}
{:else}
    <WorkersForm />
{/if}

<hr />
<!-- {#each thisForm as { nom, prenom, phone, email }}
        {nom}
        {prenom}
        {phone}
        {email}
    {/each} -->
