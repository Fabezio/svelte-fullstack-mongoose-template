<script>
    import { onMount } from "svelte";
    import List from "./List.svelte"
    import UserForm from "./UserForm.svelte"
    import "bulma/css/bulma.css";
    import axios from "axios";
    let userForm = []
    $: console.log(userForm)

    const url = "http://localhost:3000/api/workers";
    let list = [];

    let showList = false
    // $: console.log(showList)

    async function fetchEmployees() {
        const { data } = await axios.get(url);
        list = data;
        // console.log(list);
    }
    
   
    // let loadingData = false
    onMount(() => {
        fetchEmployees();
        // setTimeout(()=>loadingData = true, 1000)
        // console.log("component mounted!");
        // loadingData = false
    });
</script>

<div class="container">
    <h1 class="title">hello</h1>
    <button on:click={()=>showList = !showList}>changer vue</button>
    {#if showList}
    <List {list} /> 
    {:else}
    <UserForm on:register={()=> {return userForm}} thisForm={userForm} />
    {/if}
    <!-- <svelte:component this={List(list)} /> -->
    <hr>
    {#each userForm as {nom, prenom, phone, email}}
    {nom}      
    {prenom}      
    {phone}      
    {email}      
        
  {/each}
    
</div>
