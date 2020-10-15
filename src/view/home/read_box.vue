<template>
    <div class="read_card">
        <div class="btncontainer" @click="forward">
            <img src="../../assets/images/home_images/向左翻页.png" />
        </div>
        <div class="content">
            <div class="title">
            <p>MORE</p>
            <img src="../../assets/images/home_images/更多箭头.png"/>
            </div>
            <div class="schedule">
                <Progress :percent=percent_number
                :stroke-color="'#097DF0FF'"
                hide-info
                :stroke-width="2" />
            </div>
            <div class="out_container">
                <div class="inner_container" id='far_left'>
                    <middle-card url="资讯1.png">
                        <template slot=topic>
                            <h3>陆域油气调查成果研讨会在京召开</h3>
                        </template>
                        <template v-slot:time>
                           <h4>2019-01-17 11:40:33</h4>
                        </template>
                        <template v-slot:content>
                            <h5>为贯彻落实习近平总书记关于大力提升油气勘
                            探开发力度的重要批示精神，落实自然资源部关于加强
                            基础性、公益性油气调查要求，梳理总结调查成
                            果，积极谋划下一……</h5>
                        </template>
                    </middle-card>
                    <middle-card url="资讯2.png">
                        <template v-slot:topic>
                            <h3>煤田勘查区砂岩型铀矿与勘查示范项目野外验收会暨产学研基地揭牌活动顺利举行</h3>
                        </template>
                        <template v-slot:time>
                            <h4>2019-01-17 10:13:26</h4>
                        </template>
                        <template v-slot:content>
                            <h5>1月19-20日，华北项目办组织专家组在鄂尔多斯市召开“
                            煤田勘查区砂岩型铀矿调查与勘查示范项目野外验收研收
                            会”。会上，验收专家组在听取项目组汇报
                            的基础上，……</h5>
                        </template>
                    </middle-card>
                    <middle-card url="资讯3.png" id="far_right">
                        <template v-slot:topic>
                            <h3>鄂西秭归地区鄂秭页1井一开正式钻进</h3>
                        </template>
                        <template v-slot:time>
                            <h4>2019-01-17 11:09:55</h4>
                        </template>
                        <template v-slot:content>
                            <h5>2018年11月21日13时17分，伴随着钻机的隆隆轰
                            鸣声，自然资源部中国地质调查局油气资源调查中心在
                            鄂西秭归地区部署的页岩气参数井“鄂秭页1井”正式
                            一开钻进。该井设……</h5>
                        </template>
                    </middle-card>
                </div>
            </div>
        </div>
        <div class="btncontainer" @click="backward">
            <img src="../../assets/images/home_images/向右翻页.png"/>
        </div>
    </div>
</template>

<script>
import middleCard from './middle_card.vue'
export default {
    name: 'read_box',
    components: {
        middleCard
    },
    data () {
        return {
            percent: 60
        }
    },
    methods: {
        forward () {
            if (this.percent > 60) {
                this.percent -= 8
                var left = document.getElementById('far_left')
                var leftPosition = left.offsetLeft
                leftPosition += 23
                left.style.left = leftPosition + 'px'
            }
        },
        backward () {
            if (this.percent < 100) {
                this.percent += 8
                var left = document.getElementById('far_left')
                var leftPosition = left.offsetLeft
                leftPosition -= 23
                left.style.left = leftPosition + 'px'
            }
        }
    },
    computed: {
        percent_number () {
            return this.percent
        }
    }
}
</script>
<style lang="less">
    @import './read_box.less';
</style>
