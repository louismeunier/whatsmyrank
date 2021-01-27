<script>
    export let Input;
    import getWCA from "./Utils/API";
    import getRankData from "./Utils/RankLogic";
    import { isValidTime } from "./Utils/timeHandlers";
    import Table from "./Table.svelte";
    import Loading from "../Misc/Loading.svelte";
</script>

<div>
    {#if Input.time && isValidTime(Input.time)}
        {#await getWCA(Input.event,Input.type)}
            <Loading></Loading>
        {:then data}
            <Table rankData={ getRankData(Input.time, data.data) }></Table>
        {:catch error} 
            <h3 style="color:red;">❗Error: contact louismeunier if this persists❗</h3>
        {/await}
    {:else} 
        <h3>
            <i style="color:red">❗Invalid time❗</i>
            <p>Time must be in mm:ss.cc <i>OR</i> ss.cc</p>
        </h3>
    {/if}
</div>

<style>
    div {
        width: 250px;
        margin:auto;
    }
    h3 {
        margin-top: 10px;
    }
</style>