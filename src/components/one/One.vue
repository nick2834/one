<template>
  <transition name="fade">
    <div class="one">
      <div class="home-header">
        <span class="time">{{todays}}</span>
        <span class="weather"></span>
      </div>
      <div v-for="(item,index) in drawcontent" class="home-item" :data-title="item.maketime.split(' ')[0]" :data-id="index">
        <div class="home-draw">
          <span class="time" v-if="index !=0">{{item.maketime.split(' ')[0]}}</span>
          <span class="vol">{{item.hp_title}}</span>
          <img :src="item.hp_img_url" width="100%">
          <span class="title">{{item.hp_author}}</span>
          <span class="and">|</span>
          <span class="pic_info">{{item.image_authors}}</span>
        </div>
        <div class="home-word">
          <p class="forward">{{item.hp_content}}</p>
          <span class="word_info">{{item.text_authors}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const today = year + '-' + month + '-' + day
  const todays = year + '/' + month + '/' + day
  export default {
    data () {
      return {
        drawcontent: '',
        todays: '',
        scrolled: false
      }
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/hp/bymonth/' + today + '%2000:00:00?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios')
        .then((res) => {
          this.drawcontent = res.body.data
          this.todays = todays
        })
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.onScroll)
      })
    },
    methods: {
      onScroll () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    z-index: 99;
    background: #fff;
    color: #7e8c8d;
    font-family: cursive;
  }
  .home-header .title{
    font-size: 18px;
    padding: 0;
  }
  .home-header .time{
    padding: 0;
  }
  .home-item{
    margin-top: 44px;
  }
  .home-draw{
    position: relative;
    text-align: center;
  }
  .time{
    display: inline-block;
    padding-top: 30px;
    font-size: 23px;
    font-family: cursive;
    font-weight: 100;
    color: #5d5a5a;
  }
  .vol{
    display: block;
    padding: 10px;
    font-size: 12px;
    font-weight: 100;
    color: #9e9c9c;
  }
  .title, .and, .pic_info{
    display: inline-block;
    padding: 2px;
    color: #9e9c9c;
    font-size: 12px;
  }
  .home-word{
    width: 80%;
    margin: 20px auto;
    text-align: center;
  }
  .forward{
    font-size: 15px;
   line-height: 28px;
    color: #5d5a5a;
    text-align: left}
  .word_info{
    font-size: 12px;
    color: #9e9c9c;
    display: inline-block;
    margin-top: 20px
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
