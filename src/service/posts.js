import api from "./api";

class PostService {
  getAll = async () => await api.get("/posts");
  getByLimit = async (limit) => await api.get(`/posts/${limit}`);
  getByNewsId = async (newsId) => await api.get(`/posts/get/${newsId}`);
}

export const postService = new PostService();
