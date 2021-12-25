const Block = require("../src/block");

describe("Block", () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = "silver-chainsaw";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it("set and verify if 'data' matches input ", () => {
        expect(block.data).toEqual(data);
    });

    it("set and verify if 'lastHash' matches input ", () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});
