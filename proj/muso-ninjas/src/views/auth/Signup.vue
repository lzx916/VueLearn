<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Passowrd" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
        const res = await signup(email.value, password.value, displayName.value)
        if(!error.value) {
            router.push({ name: 'UserPlaylists' })
        }
    }

    return { displayName, email, password, error, isPending, handleSubmit }
  }
}
</script>

<style>

</style>