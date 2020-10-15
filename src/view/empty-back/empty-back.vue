<template>
	<div class="empty-back"></div>
</template>

<script>
import { getSession } from '@/libs/util'
export default {
  name: 'emptyback',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/') {
      let homepage = getSession('homeName')
      if (homepage) {
        next({
          name: homepage // 跳转到homeName页
        })
      } else {
        next()
      }
    } else {
      if (!to.params.changeparams) {
        next(vm => {
          vm.$router.replace({
            path: from.path,
            name: from.name,
            query: from.query,
            params: from.params
          })
        })
      } else {
        next(vm => {
          vm.$router.replace({
            path: from.path,
            name: from.name,
            query: to.query,
            params: to.params
          })
        })
      }
    }
  }
}
</script>

<style>
</style>
