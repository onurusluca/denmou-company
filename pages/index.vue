<template>
  <div id="homepage">
    <Hero />
    <Why />
    <How />
    <WhoUses />
    <Pricing />
    <Slogan />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import How from "../components/How";
import Why from "../components/Why";
import Pricing from "../components/Pricing";
import Slogan from "../components/Slogan";
import WhoUses from "../components/WhoUses";

export default {
  components: {
    Hero,
    How,
    Why,
    Pricing,
    Slogan,
    WhoUses,
  },
};
</script>

<style lang="scss">

</style>
