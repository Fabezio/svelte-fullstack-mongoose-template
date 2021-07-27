<script>
    import { onMount } from "svelte";
    import { site, sites } from "../store/sites";
    import SiteForm from "../UXI/SiteForm.svelte";
    // import { Router, Route, Link } from "svelte-navigator";

    import axios from "axios";

    // import Card from "../UXI/Card.svelte";

    const url = "http://localhost:3000/api/sites";
    let list = [];

    let showList = true;

    async function fetchData() {
        const { data } = await axios.get(url);
        list = data;
    }

    onMount(() => {
        fetchData();
    });

    async function removeData(id) {
        const response = await axios.delete(`${url}/${id}`);
        if (response.data.id === id) {
            list = list.filter((t) => t.id !== id);
        }
        fetchData();
    }
</script>

<!-- <Route path="cities" /> -->

<h2 id="workers" class="title">Sites</h2>
<button class="is-primary" on:click={() => (showList = !showList)}
    >Ajouter Site</button
>
{#if showList && list.length}
    <div class="subtitle">Liste de sites</div>
    {#each list as { nom, adresse, telephone, email, _id }}
        <!-- <Card {nom} {prenom} {phone} {email} /> -->
        <div class="notification is-info">
            <!-- {prenom} -->
            <div>{nom}</div>
            <div>{adresse}</div>
            <div>{telephone}</div>
            <div>{email}</div>
            <!-- <i class="fas fa-phone" />
                {addSpace(phone)};
                <i class="far fa-envelope" />
                {email} -->

            <div class="delete" on:click={removeData(_id)} />
        </div>
    {/each}
{:else}
    <SiteForm />
{/if}

<hr />
<!-- {#each thisForm as { nom, prenom, phone, email }}
        {nom}
        {prenom}
        {phone}
        {email}
    {/each} -->
