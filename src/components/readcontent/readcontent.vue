<template>
  <transition name="fade" >
    <div class="readcontent">
      <mt-header :title="readTitle" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="readback"></mt-button>
        </router-link>
      </mt-header>
      <div class="readcontent-wrapper">
        <h1 class="title">{{readcontent.hp_title}}</h1>
        <span class="author"><span>文</span><span style="padding: 0 3px">/</span>{{readcontent.hp_author}}</span>
        <div class="content" v-html="readcontent.hp_content"></div>
        <div class="author_detail" link @click="goAuthor(authors.user_id)">
          <span class="and">作者</span>
          <img :src="authors.web_url">
          <span class="name">
            <span class="user_name">{{authors.user_name}}</span>
            <span class="wb_name">{{authors.wb_name}}</span>
          </span>
          <span class="desc">{{authors.summary}}</span>
        </div>
        <div class="essay_detail">
          <span class="and">评论列表</span>
          <ul class="essay_list">
            <li  v-for="(item,index) in essay">
              <p class="essay_container">
                <span>
                  <img :src="item.user.web_url" alt="web_url" class="essay_header">
                  <span class="essay_username">{{item.user.user_name}}</span>
                </span>
                <span class="essay_time">{{item.updated_at}}</span>
              </p>
              <p class="essay_content">{{item.content}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </transition>
</template>

<script type="text/ecmascript-6">
  import author from '../author/author.vue'
  export default{
    data () {
      return {
        readcontent: {},
        readTitle: '',
        authors: '',
        essay: ''
      }
    },
    components: {
      author
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' + this.$route.query.id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res) => {
        res = res.body
        this.readcontent = res.data
        this.authors = res.data.author[0]
        this.readTitle = res.data.hp_title
      })
      this.$http.get('http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/' + this.$route.query.id + '/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((res) => {
        res = res.body
        this.essay = res.data.data
        console.log(res.data.data)
      })
    },
    methods: {
      readback () {
        this.$router.push({
          path: '/'
        })
      },
      goAuthor (id) {
        this.$router.push({
          path: 'author',
          query: {
            id: id
          }
        })
      }
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
  .readcontent-wrapper{
    padding: 20px 15px;
    margin-top: 30px;
  }
  .readcontent-wrapper h1.title{
    font-size: 18px;
    line-height: 28px;
    color: black
  }

  .author{
    display: block;
    margin-top: 14px;
    font-size: 14px;
    color: #9e9c9c;
  }
  .content{
    margin-top: 25px;
    line-height: 30px;
    color: #444343;
  }
  img{
    width: 100%
  }
  .author_detail{
    margin: 25px 0;
    position: relative
  }

  .and{
    display: block;
    padding-left: 20px;
    color: #6b6a6a;
    padding-bottom: 10px;
  }

  img{
    width: 70px;
    height: 70px;
    margin-top: 20px;
    border-radius: 50%;
  }

  .name{
    display: inline-block;
    position: absolute;
    top: 50px;
    padding-left: 15px;
    padding-top: 10px;
    font-size: 14px;
    color: #797979;
  }
   .desc{
     position: absolute;
     top: 70px;
     padding-left: 15px;
     padding-top: 10px;
     font-size: 14px;
     color: #a7a5a5;
   }
  .essay_list li{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .essay_content{
    font-size: 12px;
    color: #666;
    padding-top: 10px;
    line-height: 30px;
  }
  .essay_header{
    width: 14px;
    height: 14px;
    margin-top: 0;
  }
  .essay_container{
    font-size: 12px;
    overflow: hidden;
  }
  .essay_username{
    color: #9e9c9c;
    margin-left: 10px;
  }
  .essay_time{float: right;color: #9e9c9c}
</style>
