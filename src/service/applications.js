import api from "./api";

class ApplicationService {
  getAll = async () => {
    return await api.get("/application");
  };
  delete = async (id) => {
    await api.delete(`/application/${id}`);
  };
}

export const appService = new ApplicationService();
