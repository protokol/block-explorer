import ApiService from "@/services/api";

class NFTService {
  public async getCollection(id: string): Promise<any> {
    const collection = await ApiService.get(`nft/collections/${id}`);
    return collection.data;
  }
}

export default new NFTService();
