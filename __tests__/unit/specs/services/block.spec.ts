import BlockService from "@/services/block";
import store from "@/store";

const blockPropertyArray = [
  "id",
  "version",
  "height",
  "previous",
  "forged",
  "payload",
  "generator",
  "signature",
  "confirmations",
  "transactions",
  "timestamp",
].sort();

describe("Services > Block", () => {
  beforeAll(() => {
    store.dispatch("network/setServer", "http://167.114.43.33:4003/api");
  });

  it("should return the latest blocks", async () => {
    const data = await BlockService.latest();
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
    });
    expect(data.sort((a, b) => a.height > b.height)).toEqual(data);
  });

  it("should return the last block", async () => {
    const data = await BlockService.last();
    expect(Object.keys(data).sort()).toEqual(blockPropertyArray);
  });

  it("should return the block for the given id", async () => {
    jest.setTimeout(30000);
    const data = await BlockService.find("cf252685fbf4863bdbd69b3b54a5ecdf68f355650e250cb72179045be9e21812");
    expect(Object.keys(data).sort()).toEqual(blockPropertyArray);
  });

  it("should fail when given block id is incorrect", async () => {
    await expect(BlockService.find("0")).rejects.toThrow();
  });

  it("should return the blocks by an offset", async () => {
    jest.setTimeout(30000);
    const { data } = await BlockService.paginate();
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
    });
    expect(data.sort((a, b) => a.height > b.height)).toEqual(data);
  });

  it("should return the blocks for given generator address", async () => {
    jest.setTimeout(30000);
    const { data } = await BlockService.byAddress("D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f");
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
    });
    expect(data.sort((a, b) => a.height > b.height)).toEqual(data);
  });

  it("should fail when given generator address is incorrect", async () => {
    await expect(BlockService.byAddress("XeaqhUKfBtVqNhtMct3piBiWfdhbRwbg4W")).rejects.toThrow();
  });

  it("should return the previous block for the given height", async () => {
    jest.setTimeout(30000); // This function easily takes 10-20 seconds to resolve, not sure why
    const data = await BlockService.findPrevious(4771470);
    expect(Object.keys(data).sort()).toEqual(blockPropertyArray);
  });

  it("should fail when finding previous block for an incorrect height", async () => {
    jest.setTimeout(30000);
    await expect(BlockService.findPrevious(1234567891234567890)).rejects.toThrow();
  });

  it("should fail when an no parameter is given (findPrevious)", async () => {
    await expect(BlockService.findPrevious()).rejects.toThrow();
  });

  it("should fail when an empty string is given (findPrevious)", async () => {
    await expect(BlockService.findPrevious("")).rejects.toThrow();
  });

  it("should return the next block for the given height", async () => {
    jest.setTimeout(30000); // This function easily takes 10-20 seconds to resolve, not sure why
    const data = await BlockService.findNext(4771470);
    expect(Object.keys(data).sort()).toEqual(blockPropertyArray);
  });

  it("should fail when finding next block for an incorrect height", async () => {
    await expect(BlockService.findNext(1234567891234567890)).rejects.toThrow();
  });

  it("should fail when no parameter is given (findNext)", async () => {
    await expect(BlockService.findNext()).rejects.toThrow();
  });

  it("should return the block at height 1 when an empty string is given (findNext)", async () => {
    jest.setTimeout(30000);
    const data = await BlockService.findNext("");
    expect(Object.keys(data).sort()).toEqual(blockPropertyArray);
    expect(data.height).toBe(1);
  });

  it("should return the block for the given id", async () => {
    jest.setTimeout(30000);
    const { data } = await BlockService.search({
      id: "cf252685fbf4863bdbd69b3b54a5ecdf68f355650e250cb72179045be9e21812",
    });
    expect(Object.keys(data[0]).sort()).toEqual(blockPropertyArray);
    expect(data[0].id).toBe("cf252685fbf4863bdbd69b3b54a5ecdf68f355650e250cb72179045be9e21812");
  });

  it("should return all blocks with a total fee exceeding 25 ARK ", async () => {
    const minAmount = 25 * 1e8;
    jest.setTimeout(30000);
    const { data } = await BlockService.search({
      totalFee: { from: minAmount },
    });
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
      expect(parseInt(block.forged.fee)).toBeGreaterThanOrEqual(minAmount);
    });
  });

  it("should return all blocks with a total amount between 100 and 500 ARK", async () => {
    const minAmount = 100 * 1e8;
    const maxAmount = 500 * 1e8;
    jest.setTimeout(30000);
    const { data } = await BlockService.search({
      totalAmount: { from: minAmount, to: maxAmount },
    });
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
      expect(parseInt(block.forged.amount)).toBeLessThanOrEqual(maxAmount);
      expect(parseInt(block.forged.amount)).toBeGreaterThanOrEqual(minAmount);
    });
  });

  it("should return all blocks generated for a public key", async () => {
    const publicKey = "0306950dae7158103814e3828b1ab97a87dbb3680db1b4c6998b8208865b2f9db7";
    jest.setTimeout(30000);
    const { data } = await BlockService.search({
      generatorPublicKey: publicKey,
    });
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
      expect(block.generator.publicKey).toBe(publicKey);
    });
  });

  it("should return the latest blocks when no arguments are passed", async () => {
    jest.setTimeout(30000);
    const { data } = await BlockService.search();
    expect(data).toHaveLength(25);
    data.forEach((block) => {
      expect(Object.keys(block).sort()).toEqual(blockPropertyArray);
    });
  });
});
