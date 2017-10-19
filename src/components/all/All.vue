<template>
  <transition name="fade">
    <div class="all">
      <mt-header fixed title="" class="all_header"></mt-header>
      <div class="swipe-wrapper">
        <mt-swipe ref="swipeWrapper" @change="handleChange">
          <mt-swipe-item class="swip-item-1 item">
            <img src="../../../static/images/all_fill.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item class="swip-item-2 item">
            <img src="../../../static/images/all_line.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item class="swip-item-3 item">
            <img src="../../../static/images/one_is_all.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div v-for="(item,index) in readcontent" link @click="go(item.item_id)" class="read-item">
        <div class="read-content">
          <span v-if="item.tag_list[0]" class="title">-<span style="padding: 0 5px">{{item.tag_list[0].title}}</span>-</span>
          <span v-else="item.tag_list[0]" class="title">-<span style="padding: 0 5px">阅读</span>-</span>
          <h1 class="titleitem">{{item.title}}</h1>
          <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{item.author.user_name}}</span>
          <img class="image" :src="item.img_url" width="100%">
          <p class="forward">{{item.forward}}</p>
          <span class="time">{{item.post_date.split(' ')[0]}}</span>
          <div class="lovecount">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <span>{{item.like_count}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import readcontent from '../readcontent/readcontent.vue'
export default {
  name: 'all',
  data () {
    return {
      readcontent: ''
    }
  },
  components: {
    readcontent
  },
  methods: {
    handleChange (index) {
//      console.log(index)
    },
    go (id) {
      this.$router.push({
        path: 'readcontent',
        query: {
          id: id
        }
      })
    }
  },
  created () {
    this.$http.get('http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
      response = response.body
      this.readcontent = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .all_header{
    border-bottom: 1px solid #a5a5a5;
  }
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
  .page-tabbar{
    margin-top: 40px;
  }
  .mint-header{
    background: #fff url("one_is_all.png") no-repeat;
    background-position: center;
    background-size: 30%;
  }
  .read-item{
    margin-bottom: 20px;
  }
  .read-content{
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .titleitem, .author, .forward{
    text-align: left
  }
  .title{
    font-size: 12px;
    color: #9e9c9c
  }
   .titleitem{
     margin-top: 18px;
     font-size: 14px;
     line-height: 28px;
      color: #5d5a5a;
     text-align: center;
   }
   .author{
     display: block;
     margin-top: 14px;
     font-size: 12px;
     color: #9e9c9c;
     text-align: center;
   }
  .image{
    margin: 15px 0;
  }
  .forward{
    font-size: 12px;
    line-height: 28px;
    color: #9e9c9c;
    padding: 0 10px;
  }
  .time{
    float: left;
    margin-top: 20px;
    font-size: 12px;
    color: #9e9c9c;
    margin-left: 10px;
  }
  .lovecount{
    float: right;
    margin-top: 20px;
    font-size: 12px;
    color: #9e9c9c;
    margin-right: 10px;
  }
</style>
