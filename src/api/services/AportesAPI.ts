import api from "..";
import { AporteAdd, AporteAcumular } from "../../models/aporte-model";
import { BaseAPI } from "./BaseAPI";

export const AportesAPI = {
	async getAll(params: {searchQuery?: string, pageNumber?: number, pageSize?: number}) {
		try {
			const res = await BaseAPI.getAll<any>('aportes', params);
			return {...res, items: res.items};
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},
	async add(body: AporteAdd) {
		try {
			const { data } = await api.post('aportes', body);
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},

	async getAporteBySocio(socioId: string) {
		try {
			if (!socioId) {
				return;
			}

			const { data } = await api.get(`aportes/socios/${socioId}`);
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},

	async getDetalleByAporteId(aporteId: string) {
		try {
			if (!aporteId) {
				return;
			}
			const { data } = await api.get(`aportes/detalles/${aporteId}`);
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},

	async acumular(body: AporteAcumular) {
		try {
			const { data } = await api.post(`aportes/acumular`, { ...body });
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},

	async reiniciar(aporteId: string) {
		try {
			const { data } = await api.post(`aportes/reiniciar`, { aporteId });
			return data;
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	}
}
