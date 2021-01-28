<script>
    import { getLastUpdated } from "./Body/Form/Utils/API";
    import { formatDate } from "./Body/Form/Utils/timeHandlers";
    import Loading from "./Body/Misc/Loading.svelte";
    import Credits from "./Credits.svelte";
    let infoSrc = "images/information.png";
    const toggleCredit = e => {
        const target = document.getElementById("credits");
        target.style.display=="none"?document.getElementById("credits").style.display="block":document.getElementById("credits").style.display="none";
    }
</script>

<div>
    {#await getLastUpdated()}
        <Loading></Loading>
    {:then data} 
        <p style="display:none;" id="credits">
            <i>This information is based on competition results owned and maintained by the World Cube Assocation, published <a href="https://worldcubeassociation.org/results" target="_blank">here</a> as of <b>{ formatDate(data.export_date) }.</b></i>
            <br>
            <Credits></Credits>
        </p>
        <img height=25px src={infoSrc} alt="credits" on:click={toggleCredit}>
        
    {/await}
</div>

<style>
    div { 
        position: fixed;
        width: 100%;
        margin-top: 600px;
        margin-right: auto;
        margin-left: auto;
        bottom: 0;
        color: #bdc3c7;
    }
    a {
        color: #272b2f;
    }
    img {
        margin-bottom: 5px;
    }
    @media screen and (max-width:700px) {
        div {
            left: 0;
            width: auto;
            margin-left: 10px;
        }
    }
</style>