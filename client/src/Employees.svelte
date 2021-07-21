<script>
    import { onMount } from "svelte";
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
    import List from "./List.svelte";
    // import UserForm from "./UserForm.svelte"
    import "bulma/css/bulma.css";
    import axios from "axios";
    let thisForm = [];
    $: console.log(thisForm);

    const url = "http://localhost:3000/api/workers";
    let list = [];

    let showList = false;
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
    const { form, errors, state, handleChange, handleSubmit } = createForm({
        initialValues: {
            // title: "",
            nom: "",
            prenom: "",
            phone: "",
            email: "",
        },
        validationSchema: yup.object().shape({
            nom: yup.string().required(),
            prenom: yup.string().required(),
            phone: yup.string().required(),
            email: yup.string().email().required(),
        }),
        thisForm: $form,

        onSubmit: (values) => {
            //   const {title, email, name} = values

            //   console.log(values.title);
            thisForm = [...thisForm, values];
            dispatch("register", thisForm);
            // return values, thisForm
        },
    });
</script>

<div class="container">
    <h1 class="title">hello</h1>
    <button on:click={() => (showList = !showList)}>changer vue</button>
    {#if showList}
        <List {list} />
    {:else}
        <form class="field" on:submit={handleSubmit}>
            <!-- <label for="title">title</label>
    <select
      id="title"
      name="title"
      on:change={handleChange}
      bind:value={$form.title}>
      <option></option>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Mx.</option>
    </select>

    <label for="username">name</label> -->
            <input
                class="input is-{!$errors.nom ? 'primary' : 'danger'}"
                name="nom"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.nom}
                placeholder="nom de famille: "
            />
            {#if $errors.nom}
                <small>{$errors.nom}</small>
            {/if}
            <br />
            <input
                name="prenom"
                class="input is-{!$errors.prenom ? 'primary' : 'danger'}"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.prenom}
                placeholder="prenom: "
            />
            {#if $errors.prenom}
                <small>{$errors.prenom}</small>
            {/if}
            <br />
            <input
                name="phone"
                type="tel"
                class="input is-{!$errors.phone ? 'primary' : 'danger'}"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.phone}
                placeholder="numéro de téléphone: "
            />
            {#if $errors.phone}
                <small>{$errors.phone}</small>
            {/if}
            <br />

            <!-- <label for="email">email</label> -->
            <input
                class="input is-{!$errors.email ? 'primary' : 'danger'}"
                name="email"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.email}
                placeholder="email: "
            />
            {#if $errors.email}
                <small>{$errors.email}</small>
            {/if}
            <br />

            <button type="submit">Submit</button>
        </form>
        <!-- <UserForm on:register={()=> {return thisForm}} thisForm={thisForm} /> -->
    {/if}
    <!-- <svelte:component this={List(list)} /> -->
    <hr />
    {#each thisForm as { nom, prenom, phone, email }}
        {nom}
        {prenom}
        {phone}
        {email}
    {/each}
</div>
