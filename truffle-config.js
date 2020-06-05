require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purpose inner nation fox twist'; 
let testAccounts = [
"0x9065f8eb0148935092c931ab7b9f6f370b1a817c03321a39bbb2d321c95da84f",
"0x48a7166f165e39384a269b43ef578bb533e60fbcfa555c9c73ce1451f67f245c",
"0xcdbaee5c64f0097df9e4e762b37f17989c64489f3968081e58cd572b51e2d5e2",
"0x24b674f652cf54915c375d77cb44389b63f762149fa934c22fae5ff0b6a778aa",
"0xa084220ad909c25c6270a575711e3a9cef84c103ef6546b5355cc06de2ac6091",
"0x2c2249d54f5bc699ac61003c94d7bfc517c8d38c2231170b3412b1b7ccb7bc68",
"0x00855b0feec9ee03f7b1899ddbdde201d37b2bbf3e51a74fe6fea8c012f97523",
"0x07d66ea7e167496b55fcc5eec5444115f76897d7cc12e3fea50f4702cdd08b67",
"0x22062d8dcaf450b69602f67a8b1e0ad3fa5fd9e9c702d5ea786c4d96a1ea53af",
"0xa1ff09316974a7be1f224cb9294ea2aa755e983f8f8475b5cf2d74d502ab528f"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
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
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
