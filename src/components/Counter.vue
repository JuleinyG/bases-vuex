<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access:  {{ $store.state.counter.count }}</h2>
  <h2>Computed:  {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Randoms</button>


  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lasMutation: {{ lasMutation }}</h2>

  <h3>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h3>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

    // computed: mapState(['count'])
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter',['count', 'lasMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lasMutation: state => state.lasMutation
        // })
        
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
            // this.randomInt
        },
        ...mapActions('counter',['incrementRandomInt'])
        // ...mapActions('counter',{
        //     randomInt: 'incrementRandomInt'
        // })
    }
}
</script>

<style>

</style>