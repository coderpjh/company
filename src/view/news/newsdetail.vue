<template>
    <div class="outContainer">
        <div class="newsdetail-toptitle">
            <div class="title">
                <p><span @click="tohome" class="link">首页</span> > <span @click="tonews" class="link">新闻资讯</span> > <span class="key">正文</span></p>
            </div>
        </div>
        <div class="newstext">
            <h1>陆域油气调查成果研讨会在京召开</h1>
            <p class="time">乔秀英 2019-01-17</p>
            <div class="paragraphs">
                <p>为贯彻落实习近平总书记关于大力提升油气勘探开发
                力度的重要批示精神，落实自然资源部关于加
                强基础性、公益性油气调查要求，梳理总结调
                查成果，积极谋划下一步工作部署，12月7
                日，自然资源部中国地质调查局在北京组织
                召开陆域油气调查成果研讨会。</p>

                <p>会上，能源矿产地质调查计划下设六个油气
                工程，围绕解决资源环境和地球系统科学问题、
                成果转化应用和有效服务情况、促进科学理论创
                新和技术方法进步情况、促进人才成长和团队建设情
                况等四个方面进行了汇报交流，提出了下一阶段
                工作部署思路和目标。与会专家对陆域油气调查工
                作取得的突破性成果给予充分肯定，并对下一
                工作部署提出了意见和建议。</p>

                <p>自然资源部地质勘查管理司相关领导，中国地质调查局相关部
                室负责同志，院士专家，能源矿产地质调查计划协调人、首席
                科学家及下设工程首席、项目负责人等相关人员出席会议。</p>
            </div>
            <img src="../../assets/images/home_images/资讯1.png" />
        </div>
        </div>
</template>

<script>
export default {
    name: 'newsdetail',
    methods: {
        tohome () {
            return this.$router.push('/home')
        },
        tonews () {
            return this.$router.push('/news')
        }
    }
}
</script>

<style lang="less">
    @import './newsdetail.less';
</style>
