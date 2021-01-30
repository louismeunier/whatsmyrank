<script>
    let iconSrc = "images/favicon.png";
    import Credits from "./Credits.svelte"
    let display = screen.height>750;
    window.addEventListener("resize", () => display = screen.height>750 && screen.width>900);
</script>

{#if display}
    <h1>
        <span>w</span><span>h</span><span>a</span><span>t</span><span>'s</span><span>&nbsp;</span><span>m</span><span>y</span><span>&nbsp;</span><span>r</span><span>a</span><span>n</span><span>k</span><span>?</span></h1>
        <img on:click={()=>display=!display} height=100px src={iconSrc} alt="Logo">
        <h2>
            <i>an  <a target="_blank" href="https://github.com/louismeunier/whatsmyrank">open-source</a> cubing utility</i>
        </h2>
        <Credits></Credits>
{:else}
    <h2>
        <img on:click={()=>display=!display} height=65px src={iconSrc} alt="Logo">
    </h2>
{/if}

<style>
      a {
        color: #333;
    }
</style>