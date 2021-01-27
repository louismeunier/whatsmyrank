<h2>Loading</h2>

<style>
    @keyframes loading {
        0% {color: red};
        25% {color: green};
        50% {color: blue};
        75% {color: yellow};
        100%{color: orange};
    }
    h2 {
        animation-name: loading;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        margin-top: 50px;
        width: 200px;
    }
</style>