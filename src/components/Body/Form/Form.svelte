<script>
    import { submission } from "./Utils/Submission";
    import Response from "./Response.svelte";
    import Countries from "../../../consts/countries";
    import Continents from "../../../consts/continents";
    let arrowSrc = "images/arrow.png";
    //logic from thewca/wca-live
    const toInt = (string) => parseInt(string, 10) || null
    const reformatInput = (e) => {
        const input = e.target.value;
        const number = toInt(input.replace(/\D/g, '')) || 0
        if (number === 0) {document.getElementById("time").value= ''}
        else {
            const str = '00000000' + number.toString().slice(0, 8)
            const [, hh, mm, ss, cc] = str.match(/(\d\d)(\d\d)(\d\d)(\d\d)$/)
            document.getElementById("time").value= `${hh}:${mm}:${ss}.${cc}`.replace(/^[0:]*(?!\.)/g, '')
        }
    }
</script>

<div>
    <section>
        <h1><img src={arrowSrc} alt=">">Input<img style="transform:rotate(180deg);" src={arrowSrc} alt="<"></h1>
        <form on:submit|preventDefault>
            <input class="search-type" on:change = {$submission.input="3.47"} bind:group={$submission.searchType} type="radio" name="search-type" value="time">Time
            <input class="search-type" on:change = {$submission.input="1"} bind:group={$submission.searchType} type="radio" name="search-type" value="rank">Rank
            <label for="time"></label>
            <input id="time" type=text on:input={ (e) => { $submission.searchType=="time" && reformatInput(e)} } bind:value={ $submission.input } required>
            <label for="event">Event</label>
            <select id="event" bind:value={ $submission.event }>
                <option value="333">3x3</option>
                <option value="222">2x2</option>
                <option value="444">4x4</option>
                <option value="555">5x5</option>
                <option value="666">6x6</option>
                <option value="777">7x7</option>
                <option value="sq1">Square-1</option>
                <option value="pyram">Pyraminx</option>
                <option value="skewb">Skewb</option>
                <option value="333oh">OH</option>
                <option value="333bf">3BLD</option>
                <option value="444bf">4BLD</option>
                <option value="555bf">5BLD</option>
                <option value="minx">Megaminx</option>
                <option value="clock">Clock</option>
            </select>
            <label for="type">Type</label>
            <select id="type" bind:value={ $submission.type }>
                <option value="singles">Single</option>
                <option value="averages">Average</option>
            </select>
            <label for="where">Location</label>
            <select id="where" bind:value={ $submission.where }>
                <option value="world">World</option>
                <optgroup label="Continent">
                    {#each Continents as cr}
                        <option value={cr.id}>{cr.id.split("_")[1]}</option>
                    {/each}
                </optgroup>
                <optgroup label="Country">
                    {#each Countries as nr}
                        <option value={nr.id}>{nr.id}</option>
                    {/each}
                </optgroup>
            </select>
        </form>
    </section>
    <section id="response">
        <h1><img style="transform:rotate(180deg);"src={arrowSrc} alt="<">Output<img src={arrowSrc} alt=">"></h1>
        <Response Input={$submission}></Response>
    </section>
</div>
<style>
    div {
        display: grid;
        height: auto;
        grid-template-columns: repeat(2, 1fr);
        min-width: 10%;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
        justify-content: space-evenly;
    }
    #response {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    input, select {
        text-align: left;
        border-radius: 15px;
        padding: 8px;
        max-width: 150px;
        margin-top: 5px;
        margin-bottom: 5px;
        box-shadow:  0 10px 6px #ccd3df;
    }
    label {
        margin-top: 10px;
    }
    input::placeholder, select::placeholder {
        text-align: center;
    }
    img {
        height: 17px;
        vertical-align: middle;
    }
    .search-type {
        margin-left: 10px;
        margin-right: 10px;
        height: 15px;
        width: 15px;
    }
    @media screen and (max-height: 750px) {
        div {
            display: block;
        }
    }
    @media screen and (max-width: 900px) {
        div {
            display: block;
        }
    }
</style>