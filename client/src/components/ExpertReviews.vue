<template>
  <div>
    <div class="container">
      <div class="card expert_reviews">
        <div class="card-header">
          <div class="person_img_wrap" style="background-image: url(/profile/images/f119fee3e59bd1661ebf865b0cc51ae7.png);"></div>
          <div class="person_name">
            Cheburah Miu-Yong
            <star-rating :increment="1" :fixed-points="0" :read-only="false" :star-size="24" :border-width="1" border-color="#429eae" inactive-color="#fff" active-color="#429eae" :max-rating="5" v-model="temp" :show-rating="false"></star-rating>
          </div>
          <div class="person_statistics">
            <span class="active">6 reviews</span>
            <span>150 feedbacks</span>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item review">
              <div class="review_target">
                <img src="https://cdn.coinranking.com/H1YjiSd_-/eos.svg">
                <h6>EOS (EOS)</h6>
                <span>3 mounth ago</span>
                <br>
                <span>feedbacks rating</span>
                <star-rating :increment="1" :fixed-points="0" :read-only="false" :star-size="14" :border-width="1" border-color="#429eae" inactive-color="#fff" active-color="#429eae" :max-rating="5" v-model="temp" :show-rating="false"></star-rating>
                <span>based on</span>
                <a href="#" class="card-link">148 feedbacks</a>
              </div>
              <div class="review_content">
                <h6>Review</h6>
                <p>Idea is cool. The site does not contain information about the team. You have to guess yourself. Don't understand the relationship between token and Block.one</p>
              </div>
              <div class="review_ratings">
                <h6>Review rating</h6>
                <ul>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>idea</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_10.svg">
                    <p>team</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>busmodel</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_5.svg">
                    <p>market</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_2.svg">
                    <p>tech</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_7.svg">
                    <p>code</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_0.svg">
                    <p>legal</p>
                  </li>
                </ul>
                <p>average rating <span>6</span></p>
              </div>
            </li>
            <li class="list-group-item review">
              <div class="review_target">
                <img src="/base/upload/7cb19c9b5674edee2ddc622a40b62e75.png">
                <h6>AKASHA (AETH)</h6>
                <span>3 mounth ago</span>
                <br>
                <span>feedbacks rating</span>
                <star-rating :increment="1" :fixed-points="0" :read-only="false" :star-size="14" :border-width="1" border-color="#429eae" inactive-color="#fff" active-color="#429eae" :max-rating="5" v-model="temp" :show-rating="false"></star-rating>
                <span>based on</span>
                <a href="#" class="card-link">148 feedbacks</a>
              </div>
              <div class="review_content">
                <h6>Review</h6>
                <p>A very promising project: great team, idea isn't new but this is a technology which is needed: lower transaction costs, embedded security and data protection. Code is growing every day. 3rd release Dawn 3.0 is on the way. The only question is legal issues connected with token issue process and reality of gathered amounts.</p>
              </div>
              <div class="review_ratings">
                <h6>Review rating</h6>
                <ul>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>idea</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_10.svg">
                    <p>team</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>busmodel</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_5.svg">
                    <p>market</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_2.svg">
                    <p>tech</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_7.svg">
                    <p>code</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_0.svg">
                    <p>legal</p>
                  </li>
                </ul>
                <p>average rating <span>6</span></p>
              </div>
            </li>
            <li class="list-group-item review">
              <div class="review_target">
                <img src="/base/upload/15abfcda40795d1516b00e2a6c45d45a.png">
                <h6>0x (ZRX)</h6>
                <span>3 mounth ago</span>
                <br>
                <span>feedbacks rating</span>
                <star-rating :increment="1" :fixed-points="0" :read-only="false" :star-size="14" :border-width="1" border-color="#429eae" inactive-color="#fff" active-color="#429eae" :max-rating="5" v-model="temp" :show-rating="false"></star-rating>
                <span>based on</span>
                <a href="#" class="card-link">148 feedbacks</a>
              </div>
              <div class="review_content">
                <h6>Review</h6>
                <p>EOS is positioned as Ethereum killer with 100k of transactions per second. The promises seem quite realistic because of strong team and Dan Larimer as tech lead. It will be a strong player in the blockchain field.</p>
              </div>
              <div class="review_ratings">
                <h6>Review rating</h6>
                <ul>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>idea</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_10.svg">
                    <p>team</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_1.svg">
                    <p>busmodel</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_5.svg">
                    <p>market</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_2.svg">
                    <p>tech</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_7.svg">
                    <p>code</p>
                  </li>
                  <li>
                    <img src="/widgets/expert-opinions/img/mark_0.svg">
                    <p>legal</p>
                  </li>
                </ul>
                <p>average rating: 6</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'reviews',
  data: () => ({
    temp: 3,
  }),
  components: {
    StarRating
  },
  mounted: function() {
  }
}
</script>

<style lang="sass" scoped>
.expert_reviews
  margin-bottom: 30px
  .card-header
    padding-right: 100px
    padding-left: 34px
    .person_name
      display: inline-block
      vertical-align: middle
      font-size: 20px
      font-weight: 700
    .person_img_wrap
      display: inline-block
      vertical-align: middle
      width: 60px
      height: 60px
      border-radius: 100%
      overflow: hidden
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      margin-right: 24px
    .person_statistics
      position: absolute
      right: 30px
      top: 35px
      span
        color: #ccc
        font-size: 16px
        line-height: 18px
        display: inline-block
        border: 1px solid transparent
        cursor: pointer
        padding: 4px 8px
        &:hover, &.active
          color: #429eae
        &.active
          border: 1px solid #429eae
  .card-body
    padding: 0
    .card-title
      margin: 20px 0 20px
  .review
    transition: border .2s
    display: table
    &:hover
      cursor: pointer
    .review_target
      display: table-cell
      vertical-align: top
      margin-right: 10px
      text-align: center
      width: 70px
      h6
        color: #ccc
        font-size: 14px
      img
        width: 60px
        margin-bottom: 6px
      span
        font-size: 10px
        line-height: 10px
        color: #ccc
        display: block
      a
        font-size: 10px
        line-height: 14px
        display: block
    .review_content
      display: table-cell
      vertical-align: top
      padding-left: 14px
      padding-right: 14px
      h6
        color: #ccc
        font-size: 14px

    .review_ratings
      display: table-cell
      vertical-align: top
      width: 114px
      text-align: right
      h6
        color: #ccc
        font-size: 14px
        text-align: center
      > p
        font-size: 10px
        line-height: 12px
        color: #ccc
        text-align: center
        margin: 0
      ul
        margin: 0
        margin-bottom: 8px
        padding: 0
        list-style: none
        li
          display: inline-block
          vertical-align: top
          text-align: center
          width: 48px
          margin: 0px 3px
          img
            width: 44px
          p
            font-size: 10px
            line-height: 10px
            margin-bottom: 5px

</style>