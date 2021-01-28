<script>
    import { getLastUpdated } from "./Body/Form/Utils/API";
    import { formatDate } from "./Body/Form/Utils/timeHandlers";
    import Loading from "./Body/Misc/Loading.svelte";
    import Credits from "./Credits.svelte";
</script>

<div>
    {#await getLastUpdated()}
        <Loading></Loading>
    {:then data} 
        <p>
            <i>This information is based on competition results owned and maintained by the World Cube Assocation, published <a href="https://worldcubeassociation.org/results" target="_blank">here</a> as of <b>{ formatDate(data.export_date) }.</b></i>
            <br>
            <i><b>Updated at least once a week, usually around noon on Sunday.</b></i>
            <Credits></Credits>
        </p>
    {/await}
</div>

<style>
    p { 
        position: fixed;
        width: 100%;
        margin-top: 600px;
        margin-right: auto;
        margin-left: auto;
        bottom: 0;
        color: #bdc3c7;
    }
    a {
        color: #34495e;
    }
</style>