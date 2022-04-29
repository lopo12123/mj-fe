<script lang="ts" setup>
import { useAxiosStore } from "@/stores/axiosStore";
import { setupConnect } from "@/scripts";

const createRoomAndEnter = () => {
    useAxiosStore()
        .get('home', '/api/new-room')
        .then(({ data }) => {
            setupConnect(data.roomId)
        })
        .catch((err) => {
            console.log(err)
        })
}

const ping = () => {
    useAxiosStore()
        .get('home', '/ping')
        .then(({ data }) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>

<template>
    <div class="home">
        <div class="new-room-btn" @click="createRoomAndEnter">
            new room
        </div>

        <button @click="ping">ping</button>
    </div>
</template>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 100%;
    height: 100%;
    //display: flex;
    //align-items: center;
    //justify-content: center;

    .new-room-btn {
        position: relative;
        width: fit-content;
        height: 24px;
        padding: 5px;
        border: solid 1px #2da0ff;
        border-radius: 5px;
        background-color: white;
        line-height: 24px;
        user-select: none;
        cursor: pointer;
    }
}
</style>