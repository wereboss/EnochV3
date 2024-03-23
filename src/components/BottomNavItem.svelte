<script>
	import { createEventDispatcher } from 'svelte';
  export let faIconName = 'tasks';
  export let butText = 'Tasks';
  export let pageName = '';
	const dispatch = createEventDispatcher();

  function onBClick(pName) {
    console.log("onBClick:" + pName);
    dispatch('buttonClick', {
			pName: pName 
		});
  }
</script>

<button type="button" class="btn btn-secondary" on:click={() => onBClick(pageName)}>
  <div class="container">
    <div class="row">
      <i class="fa fa-{faIconName} fs-1" aria-hidden="true"></i>
    </div>
    <div class="row">
      <span class="fs-6">{butText}</span>
    </div>
  </div>
</button>
