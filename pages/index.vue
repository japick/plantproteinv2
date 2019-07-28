<template>
  <div>
    <div class="container">
      <span>Plants got protein.</span>
    </div>
    <div class="container">
      <p class="lede">Contrary to popular myth, plant proteins contain all 9 essential amino acids, making them 	&ldquo;complete&rdquo; proteins.</p>
    </div>
    <div v-for="(group, index) in groups" :key="group+index" class="container">
      <span class="grid__heading">{{ group.name }}</span>
      <section class="[ grid grid--large ]">
        <div v-for="(food, index) in group.foods" :key="food+index" class="grid__item">
          <h3>{{food.name}}</h3>
          <span class="amount">{{food.protein}}g <span>/ 100g</span></span>
          <button class="btn" @click="openPanel"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" fill="#0b6936"/></svg></button>

          <!-- test -->
          <!-- <ul v-for="(val, index) in food.profile" :key="val+index">
            <li>{{val}}</li>
          </ul> -->

        </div>
      </section>
    </div>
    <Panel />
    <footer class="container">
      <p>Built by <a href="https://github.com/japick" target="_blank">Jay Pick</a> using CSS Grid. Hosted on Github.</p>
    </footer>
  </div>
</template>

<script>
import { beansLegumesCollection, nutsSeedsGrainsCollection, greensCollection } from '~/plugins/firebase.js'
import Panel from '~/components/Panel.vue'

export default {
  components: {
    Panel
  },
  async asyncData({app, params, error}) {
    let arr1 = []
    let arr2 = []
    await beansLegumesCollection.collection('foods').orderBy("protein", "desc").get().then(snapshot => {
      snapshot.forEach(doc => {
        arr1.push(doc.data())
      })
    })
    await nutsSeedsGrainsCollection.collection('foods').orderBy("protein", "desc").get().then(snapshot => {
      snapshot.forEach(doc => {
        arr2.push(doc.data())
      })
    })
    return {
      groups: [
        {
          name: 'Beans & legumes',
          foods: arr1
        },
        {
          name: 'Nuts, seeds & grains',
          foods: arr2
        }
      ]
    }
  },
  methods: {
    openPanel() {
      this.$bus.$emit('openPanel', true)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');

* {
	margin: 0;
	padding: 0;
}

*:focus {
	outline: none;
}

html {
	font-smoothing: antialiased;
   	-webkit-font-smoothing: antialiased;
}

body {
	font-family: 'Work Sans', sans-serif;
	color: #0b6936;
	background-color: #00CC66;
	font-weight: 400;
}

h3, .h3 {
	font-weight: 400;
	font-size: 2.4rem;
	letter-spacing: -.1rem;
	margin: 0 0 5px;
	line-height: 1;
	text-shadow: 2px 2px 0px #0a8f46;
}

a {
	color: #0b6936;
}

/* grid */

.container {
	position: relative;
	clear: both;
	border-bottom: 1px solid #0ca551;
	padding: 20px;
}

.grid {
	display: grid;
	grid-column-gap: 10px;
    grid-row-gap: 10px;
}

.grid--large {
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-flow: column;
	grid-auto-flow: dense;
}

.grid--small {
	grid-template-columns: repeat(5, 1fr);
  	grid-template-rows: 20%;
}

.grid__heading {
	display: block;
	margin-bottom: 20px;
}

.grid__item {
	background-color: #fff;
	border-radius: 6px;
	padding: 15px;
	display: inline-block;
	background-color: #0ca551;
	overflow: hidden;
	position: relative;
	transform: scale(1);
	transition: transform .2s ease-in-out;
	color: #fff;
}

.btn {
  display: block;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: 0;
  box-shadow: 0px 2px 0px #0a8f46;
  cursor: pointer;
  line-height: 1;
}

.btn:active {
  box-shadow: none;
  bottom: 14px;
}

.amount {
	font-size: 1.6rem;
	text-shadow: 2px 2px 0px #0a8f46;
}

.amount span {
	color: #0b6936;
	text-shadow: none;
}

footer.container {
	border-bottom: 0;
}

.lede {
	font-size: 3.8rem;
	letter-spacing: -.03em;
	line-height: 1.1;
	margin-bottom: 10px;
}

.lede span {
	display: inline-block;
}

.lede span:before,
.lede span:after {
	display: inline-block;
}

.lede span:before {
	content: open-quote;
}

.lede span:after {
	content: close-quote;
}

/* responsive */

@media only screen and (max-width: 768px) {
	.lede {
		font-size: 3rem;
		line-height: 1;
	}
}

@media only screen and (max-width: 530px) {
	.container {
		padding: 10px;
	}

	.grid__heading {
		display: block;
		margin-bottom: 10px;
	}
}
</style>
