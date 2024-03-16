import configs from "../config";
import axios from "axios";

const sendMail = async (data) => {
	await axios.post(`${configs.notification_service}/notification/send-email`, {
		to: data.to,
		subject: data.subject,
		templateType: data.templateType,
		data: data.data,
	});
};

export default sendMail;
