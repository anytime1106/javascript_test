<template>
    <div class="head">

        <div style="width: 100%;">

            <div style="width: 60%; float:left;">
                <ul>
                    <li>
                        <router-link to="/home">home</router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">dashboard</router-link>
                    </li>
                    <li>
                        server management
                    </li>
                    <li>
                        work management
                    </li>
                </ul>
            </div>

            <div style="width: 20%; float:left;">
                <input class="searchbar" placeholder="Search">
            </div>

            <div class="account" style="width: 10%; float:left;">
                <a href="">My Account</a>
            </div>

        </div>
        
    </div>    
</template>

<style scoped>
    .head{
        width: 100%;
        height: 50px;
    }

    .searchbar{
        border-radius: 5px;
    }

    .account{
        color: black;
    }
    
    ul li {
            font-style: normal;
            list-style: none;
            float:left;
            margin-left: 20px;            
        }
</style>

