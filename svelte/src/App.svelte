<script lang="ts">
	import Input from './components/Input.svelte'
	import Box from './components/Box.svelte'

	let headerValue:string = "Enter the key"
	let inputValue:string = ""

	function keylistener(event:Event) {
		console.log(event)
	}
</script>

<main>
	<hi class="header">{headerValue}</hi>
	<Input placeholder="" keylistener={keylistener} value={inputValue}/>
	<div class="boxe-container">
		<Box heading="Hello" content="LOL"></Box> 
	</div>
</main>

<style>
	:root {
	    background-color : #36393F;
		/* --foreground : #7289DA; */
	}

	main {
		display: grid;
		place-items: center;
		margin-top: 150px;
	}

	.header {
		font-size : 25px;
		color : #FF7B7A;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: capitalize;
	}

	.boxes {
		display: flex;
		justify-content: center;
		margin: 10px 10px 10px 10px;
	}
</style>