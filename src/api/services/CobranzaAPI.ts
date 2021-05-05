import api from "..";

export const CobranzaAPI = {
	async add(body: any) {
		try {
			const { data } = await api.post('cobranza', body);
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	}
}
