import axios from "axios";

export interface BodyRequest {
    inputs: string;
}

export interface BodyResponse {
    generated_text: string;
}

const instance = axios.create({
    baseURL: "https://api-inference.huggingface.co",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    },
    timeout: 5000
});

async function huggingFaceApi(data: BodyRequest) {
	return await instance.post(
		"/models/mistralai/Mistral-7B-Instruct-v0.2",
        JSON.stringify(data)
	).catch(function (e) {
        throw new Error(`HuggingFace call ApiError: ${e}`);
    });
}

export async function asyncGetAiText(inputs: string): Promise<BodyResponse[]> {
    try {
        const response = await huggingFaceApi({ inputs });
        return response.data;
    } catch (e) {
        throw new Error('HuggingFaceApi Error: ' + e);
    }
}