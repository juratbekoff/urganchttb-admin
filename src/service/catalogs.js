import api from "./api";

class CatalogService {
  getAll = async () => await api.get("/catalogs");
  delete = async (id) => await api.delete(`/catalogs/${id}`);
  create = async (data) => await api.post("/catalogs", data);
}

export const catalogService = new CatalogService();
