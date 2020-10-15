<template>
    <div class="ycardcontainer" @click="detail">
        <slot name="topic"></slot>
        <slot name="time"></slot>
        <slot name="content"></slot>
        <img :src="myurl" />
</div>
</template>

<script>
export default {
    name: 'readcard',
    props: ['url', 'id'],
    methods: {
        detail () {
            switch (this.id) {
            case 'flag': {
                this.$router.push('/news/newsdetail')
                break
            }
            default:break
            }
        }
    },
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
    @import './readcard.less';
</style>
