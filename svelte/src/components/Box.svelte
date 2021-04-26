<script lang="ts">
    export let heading:string;
    export let content:string;
</script>

<main>
    <div class="box">
        <h3 class="heading">{heading}</h3>
        <p>{content}</p>
    </div>
</main>

<style>
    
    .box {
        width : 150px;
        display : grid;
        place-items: center;
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px rgb(0 0 0 / 30%);
        padding: 15px 25px 5px 25px;
        border: 2px solid #000000;
        /* margin: 50px 50px 50px 50px; */
    }
    .heading {
        color : #FF7B7A;
        font-weight: 600;
    }

    p {
        color : #FF7B7A;
        /* margin-bottom: 10%; */
        padding-bottom: 50px;
    }
</style>