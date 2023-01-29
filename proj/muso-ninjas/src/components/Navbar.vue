<template>
  <div class="navbar">
    <nav>
        <img src="@/assets/ninja.png">
        <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
        <div class="links">
            <div v-if="user">
                <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
                <router-link :to="{ name: 'UserPlaylists' }">My Playlist</router-link>
                <span>Hi there, {{ user.displayName }}</span>
                <button @click="handleClick">Logout</button>
            </div>
            <div v-else>
                <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
                <router-link v-if="!user" class="btn" :to="{ name: 'Login' }">Log in</router-link>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
export default {
  setup() {
    const { error, logout, isPending } = useLogout()
    const router = useRouter()
    const { user } = getUser()

    const handleClick = async () => {
        await logout()
        if(!error.value) {
            console.log('user logged out')
            router.push({ name: 'Login' })
        }
    }

    return { error, isPending, handleClick, user }
  }
}
</script>

<style>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  nav img {
    max-height: 60px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>