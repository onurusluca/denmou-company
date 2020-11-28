<template>
  <div id="mobile-nav">
    <div
      :class="{ 'hide-ham-btn': !showOnScroll }"
      class="hamburger-btn"
      @click="openHam = !openHam"
    >
      <div class="ham-lines" :class="{ change: openHam }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <transition name="translateX">
        <div v-click-outside="hide" class="ham-menu" v-show="openHam">
          <ul class="mobile-nav-list">
            <li class="nav-element">
              <a href="#why">どうして</a>
              <img src="~/assets/images/question.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="#how">過程</a>
              <img src="~/assets/images/process.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="#whousesit">事業</a>
              <img src="~/assets/images/support.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="#pricing">価格設定</a>
              <img src="~/assets/images/yen.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="">お客様の声</a>
              <img src="~/assets/images/users.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="">お問い合わせ</a>
              <img src="~/assets/images/customer.svg" alt="" />
            </li>
            <li class="nav-element">
              <a href="">ログイン</a>
              <img src="~/assets/images/login.svg" alt="" />
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      openHam: false,
    };
  },

  methods: {
    hide() {
      this.openHam = false;
    },
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>


<style lang="scss" scoped>
#mobile-nav {
  position: fixed;
  right: 5vh;
  bottom: 5vh;
  display: none;
  z-index: 99;
  .hamburger-btn {
    display: inline-block;
    cursor: pointer;
    z-index: 99;
    background: $text-color;
    padding: 0.5vh 1vh;
    border-radius: 1vh;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    border-radius: 4vh;
    background-color: white;
    margin: 0.8vh 0;
    transition: 0.2s;
  }
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(44deg) translate(-8px, -7px);
  }
  .ham-menu {
    position: fixed;
    right: 2vh;
    bottom: 16vh;
    display: block;
    background: $p-color;
    appearance: none;
    width: 23vh;
    height: max-content;
    z-index: 99;
    border-radius: 1vh;
    box-shadow: 2px 12px 14px 0px rgba(125, 124, 124, 0.75);
    transform: translateX(0%);
    transition: transform 0.6s ease(out-cubic);
    ul {
      text-align: center;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0vh;
    
      li {
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        align-items: center;
        border-bottom: 1px solid white;
        width: 100%;
        padding: 1.4vh;
        &:last-child {
          border-bottom: none;
        }
        a {
          font-size: 2.2vh;
          font-weight: bold;
          color: rgb(255, 255, 255);
          text-shadow: 2px 2px 4px #000;
        }
          img {
        height: 3vh;
        margin-left: 1vh;
      }
      }
    }
  }
  .translateX-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.4s ease;
  }

  .translateX-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
  .hide-ham-btn {
    display: none;
  }

  @media #{$xs-mobile, $s-tablets, $ls-tablets, $sm-tablets} {
    display: inline;
  }
}
</style>