import api from "./api";

export default {
    register(creds: object) {
        return api().post("register", creds)
    }
}