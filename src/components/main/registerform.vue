<template>
    <div id="registerform">
        <div class="close">
            <img src="../../assets/images/关闭.png" @click="close"/>
        </div>
        <div class="registertitle">申请使用</div>
        <div class="registerinput">
            <div class="star">*</div>
            <div class="thetitle">姓名</div>
            <input type="text" placeholder="我们该怎么称呼您" class="theinput"/>
        </div>
        <div class="registerinput">
            <div class="star">*</div>
            <div class="thetitle">手机</div>
            <input type="text" placeholder="输入您目前在使用的手机号" class="theinput"/>
        </div>
        <div class="registerinput">
            <div class="star">*</div>
            <div class="thetitle">公司</div>
            <input type="text" placeholder="输入您当前所在的公司名称" class="theinput"/>
        </div>
        <div  class="biginput1">
            <div class="star">*</div>
            <div class="thetitle">识别码</div>
            <input type="text" placeholder="输入右侧的识别码" class="theinput"/>
            <div class="captcha"><canvas width="50" height="40" id="check">您的浏览器不支持canvas标签！</canvas></div>
            <div class="refresh" @click="drawCanvas">刷新</div>
        </div>
        <div  class="biginput2">
            <div class="star">*</div>
            <div class="thetitle">短信验证</div>
            <input type="text" placeholder="输入您接收到的短信验证码" class="theinput"/>
            <div class="message">免费获取验证码</div>
        </div>
        <div class="tick">
            <input type="checkbox" class="chexinput"/>
            <p>已阅读并同意（<span>成理智源协议</span>)</p>
        </div>
        <div class="registerbtn">马上申请试用</div>
        <div class="registerbottom">—— 注册成功后，该手机号也可登录小程序系统 ——</div>
    </div>
</template>

