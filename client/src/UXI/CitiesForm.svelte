<script>
    import axios from "axios";
    import { cities, city, nom, codePostal } from "../store/city";
    import Input from "./Input.svelte";
    // import { url } from "../store/db";
    const url = "http://localhost:3000/api/cities/add";
    let full = false;
    // let $cities = [];
    async function submit(e) {
        full = true;

        e.preventDefault();
        $city = {
            nom: $nom,
            codePostal: $codePostal,
        };
        const response = axios.post(url, $city);
        $cities = [response.data, ...$cities];
    }
</script>

<form on:submit={submit}>
    <Input type="text" name="nom" bind:value={$nom} placeholder="nom" /><br />
    <Input
        type="text"
        name="prenom"
        bind:value={$codePostal}
        placeholder="code postal"
    /><br />
    <!-- <Input type="tel" name="phone" bind:value={$phone} placeholder="phone" /><br
    />
    <Input
        type="email"
        name="email"
        bind:value={$email}
        placeholder="email"
    /><br /> -->
    <!-- <input name="checked" id="checked" type="checkbox" /> -->
    <!-- <label
        bind:this={checked}
        on:click={checkThis}
        on:change={checkThis}
        for="checked">check me</label
    > -->

    <button>Submit</button> <br />
</form>

<!-- {#if $worker && full}
    {$worker.nom}
    {$worker.prenom}
    {$worker.phone}
    {$worker.email.value}
{:else}
    <small>no data yet</small>
{/if} -->

<!-- {@debug form} -->
