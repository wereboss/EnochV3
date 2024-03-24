<script>
  import { onMount } from "svelte";
  import mockSumm from '../assets/mocksummary.json';
  let production = true;
  let loaded = false;
  let summaryObj;


  function succSummary(sObj){
    if(sObj){
      summaryObj = sObj;
    } else {
      summaryObj = mockSumm;
    }
      loaded = true;
  }

  onMount(() => {
    console.log("SelfSummary:OnMount");
    if(production) {
      google.script.run
      .withSuccessHandler(succSummary)
      .getSummary();
    }
  });
//  console.log("mockSumm:" + JSON.stringify(mockSumm));
    if(!production) {
      summaryObj = mockSumm;
      loaded = true;
    }
</script>


  {#if !loaded}
  <div class="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
  </div>

  {:else}

<div class="container" style="min-height: 200px;">
  <div class="row" style="height: 100%;">
    <div class="col-6 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <img class="img-fluid rounded-circle shadow-lg" style="max-width: 200px;" src={summaryObj.userimg} alt="Face">
        </div>
        <div class="row">
          <span class="fs-3 text-center">{summaryObj.username}</span>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="container h-100">
        <div class="row h-25">
            <i class="fa fa-tasks fs-3" aria-hidden="true"></i> {summaryObj.usertask.tasks}/{summaryObj.usertask.total}
        </div>
        <div class="row h-25">
            <i class="fa fa-money fs-3" aria-hidden="true"></i>  {summaryObj.usercredits.credits}/{summaryObj.usercredits.total}
        </div>
        <div class="row h-25">
            <i class="fa fa-trophy fs-3" aria-hidden="true"></i> {summaryObj.userreps.reps}/{summaryObj.userreps.total}
        </div>
      </div>
    </div>
  </div>
</div>

{/if}
