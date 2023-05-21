import Api from "./api";

export default {
    async songsList() {
        const response:any = await Api.get('songs')
        return response?.data
    }
}