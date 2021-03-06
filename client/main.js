// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

// Main app
import App from '/client/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
