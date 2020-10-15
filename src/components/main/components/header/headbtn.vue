<template><div class="btn">
<a @click="login">登录</a>
<Button shape="circle" class="register" @click='register'>免费注册</Button>
</div>
</template>

<script>
export default {
    name: 'headbtn',
    methods: {
        login () {
            return this.$router.push('/userlogin')
        },
        register () {
            var showcover = document.getElementById('cover')
            var showform = document.getElementById('registerform')
            var body = document.body
            body.style.overflowY = 'hidden'
            this.$store.state.registerflag = !this.$store.state.registerflag
            showcover.style.display = 'block'
            showform.style.display = 'block'
        }
    }
}
</script>

<style lang="less">
@import './headbtn.less';
</style>
