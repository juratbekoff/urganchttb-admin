import api from "./api";

class PostService {
  getAll = async () => await api.get("/posts");
  getByLimit = async (limit) => await api.get(`/posts/${limit}`);
  getByNewsId = async (newsId) => await api.get(`/posts/get/${newsId}`);
  delete = async (id) => await api.delete(`/posts/delete/${id}`);
  create = async (data) => await api.post(`/posts`, data);
}

export const postService = new PostService();
