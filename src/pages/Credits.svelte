
<script>
  import CreditsTable from "../components/CreditsTable.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    console.log("Credits.svelte mounted");
  });
</script>


<CreditsTable/>

