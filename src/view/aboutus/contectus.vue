<template>
    <div class="outcontainer">
        <div class="title">
            联系我们
        </div><br class="clear"/>
        <div class="innercontainer" id="innercontainer">
            <div class="mapform">
                <i class="topiconfont">&#xe6ca;</i>
                <p class="toptitle">成理智源 - 联系方式</p>
                <div class="formcontainer">
                    <select name="location" v-model="company">
                        <option selected>成都.总部</option>
                        <option>贵阳.分公司</option>
                    </select>
                </div>
                <div class="contectways">
                    <div class="icons">
                        <i class="iconfont">&#xe6ce;</i><br/>
                        <i class="O_iconfont">&#xe6cc;</i><br/>
                        <i class="iconfont">&#xe6cd;</i><br/>
                        <i class="iconfont">&#xe6bf;</i><br/>
                        </div>
                        <div class="contectus_content">
                            <p class="pcontent">电话：028-8477114</p>
                            <p class="pcontent">邮箱：clzy@clzytech.com</p>
                            <p class="pcontent">邮编：610059</p>
                            <p class="pcontent">{{location}}</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contectus',
    data () {
        return {
            map: '',
            src: '',
            icon: '',
            marker: '',
            url: '',
            jsapi: '',
            company: '成都.总部',
            location: '地址：四川省成都市成华区成都理工大学'
        }
    },
    watch: {
        company: function () {
            switch (this.company) {
            case '成都.总部': {
                this.location = '地址：四川省成都市成华区成都理工大学'
                map.setCenter([104.141542, 30.672607])
                break
            }
            case '贵阳.分公司': {
                this.location = '地址：贵州省贵阳市市某某某某某某某某某某某某129号'
                map.setCenter([106.614631, 26.649116])
                break
            }
            }
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            window.onLoad = function () {
                this.src = require('../../assets/images/aboutus/定位.png')
                this.map = new AMap.Map('innercontainer', {
                    zoom: 16, // 设置地图显示的缩放级别
                    center: [104.141542, 30.672607] // 设置地图中心点坐标

                })
                this.icon = new AMap.Icon({
                    size: new AMap.Size(100, 200), // 图标尺寸
                    image: src, // Icon的图像
                    imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
                    imageSize: new AMap.Size(28, 30) // 根据所设置的大小拉伸或压缩图片
                })
                this.marker = new AMap.Marker({
                    position: [104.132037, 30.674748],
                    icon: icon
                })
                this.marker.setLabel({
                    offset: new AMap.Pixel(-90, -28), // 设置文本标注偏移量
                    content: "<div class='info'>成理智源科技（成都）有限公司</div>" // 设置文本标注内容
                })
                this.map.add(this.marker)
                this.marker = new AMap.Marker({
                    position: [106.614631, 26.649116],
                    icon: icon
                })
                this.marker.setLabel({
                    offset: new AMap.Pixel(-130, -28), // 设置文本标注偏移量
                    content: "<div class='info'>成理智源科技（成都）有限公司贵阳分公司</div>" // 设置文本标注内容
                })
                this.map.add(this.marker)
            }
            this.url = 'https://webapi.amap.com/maps?v=1.4.15&key=d3e95fef3c484dabf85488cea2e03c1c&callback=onLoad'
            this.jsapi = document.createElement('script')
            this.jsapi.charset = 'utf-8'
            this.jsapi.src = this.url
            document.head.appendChild(this.jsapi)
        }
    }
}
</script>
<style lang="less">
    @import './contectus.less';
</style>
