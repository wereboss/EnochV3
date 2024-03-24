<script>
  export let task = {};
</script>

<div class="container">
  <div class="row">
    <div class="col-6">
      <div class="container">
       <div class="row g-2 align-items-center">
         <div class="col-auto">
           <label for="taskinput" class="col-form-label form-control-sm">Task:</label>
         </div>
         <div class="col-auto">
           <input type="text" id="taskinput" class="form-control form-control-sm" aria-describedby="taskHelp" value={task.task}>
         </div>
       </div>
      </div>
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-auto">
           <label for="rateinput" class="col-form-label form-control-sm">Rate:</label>
          </div>
          <div class="col-auto">
           <input type="text" id="rateinput" class="form-control form-control-sm" value={task.rate} readonly>
          </div>
        </div>
      </div> 
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-auto">
           <label for="setbyinput" class="col-form-label form-control-sm">Set By:</label>
          </div>
          <div class="col-auto">
           <input type="text" id="setbyinput" class="form-control form-control-sm" value={task.setBy} readonly>
          </div>
        </div>
      </div> 
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-auto">
           <label for="setforinput" class="col-form-label form-control-sm">Set For:</label>
          </div>
          <div class="col-auto">
           <input type="text" id="setforinput" class="form-control form-control-sm" value={task.setFor} readonly>
          </div>
        </div>
      </div> 
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-auto">
           <label for="statusinput" class="col-form-label form-control-sm">Status:</label>
          </div>
          <div class="col-auto">
           <input type="text" id="statusinput" class="form-control form-control-sm" value={task.status} readonly>
          </div>
        </div>
      </div> 
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-auto">
           <label for="deadlineinput" class="col-form-label form-control-sm">Deadline:</label>
          </div>
          <div class="col-auto">
           <input type="text" id="deadlineinput" class="form-control form-control-sm" value={task.deadline} >
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
