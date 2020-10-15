<template>
    <div class="content">
        <div class="circle"><img :src="geturl" /></div>
        <slot name="h6"></slot>
        <slot name="p"></slot>
    </div>
</template>

<script>
export default {
    name: 'iconCard',
    props: {
        url: String
    },
    // data () {
    //     return {
    //         myurl
    //     }
    // },
    computed: {
        geturl () {
            var myurl = require('../../assets/images/solution_icons/' + this.url)
            return myurl
        }
    }
    // created () {
    //     this.myurl = require('../../assets/images/solution_icons/' + this.url)
    // }
}
</script>

<style lang="less">
    @import './iconCard';
</style>
