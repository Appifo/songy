import { app } from "@/main";
import axios from "axios";
import VueAxios from "vue-axios";
import { getItem } from "./storage";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:2020/'
});

const Api = {
    init() {
        app.use(VueAxios, axios);
    },

    setHeader() {
        axiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${getItem('access_token')}`;
    },

    /**
   * Return formated date of a given string
   * @param {string} resource
   * @param {object} params
   */
    async query(resource: string, params: any): Promise<any> {
        return await axiosInstance.get(resource, params).catch(error => {
            throw new Error(`ApiService: ${error}`);
        });
    },

    /**
     * Return formated date of a given string
     * @param {string} resource
     * @param {string} slug
     */
    async get(resource: string, slug = ''): Promise<any> {
        return await axiosInstance.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`ApiService: ${error}`);
        });
    },

    /**
   * Return formated date of a given string
   * @param {string} resource
   * @param {object} params
   */
    post(resource: string, params: any): Promise<any> {
        return axiosInstance.post(`${resource}`, params);
    },

    /**
   * Return formated date of a given string
   * @param {string} resource
   * @param {string} slug
   * @param {object} params
   */
    update(resource: string, slug: string, params: any): Promise<any> {
        return axiosInstance.put(`${resource}/${slug}`, params);
    },

    /**
   * Return formated date of a given string
   * @param {string} resource
   * @param {object} params
   */
    put(resource: string, params: any): Promise<any> {
        return axiosInstance.put(`${resource}`, params);
    },

    /**
   * Return formated date of a given string
   * @param {string} resource
   */
    async delete(resource: string): Promise<any> {
        return await axiosInstance.delete(resource).catch(error => {
            throw new Error(`ApiService: ${error}`);
        });
    }
};

export default Api;