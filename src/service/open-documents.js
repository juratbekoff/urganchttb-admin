import api from "./api";

class DocumentService {
    getAll = async () => await api.get("/open-documents");
    delete = async (documentId) => await api.delete(`/open-documents/${documentId}`);
    create = async (data) => await api.post("/open-documents", data);
}

export const documentService = new DocumentService();
