<script>
    import { onMount } from "svelte";
    import { city, nom, codePostal } from "./store/city";
    import axios from "axios";

    import CitiesForm from "./UXI/CitiesForm.svelte";
    import Card from "./UXI/Card.svelte";

    const url = "http://localhost:3000/api/cities";
    let list = [];

    let showList = true;

    async function fetchCities() {
        const { data } = await axios.get(url);
        list = data;
    }

    onMount(() => {
        fetchCities();
    });

    async function removeCity(id) {
        const response = await axios.delete(`${url}/${id}`);
        if (response.data.id === id) {
            list = list.filter((t) => t.id !== id);
        }
    }
</script>

<div class="container">
    <h2 id="workers" class="title">Employés</h2>
    <button class="is-primary" on:click={() => (showList = !showList)}
        >Ajouter Ville</button
    >
    {#if showList}
        <div class="subtitle">Liste de villes</div>
        {#each list as { nom, codePostal, _id }}
            <!-- <Card {nom} {prenom} {phone} {email} /> -->
            <div class="notification is-info">
                <!-- {prenom} -->
                <div>{nom}</div>
                <div>{codePostal}</div>
                <!-- <i class="fas fa-phone" />
                {addSpace(phone)};
                <i class="far fa-envelope" />
                {email} -->

                <div class="delete" on:click={removeCity(_id)} />
            </div>
        {/each}
    {:else}
        <CitiesForm />
    {/if}

    <hr />
    <!-- {#each thisForm as { nom, prenom, phone, email }}
        {nom}
        {prenom}
        {phone}
        {email}
    {/each} -->
</div>
