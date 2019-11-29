import Vue from 'vue';

//Plugins Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import axios from 'axios';
Vue.use(axios);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

//Componentes Vue
import VueProgressBar from 'vue-progressbar';

const options = {
  color: '#0984e3',
  failedColor: '#d63031',
  thickness: '5px',
  transition: {
    speed: '0.5s',
    opacity: '0.6s',
    termination: 500
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
  position:'fixed',
  autoFinish:true
}

Vue.use(VueProgressBar, options);



//mixin app

Vue.mixin({
  data: function() {
      return {
          url:'https://ginger-fw.herokuapp.com/',
      }
  },
  created: function() {},
  mounted:function(){ },
  methods:{},
})//end mixin


//Componentes app

import hello_world from './js/components/HelloWorld.vue';
import float_social from './js/components/FloatSocial.vue';
import contact from './js/components/Contact.vue';


new Vue({
  el:'#app',
  components:{
    hello_world,
    float_social,
    contact
  },
  data:{
    mensaje: 'Hola Vue!'
  },
  methods:{
    
  },
  mounted(){
    this.$Progress.finish()
    //this.$bvModal.show('modal-1')
  },
  created(){
    this.$Progress.start()
  },
  
})



import "./scss/styles.scss";

import LazyLoad from "vanilla-lazyload";
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});
 

