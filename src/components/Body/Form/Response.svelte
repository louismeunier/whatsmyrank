<script>
    export let Input;
    import getWCA from "./Utils/API";
    import getRankData from "./Utils/RankLogic";
    import Table from "./Table.svelte";
</script>

<div>
    {#if Input.time}
        {#await getWCA(Input.event,Input.type)}
            <h2>Loading...</h2>
        {:then data}
            <Table rankData={ getRankData(Input.time, data.data) }></Table>
        {:catch error} 
            <h2>Oh no! An error occured :/</h2>
        {/await}
    {:else} 
        <h2>Enter a time to see your rank!</h2>
    {/if}
</div>

<style>
    div {
        display: flex;
        justify-content: center;
    }
</style>