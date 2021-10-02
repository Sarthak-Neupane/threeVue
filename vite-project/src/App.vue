<template>
<section>
  <h1>this is Vue + vite</h1>
  <Plane />
</section>
</template>

<script>
import Plane from './components/plane.vue'
export default {
  components:{
    Plane
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>