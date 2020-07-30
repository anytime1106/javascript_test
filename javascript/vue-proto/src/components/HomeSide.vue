<template>
    <div class="side">
        
        <h4>Server List</h4>
        <input type="text" placeholder="search"><br>
        <div v-for="(data, index) in servers" :key="index">
            <p>{{ data.serverIP }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            servers:[
                {
                    serverId: 1,
                    serverIP: "211.116.234.101"
                },
                {
                    serverId: 2,
                    serverIP: "211.116.234.102"
                },
                {
                    serverId: 3,
                    serverIP: "211.116.234.103"
                },
                {
                    serverId: 4,
                    serverIP: "211.116.234.104"
                }, 
                {
                    serverId: 5,
                    serverIP: "211.116.234.105"
                },
                {
                    serverId: 6,
                    serverIP: "211.116.234.106"
                },
                {
                    serverId: 7,
                    serverIP: "211.116.234.107"
                },
                {
                    serverId: 8,
                    serverIP: "211.116.234.108"
                },
                {
                    serverId: 9,
                    serverIP: "211.116.234.109"
                },
                {
                    serverId: 10,
                    serverIP: "211.116.234.110"
                }
            ]
        }
    }
}
</script>
<style scoped>
    .side {
        border-right-width: thick;
        border-right-color: darkgray;
        border-radius: 8px;

        height: 1000px;
        width: 12%;
        float: left;
        background-color: lightgray;
        margin-right: 5px;;
    }
    input {
        width: 100px;
    }
</style>