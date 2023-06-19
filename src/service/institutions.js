import api from "./api";

class InstService {
  getAll = async () => await api.get("/institutions");
  deleteOne = async (id) => await api.delete(`/institutions/${id}`);
}

export const instService = new InstService();
