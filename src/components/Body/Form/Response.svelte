<script>
    export let Input;
    import { getWCA } from "./Utils/API";
    import { getTimes, getRanks } from "./Utils/RankLogic";
    import { isValidTime } from "./Utils/timeHandlers";
    import Table from "./Table.svelte";
    import Loading from "../../Misc/Loading.svelte";
</script>

<div>
    {#if Input.input}
        {#await getWCA(Input.event,Input.type)}
            <Loading></Loading>
        {:then data}
            {#if Input.searchType=="time" && isValidTime(Input.input)}
                <Table rankData={ getRanks(Input.input, data.data, Input.where) }></Table>
            {:else if Input.searchType=="rank" && parseFloat(Input.input)==parseInt(Input.input) && (parseInt(Input.input)>0 || parseInt(Input.input)==-1)}
                <Table rankData={ getTimes(Input.input, data.data, Input.where) }></Table>
            {:else}
            <!--Can remove this later-->
                <h3>
                    <i style="color:red">❗Invalid {Input.searchType}❗</i>
                </h3>
            {/if}
        {:catch error} 
            <h3 style="color:red;">❗Error: contact louismeunier if this persists❗</h3>
        {/await}
    {:else} 
        <h3>
            <i style="color:red">❗Invalid  {Input.searchType}❗</i>
        </h3>
    {/if}
</div>

<span id="cubing-icon" class="cubing-icon event-{Input.event}"></span>

<style>
    h3 {
        margin-top: 10px;
    }
    #cubing-icon {
        margin-top: 50px;
        font-size: 80px;
    }
</style>