<template>
  <transition name="fade">
    <div class="me">
      <div class="swipe-wrapper">
        <mt-swipe ref="swipeWrapper">
          <mt-swipe-item class="swip-item-1 item">1</mt-swipe-item>
          <mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
          <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swipe-wrapper{
    width: 100%;
    height: 200px;
  }
  .swip-item-1{
    background: #0089dc;
  }
  .swip-item-2{
    background: #ffd705;
  }
  .swip-item-3{
    background: #ff2d4b;
  }
  .item{
    text-align: center;
    font-size: 40px;
    color: white;
  }
</style>
