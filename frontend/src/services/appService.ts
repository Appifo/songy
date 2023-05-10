import api from "./api";

export default {
    async songsList() {
        const response:any = await api().get('songs')
        return response?.data
    }
}