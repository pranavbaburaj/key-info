<script lang="ts">
	import Input from './components/Input.svelte'

	let headerValue:string = "Enter the key"
	let inputValue:string = ""

	function keylistener(event:Event) {
		console.log(event)
	}
</script>

<main>
	<p class="header">{headerValue}</p>
	<Input placeholder="" keylistener={keylistener} value={inputValue}/>
</main>

<style>
	:root {
	    background-color : #36393F;
		/* --foreground : #7289DA; */
	}

	.header {
		color : #FF7B7A;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: capitalize;
	}
</style>