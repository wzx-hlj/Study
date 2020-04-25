Vue.component('red', {
    props: {
        size: {
            type: String,
            default: '60px'
        }
    },
    template: `<div style="color: #ff0;" :style="{ fontSize:size}" ><slot></slot></div>`,
    data() {
        return{} 
    },
    created() {

    },
    mounted() {

    },
})