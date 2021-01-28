<script>
    export let rankData;
</script>
    
<table>
    <thead>
        <tr><td></td><td>Rank</td><td>Result</td><td>Person</td><td></td></tr>
    </thead>
    <tbody>
        {#each rankData as rankData, i}
            {#if i==1}
                <tr id="current">
                    <td>-</td>
                    <td>{ rankData.rank || ""}</td>
                    <td>{ rankData.time || "" }</td>
                    <td>{ rankData.person || "" }</td>
                    <td>-</td>
                </tr>
            {:else} 
                    <tr>
                        <td></td>
                        <td>{ rankData.rank || ""}</td>
                        <td>{ rankData.time || "" }</td>
                        <td>{ rankData.person || ""}</td>
                        <td></td>
                    </tr>
            {/if}
        {/each}
    </tbody>
</table>

<style>
    table {
        margin-top: 10px;
        min-width: 300px;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow:  0 10px 6px #ccd3df;
    }
    #current {
        font-weight: 700;
        font-size: 1.2em;
    }
</style>