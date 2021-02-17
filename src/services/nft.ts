import ApiService from "@/services/api";

class NFTService {
  public async getCollection(id: string): Promise<any> {
    const collection = await ApiService.get(`nft/collections/${id}`);
    return collection.data;
  }

  public getImage(ipfsHash: string): string {
    return `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;
  }

}

export default new NFTService();
