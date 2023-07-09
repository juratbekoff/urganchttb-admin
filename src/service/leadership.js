import api from "./api";

class LshService {
  getAll = async () => await api.get("/leadership");
  delete = async (id) => await api.delete(`/leadership/${id}`);
  create = async (data) => await api.post("/leadership", data);
}

export const lsService = new LshService();
