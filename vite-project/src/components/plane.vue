<template>
  <div class="container"></div>
</template>

<script>
import Sketch from '../ThreeJs/basic'
export default {
    mounted(){
        const sketch = new Sketch({
            dom: document.querySelector('.container')
        });
       
        sketch.addMesh();
        sketch.render();
    }
}
</script>

<style>

</style>