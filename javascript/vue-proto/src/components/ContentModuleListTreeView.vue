<template>
    <div class="left">
        <h3>Content Module List Tree View</h3>
        <p>this module is : {{ this.projectId }}</p>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            projectId: this.$route.params.id
        }
    }
}
</script>