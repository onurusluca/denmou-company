<template>
  <div id="hero">
    <div class="text">
      <img id="hero-img" src="../assets/images/hero-img.png" alt="" />
      <h1>あなたの ビジネスを デジタルの 世界に お連れします。</h1>
      <h2>
        人の目を引く、唯一のウェブサイトと ソーシャルメディアを 作りましょう。
      </h2>
      <button>
        今すぐ始める
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 492.004 492.004"
          style="enable-background: new 0 0 492.004 492.004"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </button>
    </div>
    <img src="../assets/images/hero.png" alt="ホームページヒーローイメージ" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#hero {
  padding-top: 20vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: $b-color;

  .text {
    width: 60%;
    margin: 0 auto;
    #hero-img {
      display: none;
      width: 60vh;
      margin: 0 auto;
    }
    h1 {
      font-family: $p-font;
      color: $text-color;
      font-size: 6vh;
      line-height: 8vh;
      margin-bottom: 4vh;
      word-break: keep-all;
    }
    h2 {
      color: #63605f;
      font-size: 3vh;
      margin-bottom: 5vh;
      word-break: keep-all;
    }
    button {
      border: none;
      background: $p-color;
      padding: 2.2vh 3.5vh;
      border-radius: 1vh;
      font-size: 2.5vh;
      font-weight: 600;
      font-family: $s-font;
      color: white;
      cursor: pointer;
      margin-bottom: 8vh;
      transition: all 200ms;
      svg {
        width: 2vh;
        fill: white;
        transition: all 200ms;
      }
      &:hover {
        background-color: green;
        transform: translate(0, 5px);
        svg {
          transform: translate(5px, 0);
        }
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  @media #{$m-laptop} {
    .text {
      width: 75%;
      h1 {
        font-size: 5vw;
        line-height: 6vw;
      }
      h2 {
        font-size: 3vh;
      }
    }
  }
  @media #{ $ls-tablets, $sm-tablets} {
    .text {
      width: 85%;
      h1 {
        font-size: 5vw;
        line-height: 6vw;
      }
      h2 {
        font-size: 3vh;
      }
    }
  }
  @media #{$s-tablets, $ls-tablets, $sm-tablets} {
    .text {
      width: 85%;
      #hero-img {
        display: block;
        width: 40vh;
      }
      h1 {
        font-size: 5vw;
        line-height: 6vw;
      }
      h2 {
        font-size: 3vw;
      }
    }
  }

  @media #{$xs-mobile} {
    .text {
      width: 95%;
      #hero-img {
        display: block;
        width: 90%;
      }
      h1 {
        font-size: 3.5vh;
        line-height: 5vh;
      }
      h2 {
        font-size: 2.2vh;
      }
      button {
        padding: 1.8vh 2.5vh;
      }
    }
  }
}
</style>