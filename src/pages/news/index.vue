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
              <a href="#">
                {{ news.news_title }}
              </a>
              <span class="time_pattern">
                {{ news.create_time.split(" ")[0] }}
              </span>
            </li>
          </ul>
        </div>
        <div class="list_divide">
          <ul>
            <li>
              <a href="#" class="page_btn left_btn">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </a>
            </li>
            <li v-for="n in pages">
              <a
                href="#"
                class="page_btn"
              >
                {{ n + 1 }}
              </a>
            </li>
            <li>
              <a href="#" class="page_btn right_btn">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
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
      pages: 0,
    };
  },
  computed: {},
  ready() {
    if (!this.newsList.length) {
      this.getNewsList();
    }
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
          this.calculatePage(res.result.count);
        }
      }).catch(() => {});
    },
    calculatePage(num) {
      this.pages = Math.ceil(num / 10);
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
