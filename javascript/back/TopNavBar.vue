<template>
    <div>
        <h1>Top Nav Bar</h1>
        <ul>
            <li>
                <router-link to="/home">home</router-link>
            </li>
            <li>
                <router-link to="/dashboard">dashboard</router-link>
            </li>
        </ul>
        <router-view name="HomeHead"></router-view>
    </div>    
</template>