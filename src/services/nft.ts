import ApiService from "@/services/api";

class NFTService {
  public async getCollection(id: string): Promise<any> {
    const collection = await ApiService.get(`nft/collections/${id}`);
    return collection.data;
  }

  public async getAuctionWallets(walletId: string): Promise<any> {
    const wallet = await ApiService.get(`nft/exchange/auctions/${walletId}/wallets`);
    return wallet.data;
  }

  public async bidsSearch(searchData: any): Promise<any> {
    const bids = await ApiService.post(`nft/exchange/bids/search`, searchData);
    return bids.data;
  }

  public getImage(ipfsHash: string): string {
    return `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;
  }
}

export default new NFTService();
