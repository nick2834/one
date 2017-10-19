<template>
  <section>
    <mt-header fixed title="固定在顶部" v-if="selected == 'ALL'" ></mt-header>
    <div class="page-tabbar" :class="{ 'class-b': selected == 'ALL', 'class-a': selected == 'ONE'||selected == 'ME' }">
      <div class="page-wrap">
        <!-- tabcontainer -->
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="ONE">
            <Vone></Vone>
          </mt-tab-container-item>
          <mt-tab-container-item id="ALL">
            <Vall></Vall>
          </mt-tab-container-item>
          <mt-tab-container-item id="ME">
            <Vme></Vme>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="ONE">
          <img slot="icon" v-if="selected !=='ONE'" src="../../static/images/one_line.png">
          <img slot="icon" v-if="selected =='ONE'" src="../../static/images/one_fill.png">
        </mt-tab-item>
        <mt-tab-item id="ALL">
          <img slot="icon" v-if="selected !=='ALL'"  src="../../static/images/all_line.png">
          <img slot="icon" v-if="selected =='ALL'"  src="../../static/images/all_fill.png">
        </mt-tab-item>
        <mt-tab-item id="ME">
          <img slot="icon" v-if="selected !=='ME'" src="../../static/images/me_line.png">
          <img slot="icon" v-if="selected =='ME'" src="../../static/images/me_fill.png">
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </section>

</template>

<script>
  import Vone from '../components/one/One'
  import Vall from '../components/all/All'
  import Vme from '../components/me/Me'
  export default {
    name: 'index',
    components: {
      Vone,
      Vall,
      Vme
    },
    data () {
      return {
        selected: 'ONE'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .class-a{
    margin-top: 0;
  }
  .class-b{
    margin-top: 40px;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .mint-tab-item-icon {
    width: 42px !important;
    height: 42px !important;
    margin: 0 auto !important;
  }
  .readcontent{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #ffffff;
    z-index:100
  }
  .readcontent.fade-enter-active, .readcontent.fade-leave-active{
    transition: all 0.2s linear;
    transform:translate3d(0, 0, 0);
  }

  .readcontent.fade-enter, .readcontent.fade-leave-active{
    opacity: 0;
    transform:translate3d(100%, 0, 0);
  }
  .mint-header{
    background: #fff;
    color: #333;
  }
  .mint-header a{
    color: #000;
  }
</style>
