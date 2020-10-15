<template>
    <div class="content_card">
        <img src="../../assets/images/解决方案.png" />
        <slot name="h6"></slot>
        <slot name="p"></slot>
    </div>
</template>

<script>
export default {
    name: 'contentCard'
}
</script>

<style lang="less">
    @import './contentCard.less';
</style>
