<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <newChatForm />
  </div>
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue'
import newChatForm from '@/components/newChatForm.vue'
import Navbar from '@/components/Navbar.vue'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
    components: { Navbar, newChatForm, ChatWindow },
    setup() {
      const { user } = getUser()
      const router = useRouter()

      watch(user, () => {
        if(!user.value) {
          router.push({ name: 'Welcome' })
        }
      }) 
    }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>