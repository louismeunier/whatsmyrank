<script>
    import Form from "./Body/Form/Form.svelte";
</script>

<main>
    <Form></Form>
</main>

<style>
    main {
        width: 100%;
        position:relative;
        margin-top: 350px;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0); 
        -webkit-transform: translate(-50% , 0); 
        margin-bottom: 150px;
    }
    @media screen and (max-height:750px) {
        main {
            margin-top: 100px;
        }
    }
</style>