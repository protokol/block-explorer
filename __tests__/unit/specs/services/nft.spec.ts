import NFTService from "@/services/nft";
import store from "@/store";

describe("Services > NFTService", () => {
  beforeAll(() => {
    store.dispatch("network/setServer", "http://135.181.154.221:5003/api");
  });

  it("should return url", () => {
    const data = NFTService.getImage("some-ipfs");
    expect(data).toStrictEqual("https://cloudflare-ipfs.com/ipfs/some-ipfs");
  });

  it("should check the rest call for getting collection", async () => {
    const data = await NFTService.getCollection("4a1c8509d9ae62368acfd42db5ee755b9af9521ad831ca26f91b1700c71e3273");
    expect(data).not.toBeNull();
  });

  it("should throw error", async () => {
    const data = NFTService.getAuctionWallets("hello-there-some-wallet");
    await expect(data).rejects.toThrow(Error);
  });

  it("should return some data", async () => {
    const data = await NFTService.bidsSearch({});
    expect(data).not.toBeUndefined();
  });
});
