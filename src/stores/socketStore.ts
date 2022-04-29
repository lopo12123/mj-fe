import { SocketType } from "@/types/io";

class SocketStore {
    private socket: SocketType | null = null

    updateSocket(socket: SocketType | null) {
        // 为了确保每次只存在一个socket连接, 则新建连接前断开已有连接(如果存在)
        this.socket?.disconnect()
        this.socket = socket
    }

    getSocket() {
        return this.socket
    }
}

const _ = new SocketStore()
export const useSocketStore = _