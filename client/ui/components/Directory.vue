<template>
<div>
  <h1>Directory!</h1>
  <input type="text" v-model="filter" @keyup.enter=updateComputed>
  <div class="directory">
    <code-item :code="code" class="codeItem" v-for="code in filteredCodes">{{code.repoUri}}</code-item>
  </div>
</div>
</template>

<script>
  import CodeItem from './CodeItem'
  export default {
    props: ['codes'],
    data () {
      return {
        filter: ''
      }
    },
    components: {
      CodeItem
    },
    computed: {
      filteredCodes () {
        console.log('this.filter is now ' + this.filter)
//        axios.get('/api').then(function (response) {
//          console.log(response)
//          that.codes = response.data.codes
//        })
//        .catch(function (error) {
//          console.log(error)
//        })
//        return Promise();
      }
    }
  }
</script>
