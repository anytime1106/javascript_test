<template>
    <div class="project_content">
        <h3>Project List</h3>
        <div style="width:80%;">
        <table class="table_style">
            <thead>
                <tr>
                    <th scope="cols">Server ID</th>
                    <th scope="cols">Server IP</th>
                </tr>
            </thead>
            <tbody v-for="(data, index) in modules" :key="index">
                <tr>
                    <th scope="row" @click="moduleList(data.projectId)">{{ data.moduleName }}</th>
                    <td style="width:80%;">{{ data.functions }}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div style="width:20%;">

        </div>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            title: 'Modules',
            modules: [
                {
                    projectId: 1,
                    moduleName: "a",
                    functions: [
                        "function1", "function2", "function3", "function4"
                    ]
                },
                {
                    projectId: 2,
                    moduleName: "bb",
                    functions: [
                        "functionA", "functionB", "functionC", "functionD"
                    ]
                },
                {
                    projectId: 3,
                    moduleName: "C",
                    functions: [
                        "function11", "function22", "function33", "function44"
                    ]
                }
            ]
        }
    },
    methods: {
        moduleList(projectId) {
            this.$router.push({name: 'moduleList', params:{id:projectId}});
        }
    }
}
</script>

<style scoped>
.project_content {
        float: left;
        width: 80%;
        margin-left: 5px;
    }
.table_style table {
	width:100%;
	margin:15px 0;
	border:0;
}
.table_style th {
	font-weight:bold;
	background-color:#f1f9fd;
	color:#a1d9f7
}
.table_style,.table_style th,.table_style td {
	font-size:0.95em;
	text-align:center;
	padding:4px;
	border-collapse:collapse;
}
.table_style th,.table_style td {
	border: 1px solid #ffffff;
	border-width:1px
}
.table_style th {
	border: 1px solid #f1f9fd;
	border-width:1px 0 1px 0
}
.table_style td {
	border: 1px solid #eeeeee;
	border-width:1px 0 1px 0
}
.table_style tr {
	border: 1px solid #ffffff;
}
.table_style tr:nth-child(odd){
	background-color:#f7f7f7;
}
.table_style tr:nth-child(even){
	background-color:#ffffff;
}
</style>
