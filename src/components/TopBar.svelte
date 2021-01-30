<script>
    import Title from "./TopBar/Title.svelte";
</script>

<main>
    <Title></Title>
</main>

<style>
    main {
        display: absolute;
        z-index: 60;
        height: auto;
        width: 100%;
        top:0;
        left:0;
        right:0;
        position: fixed;
        background-color:#8e9aaf;
        box-shadow: 0 15px 8px #ccd3df;
    }
</style>