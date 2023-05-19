import axios from "axios";

import {baseURL} from "../constants";
import {token} from "../constants";

const axiosMovieService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});


export {
    axiosMovieService,
}