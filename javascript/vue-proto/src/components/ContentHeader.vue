<template>
    <div>
        <h3>Content Header</h3>
        <p>module name</p>
        <button @click="backToList()">Back to the project list</button>
    </div>    
</template>

<script>
export default {
    methods: {
        backToList() {
            this.$router.go(-1);
        }
    }
}
</script>