
<script>
  //import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import mockData from '../assets/mocktasks.json';
  import SingleTaskView from './SingleTaskView.svelte';
  import { onMount } from 'svelte';
  export let singleTaskModal;
  const production = false;
  let taskItems = [];
  let loaded = false;
  let selectedTask = {task:"dummy"};
//  let errorMessage = "No connection. Check your internet";


  function succTasks(tasksJSON) {
    //console.log("succTasks:" + tasksJSON);
    taskItems = JSON.parse(tasksJSON); 
    if(taskItems && taskItems.length>0) {
      loaded = true;
    } else {
      console.log("succTasks: null returned");
      loaded = false;
    }
  }
  onMount(() => {
    console.log("TasksTable: OnMount");
    singleTaskModal = new bootstrap.Modal('#singletask', {focus:true,keyboard:true});
    console.log("About to call Google");
    if(production) {
      google.script.run
      .withSuccessHandler(succTasks)
      .getTasks();
   }
  });
    if(!production) {
      taskItems = mockData;
      loaded = true;
    }

    function rowClick(obj) {
      console.log(JSON.stringify(obj));
    }

    function viewTask(obj) {
     // console.log(JSON.stringify(obj));
     selectedTask = obj;
      singleTaskModal.show(); 
    }
  
</script> 


<!-- Single Task Modal -->
<div class="modal modal-xl" id="singletask" tabindex="-1">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Task Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-secondary-subtle">
        <SingleTaskView task={selectedTask}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Tasks Table -->
<div class="container">
  <div class="fs-1">
    Tasks Table
  </div>
  {#if !loaded}
  <div class="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
  </div>

  {:else}

  <table class="table table-striped table-hover mb-5">
  <caption>List of tasks</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Set By</th>
      <th scope="col">Set For</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {#each taskItems as task (task.id)}
      <tr >
        <th scope="row" >
          <button type="button" class="btn btn-outline-info btn-sm" on:click={() => viewTask(task)}>
              <i class="fa fa-info-circle fs-5" aria-hidden="true"></i>
          </button>
        </th>
        <td>{task.task}</td>
        <td>{task.setBy}</td>
        <td>{task.setFor}</td>
        <th scope="row" >
          <button type="button" class="btn btn-outline-info btn-sm" on:click={() => rowClick(task)}>
              <i class="fa fa-pencil-square-o fs-5" aria-hidden="true"></i>
          </button>
        </th>
      </tr>
    {/each}
  </tbody>
</table>

{/if}
</div>
