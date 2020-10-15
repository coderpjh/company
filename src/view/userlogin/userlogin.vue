<template>
    <div class="clzy-login">
        <div class="logintitle">
            <p>地质灾害与工程结构安全自动化监测预警演示平台</p>
        </div>
        <div class="logincontent">
            <div class="loginform">
                <div class="Qrcodelogin">
                    <img src="../../assets/images/左侧扫码登录.png"/>
                </div>
                <div class="input">
                    <p class="lgtitle">用户登录</p>
                    <div class="choice">
                    </div>
                    <div class="inputform">
                        <div class="inputcontainer">
                            <img src="../../assets/images/账号icon.png" />
                            <div class="smallline"></div>
                            <input type="text" placeholder="请输入账号"/>
                        </div>
                        <div class="inputcontainer">
                            <img src="../../assets/images/密码icon.png" />
                            <div class="smallline"></div>
                            <input type="text" placeholder="请输入密码"/>
                        </div>
                    </div>
                    <p class="loginbtn">登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userlogin'
}
</script>

<style lang="less">
    @import './userlogin.less';
</style>
