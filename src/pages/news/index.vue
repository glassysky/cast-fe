<style lang="less">
@import "./index.less";
</style>

<template lang="html">
  <div class="news_container">
    <div class="news_article_container">
      <div class="news_list">
        <div class="list_head">
          <h2>新闻列表</h2>
        </div>
        <div class="list_body">
          <ul>
            <li v-for="news in newsList">
              {{ news.news_title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Request from '../../utils/request';
import {
  setNewsList,
  setNewsTotal,
} from '../../vuex/news/action';
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {
    this.getNewsList();
  },
  attached() {},
  methods: {
    getNewsList(page) {
      Request.get({
        url: '/news/list',
        data: {
          page: page || 1,
        },
      }).then((res) => {
        if (res.code === 1) {
          this.setNewsList(res.result.list);
          this.setNewsTotal(res.result.count);
        }
      }).catch(() => {});
    },
  },
  components: {},
  vuex: {
    actions: {
      setNewsList,
      setNewsTotal,
    },
    getters: {
      newsList: state => state.news.newsList,
      newsTotal: state => state.news.newsTotal,
    },
  },
};
</script>
