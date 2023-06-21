import api from "./api";

class InstService {
  getAll = async () => await api.get("/institutions");
  deleteOne = async (id) => await api.delete(`/institutions/${id}`);
  create = async (data) => await api.post("/institutions", data);
}

export const instService = new InstService();
