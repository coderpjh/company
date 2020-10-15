<template>
    <div class="clzy-solution">
        <div class="top_img">
            <img src="../../assets/images/solution-top.png"/>
        </div>
        <div class="top_cav">
            <div class="content">
                首页 ><span>解决方案</span>
            </div>
        </div>
        <div class="maincontent">
            <div class="Rowcontainer">
            <contentCard>
                <template v-slot:h6>
                    <h6>滑坡</h6>
                </template>
                <template v-slot:p>
                    <p>五则观反今完子规产次明老你公流油始持
                    号马海又干里来置因命确五则观反今完子规
                    产次明老你公流油始持号马海又干里来置
                    因命确。</p>
                </template>
            </contentCard>
            <contentCard>
                <template v-slot:h6>
                    <h6>崩塌</h6>
                </template>
                <template v-slot:p>
                    <p>六书火近大身情这亲边转状统际金大转六书
                    火近大身情这亲边转状统际金大转
                    六书火近大身情这亲边转状统际金大转。</p>
                </template>
            </contentCard>
            <contentCard>
                <template v-slot:h6>
                    <h6>泥石流</h6>
                </template>
                <template v-slot:p>
                    <p>六书火近大身情这亲边转状统际
                    金大转六书火近大身情这亲边转状统际
                    金大转六书火近大身情这亲边转
                    状统际金大转。</p>
                </template>
            </contentCard>
            </div>
            <div class="Rowcontainer">
            <contentCard>
                <template v-slot:h6>
                    <h6>沉降</h6>
                </template>
                <template v-slot:p>
                    <p>是市些极还教克较收她及等做法工风
                    管都品那给性斯就易热际问是市些极还教克
                    较收她及等做法工风管都品那给性斯就
                    易热际问。。</p>
                </template>
            </contentCard>
            <contentCard>
                <template v-slot:h6>
                    <h6>建筑基坑</h6>
                </template>
                <template v-slot:p>
                    <p>红往然规四总铁置米报与取本号界心最
                    认起养反量五红往然规四总铁置米报与取本号
                    界心最认起养反量五红往然规四
                    铁置米报与取本号界心最认起养反量五。。</p>
                </template>
            </contentCard>
            <contentCard>
                <template v-slot:h6>
                    <h6>桥隧工程</h6>
                </template>
                <template v-slot:p>
                    <p>识断它府同量通场育九济压三可导间结最
                    支性识断它府同量通场育九济压三可导间
                    结最支性识断它府同量通场育九济压三可
                    导间结最支性</p>
                </template>
            </contentCard>
            </div>
            <div class="Rowcontainer">
            <contentCard>
                <template v-slot:h6>
                    <h6>水利大坝</h6>
                </template>
                <template v-slot:p>
                    <p>道新么次一深一来取油看原构里每车
                    道新么次一深一来取油看原构里每车道新么
                    次一深一来取油看原构里每车道新么次一
                    深一来取油看原构里每车</p>
                </template>
            </contentCard>
            </div>
        </div>
        <div class="mainbottom">
            <div class="title">
                软件定制 · 前沿思维
            </div>
            <div class="icons">
                <iconCard url='需求定制.png'>
                    <template v-slot:h6>
                        <h6>需求沟通</h6>
                    </template>
                    <template v-slot:p>
                        <p>倾听客户需求，了解用户使用环境和操作流程</p>
                    </template>
                </iconCard>
                <iconCard url='项目策划.png'>
                    <template v-slot:h6>
                        <h6>项目策划</h6>
                    </template>
                    <template v-slot:p>
                        <p>倾听客户需求，了解用户使用环境和操作流程</p>
                    </template>
                </iconCard>
                <iconCard url='交互设计.png'>
                    <template v-slot:h6>
                        <h6>交互设计</h6>
                    </template>
                    <template v-slot:p>
                        <p>从用户的角度思考，模拟用户行为</p>
                    </template>
                </iconCard>
                <iconCard url='视觉创意.png'>
                    <template v-slot:h6>
                        <h6>视觉创意</h6>
                    </template>
                    <template v-slot:p>
                        <p>色彩及平面元素设定，结构和布局规范确认</p>
                    </template>
                </iconCard>
               <iconCard url='前端制作.png'>
                   <template v-slot:h6>
                       <h6>前端制作</h6>
                   </template>
                   <template v-slot:p>
                       <p>HTML5、CSS3、JS实现页面的动态展示</p>
                   </template>
               </iconCard>
                <iconCard url='技术开发.png'>
                    <template v-slot:h6>
                        <h6>技术开发</h6>
                    </template>
                    <template v-slot:p>
                        <p>>三端软件数据对接与开发</p>
                    </template>
                </iconCard>
                <iconCard url='测试反馈.png'>
                    <template v-slot:h6>
                        <h6>测试反馈</h6>
                    </template>
                    <template v-slot:p>
                        <p>修改调整规范完善</p>
                    </template>
                </iconCard>
            </div>
        </div>
    </div>
</template>

<script>
import iconCard from './iconCard.vue'
import contentCard from './contentCard.vue'
export default {
    name: 'solution',
    components: {
        contentCard,
        iconCard
    },
    data () {
        return {

        }
    },
    methods: {

    },
    mounted () {

    }
}
</script>

<style lang="less">
@import './solution.less';
</style>
