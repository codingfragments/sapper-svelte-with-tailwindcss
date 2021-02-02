<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import GlobalStyle from "../components/GlobalStyle.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <GlobalStyle />
  <slot />
</main>

<h1>ss</h1>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
