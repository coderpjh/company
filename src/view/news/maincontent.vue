<template>
    <div>
        <div class="news-toptitle">
            <div class="title">
                <p>首页 > <span>新闻资讯</span></p>
            </div>
        </div>
        <div class="outcardcontainer" >
            <readcard url="资讯1.png" id="flag">
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
            </readcard>
            <div class="verticalbar"></div>
            <readcard url="资讯2.png">
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
            </readcard>
            <div class="verticalbar"></div>
            <readcard url="资讯3.png">
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
            </readcard>
        </div>
        <newscard-container></newscard-container>
    </div>
</template>

<script>
import readcard from './readcard.vue'
import newscardContainer from './newscard_container.vue'
export default {
    name: 'maincontent',
    components: {
        readcard,
        newscardContainer
    }
}
</script>

<style lang="less">
    @import './maincontent.less';
</style>
