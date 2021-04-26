<script lang="ts">
    export let placeholder:string;
    export let keylistener:Function;
    export let value:string;
</script>

<main>
    <input type="text" placeholder={placeholder}  bind:value={value} on:keydown={event => {
        keylistener(event)
        value = ""
    }}>
</main>

<style>
    input {
        width: 100%;
        border: 2px solid #000000;
        outline: 0;
        padding: 10px;
        border-radius: 10px;
        margin: 15px 15px 15px 15px;
        background: rgb(53, 59, 63);
        border: 2px solid #000000;
        color: #FF7B7A;
        font-size: 20px;
    }
</style>