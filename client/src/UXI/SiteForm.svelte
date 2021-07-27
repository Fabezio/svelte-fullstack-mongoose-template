<script>
    import axios from "axios";
    import {
        site,
        sites,
        nom,
        adresse,
        telephone,
        email,
    } from "../store/sites";
    import Input from "./Input.svelte";
    // import { url } from "../store/db";
    const url = "http://localhost:3000/api/sites/add";
    let full = false;
    // let nom = "";
    // let adresse = "";
    // let telephone = "";
    // let email = "";
    function submit(e) {
        full = true;
        e.preventDefault();
        console.log($email.value);
        $site = {
            nom: $nom,
            adresse: $adresse,
            telephone: $telephone,
            email: $email.value,
        };
        const response = axios.post(url, $site);
        $sites = [...$sites, response.data];
    }

    // $: if ($worker.email.value) console.log($worker.email.value);
    // let checked = false;
    // function checkThis(e) {
    //     console.log(e.target.value);
    //     checked = !checked;
    // }
    // console.log(checked);
</script>

<form on:submit={submit}>
    <Input type="text" name="nom" bind:value={$nom} placeholder="nom" /><br />
    <Input
        type="text"
        name="adresse"
        bind:value={$adresse}
        placeholder="adresse"
    /><br />
    <Input
        type="tel"
        name="phone"
        bind:value={$telephone}
        placeholder="phone"
    /><br />
    <Input
        type="email"
        name="email"
        bind:value={$email}
        placeholder="email"
    /><br />
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
