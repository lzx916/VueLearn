<template>
    <div class="backdrop" @click.self="closeModal">  <!--click.self让函数只在点击背景时起效-->
        <div class="modal" :class="{ sale : theme === 'sale' }">
            <!-- <h1>{{ header }}</h1>
            <p>{{ text }}</p> -->
            <slot>defalut content</slot>  <!--当没有默认slot时会显示，有默认slot显示默认的-->
            <slot></slot>  <!--没有命名的slot都是默认的slot，将被渲染在这里-->
            <div class="actions">
                <slot name="links"></slot>  <!--名字为links的slot将渲染在此-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],  // 参数注册，注册完了才可以在组件中使用
    methods: {
        closeModal() {
            this.$emit('close')  // 发出一个close事件,父组件App.vue监听close事件
        }
    }
}
</script>


<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal.sale {
    background: crimson;
    color: white;
}
.modal.sale h1 {
    color: white;
}
</style>