<template>
    <div class="order-list">
      <order-header title="订单列表">
         <template v-slot:tip>
            <span>请认真填写地址</span>
         </template>
       </order-header>
    </div>
</template>
<script>
import orderHeader from "./../components/OrderHeader";
export default {
    name:'order-list',
    components: {
      orderHeader,
  },
}
</script>