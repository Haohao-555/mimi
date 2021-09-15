<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <!--遮罩层-->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <!-- 插槽 name = body -->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
           <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureType}}</a>
           <a href="javascript:;" class="btn-default" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureType}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  //接收参数
  props: {
    // 弹框类型 小small 中middle 大large 表单form
    modalType: {
      type: String,
      default: "form", //默认
    },
    //弹框标题
    title: String,
    //按钮类型 1确定 2取消 3确定 取消
    btnType: String,
    sureType: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    // 弹框是否显示
    showModal: Boolean,
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/Modal.scss';
</style>