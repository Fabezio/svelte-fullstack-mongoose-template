<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Home from "../pages/_home.svelte";
    import Employees from "../pages/Employees.svelte";
    import Cities from "../pages/Cities.svelte";
    import Sites from "../pages/Sites.svelte";
</script>

<Router>
    <header>
        <nav>
            <div class="tabs">
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="sites">Sites</Link>
                    <Link to="workers">Employés</Link>
                    <Link to="cities">Villes</Link>
                </ul>
            </div>
        </nav>
    </header>
    <div class="container mt-6">
        <Route path="/">
            <Home />
        </Route>

        <Route path="sites">
            <Sites />
        </Route>

        <Route path="workers">
            <Employees />
        </Route>

        <Route path="cities">
            <Cities />
        </Route>
    </div>
</Router>
