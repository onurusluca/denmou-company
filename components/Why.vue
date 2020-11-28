<template>
  <div id="why"  data-aos="fade-up">
    <div class="why-img">
      <img src="../assets/images/usage-graph.png" alt="" />
    </div>
    <div class="text" >
      <h3>どうして？</h3>
      <h2>売り上げが増えます</h2>
      <p>
        日本人の８４％はインターネットを使っています。
        そこには多くの可能性があります。
        その可能性を自分のものにするためにDenmouは一番です。
        何千ものオンライン顧客にあなたのサービスを提供することができます。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

#why {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 15vh;
  height: max-content;
  margin: 0;
  height: max-content;

  .why-img {
    img {
      width: 60vh;
      height: auto;
      border-radius: 3vh;
      box-shadow: 2px 12px 14px 0px rgba(125, 124, 124, 0.75);
    }
  }
  .text {
    text-align: left;
    width: 60vh;
    h3 {
      font-size: 3.5vh;
      color: white;
      background-color: $text-color;
      width: max-content;
      height: auto;
      padding: 1vh;
    }
    h2 {
      color: $text-color;
      font-size: 5vh;
      margin: 0;
      font-weight: 700;
    }
    p {
      font-size: 2.3vh;
      line-height: 3vh;
      color: $text-color;
      font-weight: 400;
    }
  }
  @media #{ $ls-tablets, $sm-tablets} {
    padding: 10vh 0;

    .why-img {
      padding: 4vh;
    }
    .text {
      padding: 4vh;
    }
  }
  @media #{$s-tablets, $ls-tablets, $sm-tablets} {
    padding: 5vh 0;

    .why-img {
      padding: 4vh;

      img {
        width: 40vh;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 4vh;
      h3 {
        font-size: 2.5vh;
      }
      h2 {
        font-size: 4vh;
      }
      p {
        font-size: 2vh;
      }
    }
  }

  @media #{$s-tablets} {
    padding: 5vh 0;

    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
  @media #{$xs-mobile} {
    padding: 5vh 0;

    .why-img {
      padding: 2vh;

      img {
        width: 90%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 85%;
      h3 {
        font-size: 2.2vh;
      }
      h2 {
        font-size: 3.5vh;
      }
      p {
        font-size: 1.8vh;
      }
    }
  }
}
</style>