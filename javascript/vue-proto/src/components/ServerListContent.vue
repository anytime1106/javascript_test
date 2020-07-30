<template>
    <div class="servercontent">
        <h3>Server List Content</h3>
        <table class="type09">
            <thead>
                <tr>
                    <th scope="cols">Server ID</th>
                    <th scope="cols">Server IP</th>
                </tr>
            </thead>
            <tbody v-for="(data, index) in servers" :key="index">
                <tr>
                    <th scope="row">{{ data.serverId }}</th>
                    <td style="width:80%;">{{ data.serverIP }}</td>
                </tr>
            </tbody>
        </table>
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
    .servercontent {
        float: left;
        width: 70%;
        margin-left: 5px;
    }
    table.type09 {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;

    }
    table.type09 thead th {
        padding: 10px;
        font-weight: bold;
        vertical-align: top;
        color: #369;
        border-bottom: 3px solid #036;
    }
    table.type09 tbody th {
        width: 150px;
        padding: 10px;
        font-weight: bold;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
        background: #f3f6f7;
    }
    table.type09 td {
        width: 350px;
        padding: 10px;
        vertical-align: top;
        border-bottom: 1px solid #ccc;
    }
</style>