<template>
    <div class="Outer">
    <div class="newscards">
        <news-card v-for="item in showlist" :key='item.index'>
            <template v-slot:content>{{item.content}}</template>
            <template v-slot:time>{{item.time}}</template>
        </news-card>
    </div>
    <Page :total="total"  :current='currentindex' :page-size="pagenum" @on-change="pagechange" show-elevator show-total class="page"/>
</div>
</template>

<script>
import newsCard from './newscard.vue'
export default {
    name: 'newscard_container',
    methods: {
        pagechange (index) {
            var start = (index - 1) * this.pagenum
            var end = index * this.pagenum
            this.showlist = this.alldata.slice(start, end)
            this.currentindex = index
        }
    },
    data () {
        return {
            currentindex: 1,
            pagenum: 7,
            total: 16,
            showlist: [],
            alldata: [
                {
                    content: '办意命人从每果物把起王声比说只山住机部术小果',
                    time: '2019-12-18'
                },
                {
                    content: '处此及参国美验温运者自因特因给压主应却',
                    time: '2019-12-17'
                },
                {
                    content: '位支经严七增明龙程统消原有至布飞求比民表化今极北阶',
                    time: '2019-12-12'
                },
                {
                    content: '七必米品给也形反各叫自热知门团高真出教除二八从公',
                    time: '2019-12-05'
                },
                {
                    content: '不龙圆数维存就面转统设又求高些少色会间阶年油处山连圆市',
                    time: '2019-12-01'
                },
                {
                    content: '维也百指有位象给区员断许最容住积越火段列她主了党造出更展查过',
                    time: '2019-11-27'
                },
                {
                    content: '事团进压状把往示求正精件也地都决入则断济消利话',
                    time: '2019-11-11'
                },
                {
                    content: '第二页第一条',
                    time: '2019-11-27'
                },
                {
                    content: '第二页第二条',
                    time: '2019-11-11'
                },
                {
                    content: '第二页第三条',
                    time: '2019-11-27'
                },
                {
                    content: '第二页第四条',
                    time: '2019-11-11'
                },
                {
                    content: '第二页第五条',
                    time: '2019-11-27'
                },
                {
                    content: '第二页第六条',
                    time: '2019-11-11'
                },
                {
                    content: '第二页第七条',
                    time: '2019-11-27'
                },
                {
                    content: '第三页第一条',
                    time: '2019-11-11'
                },
                {
                    content: '第三页第二条',
                    time: '2019-11-11'
                }
            ]
        }
    },
    components: {
        newsCard
    },
    created () {
        var start = (this.currentindex - 1) * this.pagenum
        var end = this.currentindex * this.pagenum
        this.showlist = this.alldata.slice(start, end)
    }

}
</script>

<style lang="less">
    @import './newscard_container.less';
</style>
