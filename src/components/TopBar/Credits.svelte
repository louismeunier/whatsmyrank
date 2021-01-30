<script>
    import { getLastUpdated } from "../Body/Form/Utils/API";
    import { formatDate } from "../Body/Form/Utils/timeHandlers";
    import Loading from "../Misc/Loading.svelte";
</script>

<div>
    {#await getLastUpdated()}
        <Loading></Loading>
    {:then data} 
        <div>
                <p id="credits">
                    <i>This information is based on competition results owned and maintained by the World Cube Assocation, published <a href="https://worldcubeassociation.org/results" target="_blank">here</a> as of <b>{ formatDate(data.export_date) }.</b></i>
                    <br>
                    <i>Icons by 
                        <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>,
                        <a href="https://www.flaticon.com/authors/creaticca-creative-agency" target="_blank">Creaticca-Creative-Agency</a>, 
                        and <a href="https://roundicons.com/" target="_blank">Roundicons</a>
                    </i>
                </p>
            </div>
    {/await}
</div>

<style>
    i {
       width: 100%;
    }
    a {
        color: #333;
    }
    div {
        margin-bottom: 15px;
    }
</style>