<template>
    <div class="marqueecontainer">
        <h3>{{showcontent.title}}</h3>
        <div class="time">经典案例{{showcontent.time}}</div>
        <div class="imgmarquee">
               <div class="marqueeleft" @click="test($event)" id="4"><img src="../../assets/images/application/img4.jpg" /></div>
                <div class="marqueecenter" @click="test($event)" id="1"><img src="../../assets/images/application/img1.jpg" /></div>
                <div class="marqueeright" @click="test($event)" id="2"><img src="../../assets/images/application/img2.jpg" /></div>
                <div class="another" @click="test($event)" id="3"><img src="../../assets/images/application/img3.jpg" /></div>
                <div class="marqueebtn"><span id="1" class="selected">1</span><span id="2" class="normal">2</span><span id="3" class="normal">3</span><span id="4" class="normal">4</span></div>
        </div>
        <div class="appcontent">
            <div class="steps">
                <div class="line">
                    <div class="point"></div>
                    <div class="line1"></div>
                    <div class="point"></div>
                    <div class="line2"></div>
                    <div class="point"></div>
                    <div class="line3"></div>
                    <div class="point"></div>
                </div>
                <div class="linecontent">
                    <p class="step1">项目背景</p>
                    <p class="step2">疑难痛点</p>
                    <p class="step3">如何解决</p>
                    <p class="step4">客户满意度</p>
                </div>
            </div>
            <div class="step_content">
                <div class="Scontent1">{{showcontent.projectbgd}}</div>
                <div class="Scontent2">{{showcontent.difficulty}}</div>
                <div class="Scontent3">{{showcontent.solution}}</div>
                <div class="Scontent4">{{showcontent.satisfiaction}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'imgmarquee',
    data () {
        return {
            id: 1,
            showcontent: [],
            appitems: [
                {
                    title: '正电铁才利布时又位团最有指通科算华构条素政但及公资说会基容易度样农子林加毛格',
                    time: '2019-10-15',
                    projectbgd: '2018年10月11日，西藏昌都市江达县波罗乡与四川甘孜州白玉县交界处发生的山体滑坡，造成金沙江断流并形成堰塞湖。滑塌灾区在该地区属于半农半牧乡村，平均海拔2860米，险情发生后附近白格、宁巴两个村庄被淹，有多处房屋、道路、桥梁以及耕地、草场受灾，而且通往波罗乡的必经桥梁被江水淹没，交通严重受阻。',
                    difficulty: '存在问题：土体表面位移监测、土体沉降监测、裂缝开合度监测、降雨量监测等。',
                    solution: '根据现场的踏勘及卫星遥感解译情况，共使用了位移监测仪25个，其中基准点2个，位移监测点23个；裂缝计20个；雨量计1台；短报文路由器8个；土体表面位移及沉降监测采用云N6系列GNSS位移监测一体机监测；裂缝开合度监测采用BDY-LFJ-2型拉线式裂缝计监测；降雨量监测采用云BDY-YLJ-1型雨量计监测。',
                    satisfiaction: '十分满意，未来将继续合作！'

                },
                {
                    title: '这是第二个应用案例',
                    time: '这是第二个应用案例的时间',
                    projectbgd: '这是第二个应用案例的项目背景',
                    difficulty: '这是第二个应用案例的疑难痛点',
                    solution: '这是第二个应用案例的解决方案',
                    satisfiaction: '这是第二个项目的客户满意度'

                },
                {
                    title: '这是第三个应用案例',
                    time: '这是第三个应用案例的时间',
                    projectbgd: '这是第三个应用案例的项目背景',
                    difficulty: '这是第三个应用案例的疑难痛点',
                    solution: '这是第三个应用案例的解决方案',
                    satisfiaction: '这是第三个项目的客户满意度'

                },
                {
                    title: '这是第四个应用案例',
                    time: '这是第四个应用案例的时间',
                    projectbgd: '这是第四个应用案例的项目背景',
                    difficulty: '这是第四个应用案例的疑难痛点',
                    solution: '这是第四个应用案例的解决方案',
                    satisfiaction: '这是第四个项目的客户满意度'

                }
            ]
        }
    },
    methods: {
        test (event) {
            var classname = event.currentTarget.className
            var theanother = document.getElementsByClassName('another')
            var theleft = document.getElementsByClassName('marqueeleft')
            var thecenter = document.getElementsByClassName('marqueecenter')
            var theright = document.getElementsByClassName('marqueeright')
            var transition = document.getElementsByClassName('transition')
            var x = document.querySelectorAll('.marqueebtn span')
            var selected = ''
            switch (classname) {
            case 'marqueeleft': {
                selected = theleft[0].id
                for (var num1 = 0; num1 < x.length; num1++) {
                    if (x[num1].id === selected) {
                        x[num1].className = 'selected'
                        this.id = x[num1].id
                    } else x[num1].className = 'normal'
                }
                theanother[0].className = 'transition'
                theright[0].className = 'another'
                thecenter[0].className = 'marqueeright'
                theleft[0].className = 'marqueecenter'
                transition[0].className = 'marqueeleft'
                break
            }
            case 'marqueeright': {
                selected = theright[0].id
                for (var num2 = 0; num2 < x.length; num2++) {
                    if (x[num2].id === selected) {
                        x[num2].className = 'selected'
                        this.id = x[num2].id
                    } else x[num2].className = 'normal'
                }
                theanother[0].className = 'transition'
                theleft[0].className = 'another'
                thecenter[0].className = 'marqueeleft'
                theright[0].className = 'marqueecenter'
                transition[0].className = 'marqueeright'
                break
            }
            }
        }

    },
    mounted () {
        this.showcontent = this.appitems[this.id - 1]
    },
    watch: {
        id () {
            this.showcontent = this.appitems[this.id - 1]
        }
    }

}
</script>

<style lang="less">
    @import './imgmarquee.less';
</style>