<script>
export default {
    name: 'registerform',
    computed: {
        ctx () {
            return document.getElementById('check').getContext('2d')
        },
        flag () {
            return this.$store.state.registerflag
        }
    },
    watch: {
        flag: function () {
            return this.drawCanvas()
        }
    },
    mounted () {
        return this.drawCanvas()
    },
    methods: {
        close () {
            var showcover = document.getElementById('cover')
            var showform = document.getElementById('registerform')
            var body = document.body
            body.style.overflowY = 'auto'
            showcover.style.display = 'none'
            showform.style.display = 'none'
        },
        drawCanvas () {
            // var ctx = document.getElementById('check').getContext('2d')
            var ctxW = document.getElementById('check').clientWidth
            var ctxH = document.getElementById('check').clientHeight
            // 清空canvas
            this.ctx.clearRect(0, 0, 200, 60)
            // 绘制背景
            this.drawBg(this.ctx, ctxW, ctxH, 200, 255)
            // 绘制干扰圆点
            this.drawCircle(this.ctx, ctxW, ctxH, 5, 5, 200, 255)
            // 绘制干扰线段
            this.drawLine(this.ctx, ctxW, ctxH, 2, 0, 255)
            // 绘制验证码
            var str = this.drawText(this.ctx, ctxW, ctxH, 4, 12, 17, -30, 30, 0, 100)
            return str
        },

        ranNum (min, max) {
            return Math.random() * (max - min) + min
        },
        /**

                         * 返回一个随机颜色 可设置颜色区间

                         * @param  {[Number]} min [颜色下限]

                         * @param  {[Number]} max [颜色上限]

                         * @return {[String]}     [随机颜色]

                         */

        ranColor (min, max) {
            var r = this.ranNum(min, max)
            var g = this.ranNum(min, max)
            var b = this.ranNum(min, max)
            // return "rgb(" + r + "," + g + "," + b + ")";
            return `rgb(${r},${g},${b})`
        },
        /**

                                 * 随机字符串数组

                                 * @return {[Array]} [随机数组]

                                 */

        ranStr () {
            var str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
            return str.split('').sort(function () {
                return Math.random() - 0.5
            })
        },
        /**

                 * 绘制文本字符串

                 * @param  {[String]} canvasId [canvas的id]

                 * @param  {[Number]} canvasW  [canvas的width]

                 * @param  {[Number]} canvasH  [canvas的height]

                 * @param  {[Number]} num      [绘制验证码的字数]

                 * @param  {[Number]} fsMin    [字体大小下限]

                 * @param  {[Number]} fsMax    [字体大小上限]

                 * @param  {[Number]} frMin    [字体旋转偏移下限]

                 * @param  {[Number]} frMax    [字体旋转偏移上限]

                 * @param  {[Number]} min      [颜色下限]

                 * @param  {[Number]} max      [颜色上限]

                 * @return {[String]} [随机字符串]

                 */

        drawText (canvasId, canvasW, canvasH, num, fsMin, fsMax, frMin, frMax, min, max) {
            var str = ''
            for (var i = 0; i < num; i++) {
                var char = this.ranStr()[Math.floor(0, this.ranStr().length)]
                var fs = this.ranNum(fsMin, fsMax)
                canvasId.font = fs + 'px Verdana'
                canvasId.fillStyle = this.ranColor(min, max)

                // 保存绘制的状态
                canvasId.save()
                // context.translate(x,y);

                // x    添加到水平坐标（x）上的值

                // y    添加到垂直坐标（y）上的值

                // 偏移

                canvasId.translate(canvasW / num * i + canvasW / 20, 0)
                // 变换角度

                canvasId.rotate(this.ranNum(frMin, frMax) * Math.PI / 180)
                // context.fillText(text,x,y,maxWidth);

                // text    规定在画布上输出的文本。

                // x    开始绘制文本的 x 坐标位置（相对于画布）。

                // y    开始绘制文本的 y 坐标位置（相对于画布）。

                // maxWidth    可选。允许的最大文本宽度，以像素计。

                canvasId.fillText(char, 0, (canvasH + fs) / 2.5, canvasW / num)
                // 返回之前保存过的路径状态和属性

                this.ctx.restore()
                str += char
            }
            // console.log(str);
            return str
        },
        /**

                 * 绘制背景

                 * @param  {[String]} canvasId [canvas的id]

                 * @param  {[Number]} canvasW  [canvas的width]

                 * @param  {[Number]} canvasH  [canvas的height]

                 * @param  {[Number]} min      [下限]

                 * @param  {[Number]} max      [上限]

                 */

        drawBg (canvasId, canvasW, canvasH, min, max) {
            // 绘制canvas背景
            canvasId.fillStyle = ' #f2f2f2'
            // 填充颜色
            canvasId.fillRect(0, 0, canvasW, canvasH)
        },
        /**

                 * 绘制干扰 圆点

                 * @param  {[String]} canvasId [canvas的id]

                 * @param  {[Number]} canvasW  [canvas的width]

                 * @param  {[Number]} canvasH  [canvas的height]

                 * @param  {[Number]} num      [绘制的数量]

                 * @param  {[Number]} r        [圆点半径]

                 * @param  {[Number]} min      [下限]

                 * @param  {[Number]} max      [上线]

                 */

        drawCircle (canvasId, canvasW, canvasH, num, r, min, max) {
            for (var i = 0; i < num; i++) {
                // 开始绘制 （拿起笔）
                canvasId.beginPath()
                // context.arc(x,y,r,sAngle,eAngle,counterclockwise); （绘制）

                // x    圆的中心的 x 坐标。

                // y    圆的中心的 y 坐标。

                // r    圆的半径。

                // sAngle    起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。

                // eAngle    结束角，以弧度计。

                // counterclockwise    可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。

                canvasId.arc(this.ranNum(0, canvasW), this.ranNum(0, canvasH), r, 0, 2 * Math.PI)
                // 填充颜色
                canvasId.fillStyle = this.ranColor(min, max)
                // 填充
                canvasId.fill()
                // 闭合绘制 （放开笔）
                canvasId.closePath()
            }
        },
        /**

                         * 绘制干扰 线段

                         * @param  {[String]} canvasId [canvas的id]

                         * @param  {[Number]} canvasW  [canvas的width]

                         * @param  {[Number]} canvasH  [canvas的height]

                         * @param  {[Number]} num      [绘制的数量]

                         * @param  {[Number]} min      [下限]

                         * @param  {[Number]} max      [上线]

                         */

        drawLine (canvasId, canvasW, canvasH, num, min, max) {
            for (var i = 0; i < num; i++) {
                // 开始绘制 （拿起笔）
                canvasId.beginPath()
                // 绘制开始点
                canvasId.moveTo(this.ranNum(0, canvasW), this.ranNum(0, canvasH))
                // 绘制结束点
                canvasId.lineTo(this.ranNum(0, canvasW), this.ranNum(0, canvasH))
                canvasId.strokeStyle = this.ranColor(min, max)
                canvasId.stroke()
                canvasId.closePath()
            }
        }

    }
}
</script>

<style lang="less">
    @import './registerform.less';
</style>
