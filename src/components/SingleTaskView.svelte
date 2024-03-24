<script>
  export let task = {};
</script>

<div class="container">
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label for="taskinput" class="col-form-label">Task:</label>
    </div>
    <div class="col-auto">
      <input type="text" id="taskinput" class="form-control" aria-describedby="taskHelp" value={task.task}>
    </div>
    <div class="col-auto">
      <span id="textHelp" class="form-text">
        Max 40 characters long.
      </span>
    </div>
  </div>
</div>
