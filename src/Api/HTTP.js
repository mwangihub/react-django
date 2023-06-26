import axios from "axios";


export const http = (c_type = "application/json; charset=UTF-8") => {

	let headers = {
		"Content-type": c_type,
		'Accept': c_type,
	}
	return axios.create({
		baseURL: 'http://127.0.0.1:8000/',
		headers: headers
	});
};