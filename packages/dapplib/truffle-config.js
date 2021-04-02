require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strong crawl pulse company grace light army gift'; 
let testAccounts = [
"0xc2a83bb362f54339c36f49c29f301d3e75ce94855edb728b0835fb55909ae01d",
"0xa7bc02af37758123082cce03194797d7166123b1797eea76f910b421a3eebc48",
"0x5f88b79cb3c79c44bd8f1eb9218030a1cd01f7aab067f1390c7424fae2b95b2c",
"0x43cd62f2c3783869a85616a2d22e242a473a6d82f44507a6444d122436f6cf91",
"0xf94df31ee6ed4f5cb3b683d4b4ac5fe0c4b6f93f7a12f29dd74603efb161e27b",
"0xd051c1fa84c4d9c0ee4f4ea172297fd9b40ead3e54960e1517ae179ae19bd6cf",
"0xbe7ca6321b2db0687e5240508983d7318f87af3588aab232374e6be648864edb",
"0xde3b275197b551f944460a0eac1c7e175cdbd73b6a934e44fcec3a087b3e4239",
"0x3f5aec5e07ba12a86b62c44439e7ad4815392ac86c95d207794aa09dd696a299",
"0xb85173796c5d4b8524fe3e63b94f7ee7bd7ee70097db31922ca2373d1fe9a1c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
