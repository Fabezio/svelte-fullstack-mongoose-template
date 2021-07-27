<script>
    import { Router, Route, Link } from "svelte-navigator";
    // import Blog from "./Blog.svelte";
    // import BackButton from "./BackButton.svelte";
    // import ForwardButton from "./ForwardButton.svelte";
    import Home from "../pages/_home.svelte";
    import Employees from "../pages/Employees.svelte";
    import Cities from "../pages/Cities.svelte";
</script>

<Router>
    <header>
        <!-- <h1>History</h1> -->

        <nav>
            <!-- <BackButton />
            <ForwardButton /> -->
            <div class="tabs">
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="workers">Employés</Link>
                    <Link to="cities">Villes</Link>
                    <!-- <li class="is-active"><a href="workers">Employés</a></li>
                    <li><a href="cities">Villes</a></li> -->
                    <!-- <li><a>Videos</a></li>
                    <li><a>Documents</a></li> -->
                </ul>
            </div>
            <!-- <Link to="blog">Blog</Link> -->
        </nav>
    </header>

    <Route path="/">
        <Home />
    </Route>

    <Route path="workers">
        <Employees />
    </Route>

    <Route path="cities">
        <Cities />
    </Route>
</Router>
