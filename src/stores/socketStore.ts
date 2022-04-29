import { SocketType } from "@/types/io";

class SocketStore {
    private socket: SocketType | null = null

    updateSocket(socket: SocketType | null) {
        this.socket?.disconnect()
        this.socket = socket
    }

    getSocket() {
        return this.socket
    }
}

const _ = new SocketStore()
export const useSocketStore = _