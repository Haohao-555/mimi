<template>
    <div class="ali-play">
        <Loading v-if="loading"></Loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
import Loading from './../components/Loading' 
export default {
    name:'alipay',
    components: {
        Loading
    },
    data() {
        return {
            orderId: this.$route.query.orderId,
            content: '',
            loading: true,
        }
    },
    mounted() {
       this.paySumit() 
    },
    methods: {
        paySumit() {
            this.axios.post('/pay', {
                orderId:this.orderId,
                orderName: 'Vue高仿小米商场', //扫码支付时订单名称
                amount: 0.01, // 单位元
                payType: 1, // 1 支付宝 2微信
            }).then((res) => {
                this.content = res.content;
                // 定时器 1s后将后端表单显示
                setTimeout(() => {
                    document.forms[0].submit();
                    this.loading = false;
                },1000)
            })
        }
    },
}
</script>