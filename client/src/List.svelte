<script>
    export let list = list
    function addSpace(str) {
        const arr = str.split("")
        arr.splice(8,0, " ")
        arr.splice(6,0, " ")
        arr.splice(4,0, " ")
        arr.splice(2,0, " ")
        str = arr.join("")
        return str
    }
</script>

<div class="subtitle">Employees list</div>
    {#each list as { nom, prenom, phone, email }}
        <div class="notification is-info">
            {prenom}
            {nom}
            {addSpace(phone)}
            {email}
            <div class="delete" />
        </div>
    {/each}

    <!-- <h2>List</h2> -->