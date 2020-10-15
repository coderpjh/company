<template>
    <div class="newscardcontainer">
        <div class="content"><slot name="content"></slot></div>
        <div class="time"><slot name="time"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'newscard'
}
</script>

<style lang="less">
    @import './newscard.less';
</style>
