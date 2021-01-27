<script>
    let githubSrc = "images/Github64.png";
    let infoSrc = "images/information.png";
    const handleInfo = () => {
        document.getElementById("icon-credits").style.display=="none"?document.getElementById("icon-credits").style.display="block":document.getElementById("icon-credits").style.display="none";
    } 
</script>
<main>
    <p>
        <img on:click={handleInfo} src={ infoSrc } alt="information">
        <a target="_blank" href="https://github.com/louismeunier/whatsmyrank"><img src={ githubSrc } alt="Github"></a>
    </p>
</main>
<style>
    main {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 16px;
    }
    img {
        height: 20px;
        margin-left: 15px;
        margin-right: 15px;
        vertical-align: middle;
    }
</style>