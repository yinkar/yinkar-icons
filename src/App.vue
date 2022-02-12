<script setup>
import Icons from './components/Icons.vue';
import './style.styl';
</script>

<template lang="pug">
div#container
  h1.font-medium.leading-tight.text-4xl.mt-8.text-slate-200 Yinkar Icons
  Icons
</template>

<style lang="stylus">
@import url('@fontsource/open-sans')

body
  font-family 'Open Sans', sans-serif

#container
  text-align center
</style>
