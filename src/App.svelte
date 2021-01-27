<script>
	import TopBar from "./components/TopBar.svelte";
	import Body from "./components/Body.svelte";
	import BottomBar from "./components/BottomBar.svelte";
	import Credits from "./components/Credits.svelte";
</script>

<main>
	<TopBar></TopBar>
	<Body></Body>
	<Credits></Credits>
	<BottomBar></BottomBar>
</main>
<style>
	main {
		text-align: center;
		height: 100%;
	}
	
</style>