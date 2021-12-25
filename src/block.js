const SHA256 = require("crypto-js/sha256");

class Block{
    
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;           
        this.hash = hash;
        this.data = data;        
    }

    toString(){
        return `Block Details -
        Timestamp   : ${this.timestamp}
        Last hash   : ${this.lastHash}
        Hash        : ${this.hash}
        Data        : ${this.data}
        `;
    }

    static hash = (timestamp, lastHash, data) => {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static genesis = () => {
        let timestamp = Date.now();
        let data = "silver-chainsaw";
        return new this(timestamp, "", this.hash(timestamp, "", data), data);
    }

    static mineBlock = (lastBlock, data) => {
        const timestamp = Date.now();
        const lasthash = lastBlock.hash;
        const hash = this.hash(timestamp, "", data);

        return new this(timestamp, lasthash, hash, data);
    }
}

module.exports = Block;