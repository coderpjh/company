<template>
    <div class="cardcontainer">
        <slot name="topic"></slot>
        <slot name="time"></slot>
        <slot name="content"></slot>
        <img :src="myurl" />
</div>
</template>

<script>
export default {
    name: 'middleCard',
    props: ['url'],
    data () {
        return {
            myurl: ''
        }
    },
    mounted () {
        this.myurl = require('../../assets/images/home_images/' + this.url)
    }
}
</script>

<style lang="less">
    @import './middle_card.less';
</style>
