import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const MODEL_BASE_URL = import.meta.env.VITE_BACKEND_URL_HAIR;

class HairDonationAPI {

    static testapi() {
        return axios.get(`${MODEL_BASE_URL}`, requestConfig);
    }
    static step1_active(values) {
        return axios.post(`${MODEL_BASE_URL}/step1_active`, values, requestConfigJson);
    }

}

export default HairDonationAPI;