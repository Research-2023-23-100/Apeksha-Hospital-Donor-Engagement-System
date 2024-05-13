import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const MODEL_BASE_URL = import.meta.env.VITE_BACKEND_URL_HAIR;

class HairDonationAPI {

    static testapi() {
        return axios.get(`${MODEL_BASE_URL}`, requestConfig);
    }

}

export default HairDonationAPI;