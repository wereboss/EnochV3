<script>
  import mockData from '../assets/mockcredits.json';
  import { onMount } from 'svelte';

  let creditItems = [];
  let loaded = false;
  let errorMessage = "No connection. Check your internet";

  function succCredits(creditsJSON) {
    //console.log("succCredits:" + creditsJSON);
    creditItems = JSON.parse(creditsJSON); 
    if(creditItems && creditItems.length>0) {
      loaded = true;
    } else {
      console.log("succCredits: null returned");
      loaded = false;
    }
  }
  onMount(() => {
  console.log("About to call Google");
 // google.script.run
 //   .withSuccessHandler(succCredits)
 //   .getCredits();
  });
  creditItems = mockData;
  loaded = true;
  
</script> 


<div class="container">
  <div class="fs-1">
    Credits Table
  </div>
  {#if !loaded}
  <div class="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
  </div>

  {:else}

  <table class="table table-striped mb-5">
  <caption>List of credits</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">personID</th>
      <th scope="col">Credits By</th>
      <th scope="col">Rep Points</th>
    </tr>
  </thead>
  <tbody>
    {#each creditItems as cred (cred.id)}
      <tr>
        <th scope="row">{cred.id}</th>
        <td>{cred.personId}</td>
        <td>{cred.credits}</td>
        <td>{cred.repPoints}</td>
      </tr>
    {/each}
  </tbody>
</table>

{/if}
</div>
