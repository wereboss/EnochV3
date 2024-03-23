<script>
 // import HeaderBar from "../components/HeaderBar.svelte";
 // import BottomNav from "../components/BottomNav.svelte";
  import TasksTable from "../components/TasksTable.svelte";
    import { onMount } from "svelte";

  onMount(() => {
    console.log("Tasks.svelte mounted");
  });
</script>


<TasksTable/>


