<script>
    import Form from "./Body/Form/Form.svelte";
</script>

<main>
    <Form></Form>
</main>

<style>
    main {
        display: absolute;
        width: 100%;
        margin-top: 350px;
        left: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-height:1000px) {
        main {
            margin-top: 100px;
        }
    }
</style>