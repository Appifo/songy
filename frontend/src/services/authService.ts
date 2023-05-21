import Api from "./api";

export default {
    register(creds: object) {
        return Api.post("register", creds)
    }
}