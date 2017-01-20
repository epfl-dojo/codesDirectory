<template>
  <div id="app">
    <img src="./assets/logo.png">

    <directory :codes="codes"></directory>
  </div>
</template>

<script>
import Directory from '/client/ui/components/Directory'

export default {
  name: 'app',
  data () {

      return {
          codes: require('/model').RepoLinks.find({}).fetch()
      }
  },
  meteor: {
    data: {
      count() {
        return Session.get('counter');
      },
      codes() {
        return require('/model').RepoLinks.find({}).fetch();
      }
    }
  },

//  meteor: {
//      subscribe: {
//          // This means that we Meteor.subscribe() to "allProjects",
//          // with no parameters.
//          allProjects: []
//      },
//      data: {
//          allProjects: {
//          }
//      }
//  },
  mounted () {
    let that = this
//    axios.get('/api')
//    .then(function (response) {
//      console.log(response)
//      that.codes = response.data.codes
//    })
//    .catch(function (error) {
//      console.log(error)
//    })
  },
  components: {
    Directory
  }
}
</script>

<style>
</style>
