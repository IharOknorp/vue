<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
        <h3 @click="goToDetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home',
      products: [
        {
          productTitle: 'ABCN',
          image: require('../assets/images/product1.png'),
          productId: 1
        },
        {
          productTitle: 'KARMA',
          image: require('../assets/images/product2.png'),
          productId: 2
        },
        {
          productTitle: 'Tino',
          image: require('../assets/images/product3.png'),
          productId: 3
        },
        {
          productTitle: 'EFG',
          image: require('../assets/images/product4.png'),
          productId: 4
        },
        {
          productTitle: 'MLI',
          image: require('../assets/images/product5.png'),
          productId: 5
        },
        {
          productTitle: 'Banans',
          image: require('../assets/images/product6.png'),
          productId: 6
        }
      ]
    }
  },
  methods: {
    goToDetail (prodId) {
      let proId = prodId
      this.$router.push({name: 'Details', params: {Pid: proId}})
    }
  }
}
</script>
<style scoped>
</style>
