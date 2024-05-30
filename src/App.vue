<script setup>
  import { ref } from 'vue';
  import CardItemsList from './components/CardItemsList.vue';

  const cardItemsList = ref([])
  let totalPrice = ref(0)

  function addItem(Object) {
    const alreadyInList = cardItemsList.value.find((item) => {
      return item.id == Object.id
    })
    if (alreadyInList != undefined) {
      alreadyInList.quantity += 1
    } else {
      Object.quantity = 1
      cardItemsList.value.push(Object)
    }
    updateTotalPrice()
  }

  function removeItem(id) {
    cardItemsList.value = cardItemsList.value.filter(item => item.id !== id)
    updateTotalPrice()
  }

  function updateTotalPrice() {
    totalPrice.value = cardItemsList.value.reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
  }
</script>

<template>
  <h1>App component</h1>
  
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  
  <div class="container">
    <div class="row">
      <div class="col">
        <RouterView @add-item="addItem" />
      </div>
      <div class="col">
        <CardItemsList @update-price="updateTotalPrice" @remove-item="removeItem" title="List items card" :list="cardItemsList" :total="totalPrice"></CardItemsList>
      </div>
    </div>
  </div>

</template>

<style scoped>
.row {
  display: flex;
}
.col:nth-child(1){
  flex: 4;
}
.col:nth-child(2){
  flex: 1;
}
</style>