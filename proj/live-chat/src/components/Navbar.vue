<template>
  <nav v-if="user">
    <div>
        <p>Hey there {{ user.displayName }}</p>
        <p class="email">Currently logged as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup(props, context) {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('user logged out')
            }
        }

        return { handleClick, user }
    }
}
</script>

<style>

</style>