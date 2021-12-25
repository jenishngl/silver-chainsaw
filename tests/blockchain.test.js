const Blockchain = require("../src/blockchain");
const Block = require("../src/block");

describe("Blockchain", () => {
    let blockchain;
    let data, genesisData = "silver-chainsaw";

    beforeEach(() => {
        blockchain = new Blockchain();
        
    });

    it("starts with genesis block", () => {
        expect(blockchain.chain[0].data).toEqual(genesisData);
    });

    it("adds a new block", () => {
        blockchain.addBlock(data);
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
    });
});