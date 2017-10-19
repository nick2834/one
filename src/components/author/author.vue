<template>
  <transition name="fade" >
    <div class="readcontent">
      <mt-header title="作者详情页" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="readback"></mt-button>
        </router-link>
      </mt-header>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        authorContent: '',
        readTitle: '',
        authors: ''
      }
    },
    methods: {
      readback () {
        this.$router.push({
          path: '/'
        })
      }
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' + this.$route.query.id + '?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((res) => {
        res = res.body
        this.authorContent = res.data
        console.log(res)
      })
    }
  }
</script>

<style scoped>
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
