<script>
  import BottomNavItem from './BottomNavItem.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  function navItemClick(event) {
    console.log("navItemClick:" + event.detail.pName);

    dispatch('pageClick', {
			pageName: event.detail.pName 
		});
  }

</script>
<ul class="nav nav-pills nav-fill fixed-bottom bg-body-secondary">
  <li class="nav-item">
    <BottomNavItem on:buttonClick={navItemClick} faIconName="home" butText="Home" pageName="Home" />
  </li>
  <li class="nav-item">
    <BottomNavItem on:buttonClick={navItemClick} faIconName="tasks" butText="Tasks" pageName="Tasks" />
  </li>
  <li class="nav-item">
    <BottomNavItem on:buttonClick={navItemClick} faIconName="money" butText="Credits" pageName="Credits"/>
  </li>
  <li class="nav-item">
    <BottomNavItem faIconName="magic" butText="Wishlist" pageName="WishList"/>
  </li>
  <li class="nav-item">
    <BottomNavItem faIconName="th-large" butText="More" pageName="More"/>
  </li>
</ul>


