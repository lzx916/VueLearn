<!-- 根组件 -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <input type="text" ref="name"> -->
    <!-- <button @click="handleClick">click me</button> -->
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal">  <!-- 父组件向子组件传递变量，变量名为header，值为Sign... -->
        <template v-slot:links>  <!--命名slot-->
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Gateway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
    </div>
    <button @click="toggleModal">open modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'  //引入组件

export default {
  name: 'App',
  components: {  // 注册组件
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)  // 获取网页<input>元素
      this.$refs.name.classList.add('active')  // js添加class 函数（给当前input元素添加名为active的class
      this.$refs.name.focus()  // js聚焦函数
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
