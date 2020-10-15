<template>
    <div class="video">
        <video  controls id="myvideo" src="../../assets/images/home_images/三维空间.mp4"></video>
        <img  id="playbtn"  v-show="flag" src="../../assets/images/home_images/播放.png" @click="play" />
    </div>
</template>
<script>
export default {
    name: 'myVideo',
    data () {
        return {
            flag: true
        }
    },
    methods: {
        play () {
            var x = document.getElementById('myvideo')
            x.play()
            this.flag = false
            setTimeout(() => {
                this.flag = true
            }, 12000)
            // var x = setTimeout(this.btnappear, 2000)
        }
        // btnappear () {
        //     this.flag = true
        // }

    }
}
</script>
<style lang="less">
    @import './myVideo.less';
</style>
