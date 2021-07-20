
  <script>
    import { createEventDispatcher } from "svelte";
    import { createForm } from "svelte-forms-lib";
    export let thisForm 

    const dispatch = createEventDispatcher()

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        // title: "",
        nom: "",
        prenom: "",
        phone: "",
        email: ""
      },
      thisForm: $form,
      
      onSubmit: values => {
        //   const {title, email, name} = values
          
        //   console.log(values.title);
          thisForm = [...thisForm, values]
          dispatch("register", thisForm)
        // return values, thisForm
      }
    });
    // $: thisForm = thisForm
  </script>

  <form on:submit={handleSubmit}>
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
      
      name="nom"
      on:change={handleChange}
      bind:value={$form.nom}
      placeholder="nom de famille: "
    /><br>
    <input
      
      name="prenom"
      on:change={handleChange}
      bind:value={$form.prenom}
      placeholder="prenom: "
    /><br>
    <input
      
      name="phone"
      on:change={handleChange}
      bind:value={$form.phone}
      placeholder="numéro de téléphone: "
    /><br>

    <!-- <label for="email">email</label> -->
    <input
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}
      placeholder="email: "
    /><br>

    <button type="submit">Submit</button>
  </form>
  <hr>
  <!-- {#each thisForm as {nom, prenom, phone, email}}
    {nom}      
    {prenom}      
    {phone}      
    {email}      
        
  {/each} -->