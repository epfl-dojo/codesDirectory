<template>
  <div class="code">
    <h2>{{code.title}}</h2>
    <div><i class="icon" :class="visibility"></i>{{code.repoUri}}</div>
    <div><a :href="mailto">{{code.contact}}</a> | {{code.unitOwner}}</div>
    <div>
      <ul>
        <li v-for="tag in code.tags" @click="setTag(tag)">{{tag}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['code'],
    methods: {
      setTag(tag) {
        this.$parent.filter = tag
      }
    },
    computed: {
      mailto () {
        return `mailto:${this.code.contact}`
      },
      visibility () {
        return this.code.visibility === 'public' ? 'unhide' : 'hide'
      }
    }
  }
</script>
<style>
  .code {
  border: 1px solid #ffaaaa;
  width: 45%;
  float: left;
  display: block;
  margin: 10px;
  }
</style>
