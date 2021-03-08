import { WalletService } from "@/services/index";

class NameserviceService {
  public async getWalletName(address: string): Promise<string | undefined> {
    try {
      const wallet = await WalletService.findRaw(address);

      const name = wallet.attributes.nameservice.name;
      if (name) {
        return name;
      }
    } catch {
      return undefined;
    }

    return undefined;
  }
}

export default new NameserviceService();
