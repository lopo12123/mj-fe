class SocketStore {
    private socket: any

    updateSocket(socket: any) {
        this.socket = socket
    }

    getSocket() {
        return this.socket
    }
}

const _ = new SocketStore()
export const useSocketStore = _