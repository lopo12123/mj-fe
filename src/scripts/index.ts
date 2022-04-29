import { io } from "socket.io-client";
import { useSocketStore } from "@/stores/socketStore";
import { SocketType } from "@/types/io";

const serverUrl = 'http://localhost:8899'

/**
 * @description 建立ws连接
 */
const setupConnect = (roomId: string) => {
    const socket: SocketType = io(serverUrl, { query: { roomId }, withCredentials: true })
    useSocketStore.updateSocket(socket)
}

export {
    setupConnect
}