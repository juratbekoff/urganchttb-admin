import api from "./api";

class DashboardService {
  getCount = async () => {
    return await api.get("/dashboard");
  };
}

export const dashService = new DashboardService();
