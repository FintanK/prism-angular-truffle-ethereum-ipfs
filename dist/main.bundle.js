webpackJsonp(["main"],{

/***/ "../../../../../build/contracts/MetaCoin.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"MetaCoin","abi":[{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}],"bytecode":"0x6060604052341561000f57600080fd5b6127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103c5806100636000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820160a93ab93423b4ba88450e871650248abb28daab7bf261332ca1946b63855f70029","deployedBytecode":"0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820160a93ab93423b4ba88450e871650248abb28daab7bf261332ca1946b63855f70029","sourceMap":"315:637:1:-;;;452:55;;;;;;;;498:5;476:8;:19;485:9;476:19;;;;;;;;;;;;;;;:27;;;;315:637;;;;;;","deployedSourceMap":"315:637:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;765:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;510:252;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;873:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;765:105;812:4;828:10;:18;847:16;858:4;847:10;:16::i;:::-;864:1;828:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;821:45;;765:105;;;:::o;510:252::-;567:15;615:6;592:8;:20;601:10;592:20;;;;;;;;;;;;;;;;:29;588:47;;;630:5;623:12;;;;588:47;663:6;639:8;:20;648:10;639:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;695:6;673:8;:18;682:8;673:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;726:8;705:38;;714:10;705:38;;;736:6;705:38;;;;;;;;;;;;;;;;;;754:4;747:11;;510:252;;;;;:::o;873:77::-;915:4;932:8;:14;941:4;932:14;;;;;;;;;;;;;;;;925:21;;873:77;;;:::o","source":"pragma solidity ^0.4.2;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tfunction MetaCoin() {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\tTransfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"C:\\Users\\Gamer\\Desktop\\angular4-truffle-starter-dapp-master\\contracts\\MetaCoin.sol","ast":{"attributes":{"absolutePath":"/C/Users/Gamer/Desktop/angular4-truffle-starter-dapp-master/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]}},"children":[{"attributes":{"literals":["solidity","^","0.4",".2"]},"id":18,"name":"PragmaDirective","src":"0:23:1"},{"attributes":{"SourceUnit":17,"absolutePath":"/C/Users/Gamer/Desktop/angular4-truffle-starter-dapp-master/contracts/ConvertLib.sol","file":"./ConvertLib.sol","scope":113,"symbolAliases":[null],"unitAlias":""},"id":19,"name":"ImportDirective","src":"25:26:1"},{"attributes":{"baseContracts":[null],"contractDependencies":[null],"contractKind":"contract","documentation":null,"fullyImplemented":true,"linearizedBaseContracts":[112],"name":"MetaCoin","scope":113},"children":[{"attributes":{"constant":false,"name":"balances","scope":112,"stateVariable":true,"storageLocation":"default","type":"mapping(address => uint256)","value":null,"visibility":"internal"},"children":[{"attributes":{"type":"mapping(address => uint256)"},"children":[{"attributes":{"name":"address","type":"address"},"id":20,"name":"ElementaryTypeName","src":"345:7:1"},{"attributes":{"name":"uint","type":"uint256"},"id":21,"name":"ElementaryTypeName","src":"356:4:1"}],"id":22,"name":"Mapping","src":"336:25:1"}],"id":23,"name":"VariableDeclaration","src":"336:34:1"},{"attributes":{"anonymous":false,"name":"Transfer"},"children":[{"children":[{"attributes":{"constant":false,"indexed":true,"name":"_from","scope":31,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":24,"name":"ElementaryTypeName","src":"389:7:1"}],"id":25,"name":"VariableDeclaration","src":"389:21:1"},{"attributes":{"constant":false,"indexed":true,"name":"_to","scope":31,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":26,"name":"ElementaryTypeName","src":"412:7:1"}],"id":27,"name":"VariableDeclaration","src":"412:19:1"},{"attributes":{"constant":false,"indexed":false,"name":"_value","scope":31,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint256","type":"uint256"},"id":28,"name":"ElementaryTypeName","src":"433:7:1"}],"id":29,"name":"VariableDeclaration","src":"433:14:1"}],"id":30,"name":"ParameterList","src":"388:60:1"}],"id":31,"name":"EventDefinition","src":"374:75:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":true,"modifiers":[null],"name":"MetaCoin","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"attributes":{"parameters":[null]},"children":[],"id":32,"name":"ParameterList","src":"469:2:1"},{"attributes":{"parameters":[null]},"children":[],"id":33,"name":"ParameterList","src":"472:0:1"},{"children":[{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":34,"name":"Identifier","src":"476:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"origin","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":134,"type":"tx","value":"tx"},"id":35,"name":"Identifier","src":"485:2:1"}],"id":36,"name":"MemberAccess","src":"485:9:1"}],"id":37,"name":"IndexAccess","src":"476:19:1"},{"attributes":{"argumentTypes":null,"hexvalue":"3130303030","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 10000","value":"10000"},"id":38,"name":"Literal","src":"498:5:1"}],"id":39,"name":"Assignment","src":"476:27:1"}],"id":40,"name":"ExpressionStatement","src":"476:27:1"}],"id":41,"name":"Block","src":"472:35:1"}],"id":42,"name":"FunctionDefinition","src":"452:55:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"sendCoin","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"receiver","scope":83,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":43,"name":"ElementaryTypeName","src":"528:7:1"}],"id":44,"name":"VariableDeclaration","src":"528:16:1"},{"attributes":{"constant":false,"name":"amount","scope":83,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":45,"name":"ElementaryTypeName","src":"546:4:1"}],"id":46,"name":"VariableDeclaration","src":"546:11:1"}],"id":47,"name":"ParameterList","src":"527:31:1"},{"children":[{"attributes":{"constant":false,"name":"sufficient","scope":83,"stateVariable":false,"storageLocation":"default","type":"bool","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"bool","type":"bool"},"id":48,"name":"ElementaryTypeName","src":"567:4:1"}],"id":49,"name":"VariableDeclaration","src":"567:15:1"}],"id":50,"name":"ParameterList","src":"566:17:1"},{"children":[{"attributes":{"falseBody":null},"children":[{"attributes":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"<","type":"bool"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":51,"name":"Identifier","src":"592:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":124,"type":"msg","value":"msg"},"id":52,"name":"Identifier","src":"601:3:1"}],"id":53,"name":"MemberAccess","src":"601:10:1"}],"id":54,"name":"IndexAccess","src":"592:20:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":55,"name":"Identifier","src":"615:6:1"}],"id":56,"name":"BinaryOperation","src":"592:29:1"},{"attributes":{"functionReturnParameters":50},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"66616c7365","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"bool","type":"bool","value":"false"},"id":57,"name":"Literal","src":"630:5:1"}],"id":58,"name":"Return","src":"623:12:1"}],"id":59,"name":"IfStatement","src":"588:47:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"-=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":60,"name":"Identifier","src":"639:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":124,"type":"msg","value":"msg"},"id":61,"name":"Identifier","src":"648:3:1"}],"id":62,"name":"MemberAccess","src":"648:10:1"}],"id":63,"name":"IndexAccess","src":"639:20:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":64,"name":"Identifier","src":"663:6:1"}],"id":65,"name":"Assignment","src":"639:30:1"}],"id":66,"name":"ExpressionStatement","src":"639:30:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"operator":"+=","type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":67,"name":"Identifier","src":"673:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":44,"type":"address","value":"receiver"},"id":68,"name":"Identifier","src":"682:8:1"}],"id":69,"name":"IndexAccess","src":"673:18:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":70,"name":"Identifier","src":"695:6:1"}],"id":71,"name":"Assignment","src":"673:28:1"}],"id":72,"name":"ExpressionStatement","src":"673:28:1"},{"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"tuple()","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"overloadedDeclarations":[null],"referencedDeclaration":31,"type":"function (address,address,uint256)","value":"Transfer"},"id":73,"name":"Identifier","src":"705:8:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"sender","referencedDeclaration":null,"type":"address"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":124,"type":"msg","value":"msg"},"id":74,"name":"Identifier","src":"714:3:1"}],"id":75,"name":"MemberAccess","src":"714:10:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":44,"type":"address","value":"receiver"},"id":76,"name":"Identifier","src":"726:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":46,"type":"uint256","value":"amount"},"id":77,"name":"Identifier","src":"736:6:1"}],"id":78,"name":"FunctionCall","src":"705:38:1"}],"id":79,"name":"ExpressionStatement","src":"705:38:1"},{"attributes":{"functionReturnParameters":50},"children":[{"attributes":{"argumentTypes":null,"hexvalue":"74727565","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"bool","type":"bool","value":"true"},"id":80,"name":"Literal","src":"754:4:1"}],"id":81,"name":"Return","src":"747:11:1"}],"id":82,"name":"Block","src":"584:178:1"}],"id":83,"name":"FunctionDefinition","src":"510:252:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"getBalanceInEth","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"addr","scope":99,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":84,"name":"ElementaryTypeName","src":"790:7:1"}],"id":85,"name":"VariableDeclaration","src":"790:12:1"}],"id":86,"name":"ParameterList","src":"789:14:1"},{"children":[{"attributes":{"constant":false,"name":"","scope":99,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":87,"name":"ElementaryTypeName","src":"812:4:1"}],"id":88,"name":"VariableDeclaration","src":"812:4:1"}],"id":89,"name":"ParameterList","src":"811:6:1"},{"children":[{"attributes":{"functionReturnParameters":89},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"member_name":"convert","referencedDeclaration":15,"type":"function (uint256,uint256) returns (uint256)"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":16,"type":"type(library ConvertLib)","value":"ConvertLib"},"id":90,"name":"Identifier","src":"828:10:1"}],"id":91,"name":"MemberAccess","src":"828:18:1"},{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":false,"isPure":false,"isStructConstructorCall":false,"lValueRequested":false,"names":[null],"type":"uint256","type_conversion":false},"children":[{"attributes":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"overloadedDeclarations":[null],"referencedDeclaration":111,"type":"function (address) returns (uint256)","value":"getBalance"},"id":92,"name":"Identifier","src":"847:10:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":85,"type":"address","value":"addr"},"id":93,"name":"Identifier","src":"858:4:1"}],"id":94,"name":"FunctionCall","src":"847:16:1"},{"attributes":{"argumentTypes":null,"hexvalue":"32","isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"subdenomination":null,"token":"number","type":"int_const 2","value":"2"},"id":95,"name":"Literal","src":"864:1:1"}],"id":96,"name":"FunctionCall","src":"828:38:1"}],"id":97,"name":"Return","src":"821:45:1"}],"id":98,"name":"Block","src":"817:53:1"}],"id":99,"name":"FunctionDefinition","src":"765:105:1"},{"attributes":{"constant":false,"implemented":true,"isConstructor":false,"modifiers":[null],"name":"getBalance","payable":false,"scope":112,"stateMutability":"nonpayable","superFunction":null,"visibility":"public"},"children":[{"children":[{"attributes":{"constant":false,"name":"addr","scope":111,"stateVariable":false,"storageLocation":"default","type":"address","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"address","type":"address"},"id":100,"name":"ElementaryTypeName","src":"893:7:1"}],"id":101,"name":"VariableDeclaration","src":"893:12:1"}],"id":102,"name":"ParameterList","src":"892:14:1"},{"children":[{"attributes":{"constant":false,"name":"","scope":111,"stateVariable":false,"storageLocation":"default","type":"uint256","value":null,"visibility":"internal"},"children":[{"attributes":{"name":"uint","type":"uint256"},"id":103,"name":"ElementaryTypeName","src":"915:4:1"}],"id":104,"name":"VariableDeclaration","src":"915:4:1"}],"id":105,"name":"ParameterList","src":"914:6:1"},{"children":[{"attributes":{"functionReturnParameters":105},"children":[{"attributes":{"argumentTypes":null,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"type":"uint256"},"children":[{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":23,"type":"mapping(address => uint256)","value":"balances"},"id":106,"name":"Identifier","src":"932:8:1"},{"attributes":{"argumentTypes":null,"overloadedDeclarations":[null],"referencedDeclaration":101,"type":"address","value":"addr"},"id":107,"name":"Identifier","src":"941:4:1"}],"id":108,"name":"IndexAccess","src":"932:14:1"}],"id":109,"name":"Return","src":"925:21:1"}],"id":110,"name":"Block","src":"921:29:1"}],"id":111,"name":"FunctionDefinition","src":"873:77:1"}],"id":112,"name":"ContractDefinition","src":"315:637:1"}],"id":113,"name":"SourceUnit","src":"0:953:1"},"compiler":{"name":"solc","version":"0.4.18+commit.9cf6e910.Emscripten.clang"},"networks":{"3":{"events":{},"links":{"ConvertLib":"0x0fb201f141f7b7f7a918f4b59dbc472a1767d7b9"},"address":"0x6d0c84b3b6e438d4b3793442f475db71a5fded66"},"5777":{"events":{},"links":{"ConvertLib":"0x345ca3e014aaf5dca488057592ee47305d9b3e10"},"address":"0xf25186b5081ff5ce73482ad761db0eb0d25abfbf"},"1497540925209":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x787fe5e74028176a6552f90d14d04bcc6297fcd9"},"address":"0xc265d4ea8425912b51ac36e23e4c187fb40df6ba","updated_at":1497540932068},"1497564377005":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x9596c6cef3427acf38ad21eb14ca2262ab04b8e0"},"address":"0x3a511605e276791d104d24e8590f9b6dff05a3e7","updated_at":1497564416671},"1497573956908":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x364acbfa10e7c110b40200457092c12bb3826953"},"address":"0xd8107de3f93ee0a8977bd48a05a996e9c61a4ff5","updated_at":1497574321175},"1497575573093":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x0bb483e4d6e6af468b7ab17251fcb7da3544111e"},"address":"0xcbf20107e28ec5566bb26f46cc6aeab758895ae1","updated_at":1497575611584},"1497704680000":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0xa2489b03174613759de5c88f66214a3e772fb34a"},"address":"0xde712c2344fd4aab71498b4443bed3640969446d","updated_at":1497704704499},"1500839312902":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x1feda32ceae7bfcfead59e00e3bc65095bb07b26"},"address":"0x8838d55bc9ded4bc72eaa4eca43b1f4d5eaed633","updated_at":1500839556226},"1502360145017":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x1559fe26aa9be3f370126e8386f17ebe2e1d652a"},"address":"0x64d4f50b63e8ff64bebf73c2b7e3fc6a22a2942a","updated_at":1502360207520},"1502361423296":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x1559fe26aa9be3f370126e8386f17ebe2e1d652a"},"address":"0x64d4f50b63e8ff64bebf73c2b7e3fc6a22a2942a","updated_at":1502361452538},"1502362873428":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0xf36a85aff1a3e42d8212cca42b4af64027662bbf"},"address":"0xda75dfe75b6e99fbf3561c430581e252c0565c10","updated_at":1502883739622}},"schemaVersion":"1.0.1","updatedAt":"2018-01-15T20:10:39.693Z"}

/***/ }),

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <img src=\"https://hints.littlealchemy2.com/icons/315.svg\" alt=\"\" width=\"100\" align=\"center\">\n      <h1 style=\"margin-left:-20px;\">Prism</h1>\n      <p>Decentralized Platform and Cryptocurrency Wallet</p>\n      <div class=\"alert alert-success\" *ngIf=\"connected\">\n        {{connected ? 'Connected to ' + networkName + '' : 'No connection to the ' + networkName + ''}}\n      </div>\n      <div class=\"alert alert-info\" *ngIf=\"status\">\n        {{status}}\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n        {{errorMessage}}\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h2>Your Wallet Addresses</h2>\n      <ul>\n        <li *ngFor=\"let account of accounts\">{{account}}</li>\n      </ul>\n      <p><strong>Note:</strong> You can generate additional addresses with your wallet client.</p>\n    </div>\n    <div class=\"col-sm-4\">\n      <h1 class=\"title\">Send Coins</h1>\n      <p>\n        Your Account Balance: {{balance}}\n      </p>\n      <form #coinForm=\"ngForm\">\n        <div class=\"field\">\n          <label class=\"label\">Amount</label>\n          <p class=\"control\">\n            <input\n              [(ngModel)]=\"sendingAmount\"\n              class=\"input\"\n              type=\"text\"\n              placeholder=\"Number of coins\"\n              name=\"sendingAmount\"\n              required\n              #sendingAmountModel=\"ngModel\">\n          </p>\n          <div *ngIf=\"sendingAmountModel.errors && (sendingAmountModel.dirty || sendingAmountModel.touched)\"\n               class=\"help is-danger\">\n            <p [hidden]=\"!sendingAmountModel.errors.required\">\n              This field is required\n            </p>\n          </div>\n          <div *ngIf=\"!sendingAmountModel.errors && (sendingAmountModel.dirty || sendingAmountModel.touched)\"\n               class=\"help is-danger\">\n            <p [hidden]=\"canBeNumber(sendingAmount)\">\n              Must be a number\n            </p>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">To Address</label>\n          <p class=\"control\">\n            <input\n              [(ngModel)]=\"recipientAddress\"\n              name=\"recipientAddress\"\n              class=\"input\"\n              type=\"text\"\n              placeholder=\"Recipient Address\"\n              name=\"recipientAddress\"\n              required\n              #recipientAddressModel=\"ngModel\"\n            >\n          </p>\n          <div *ngIf=\"recipientAddressModel.errors && (recipientAddressModel.dirty || recipientAddressModel.touched)\"\n               class=\"help is-danger\">\n            <p [hidden]=\"!recipientAddressModel.errors.required\">\n              This field is required\n            </p>\n          </div>\n          <div *ngIf=\"!recipientAddressModel.errors && (recipientAddressModel.dirty || recipientAddressModel.touched)\"\n               class=\"help is-danger\">\n            <p [hidden]=\"canBeNumber(recipientAddress)\">\n              Must be a number\n            </p>\n          </div>\n        </div>\n\n        <div class=\"field is-grouped\">\n          <p class=\"control\">\n            <button\n              [disabled]=\"!coinForm.valid\"\n              (click)=\"sendCoin()\"\n              class=\"button is-primary\">\n              Send\n            </button>\n          </p>\n        </div>\n      </form>\n      <p>\n        Network Version: {{networkProtocolVersion}} <br/>\n        Coinbase: 0x7f2cf947a62521dc6cb2fa73cc10c54109e78add <br/>\n        Peer Count: {{peerCount}}\n      </p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <p><strong>Reminder:</strong> Transactions take time to process. You can check the progress of your transactions by clicking the link below</p>\n      <div *ngIf=\"networkProtocolVersion == 1\">\n        <a *ngFor=\"let account of accounts\" href=\"https://etherscan.io/address/{{account}}\" target=\"_blank\">{{account}}</a>\n      </div>\n      <div *ngIf=\"networkProtocolVersion == 3\">\n        <a *ngFor=\"let account of accounts\" href=\"https://ropsten.etherscan.io/address/{{account}}\" target=\"_blank\">{{account}}</a>\n      </div>\n      <div *ngIf=\"networkProtocolVersion == 4\">\n        <a *ngFor=\"let account of accounts\" href=\"https://rinkeby.etherscan.io/address/{{account}}\" target=\"_blank\">{{account}}</a>\n      </div>\n      <div *ngIf=\"networkProtocolVersion == 42\">\n        <a *ngFor=\"let account of accounts\" href=\"https://kovan.etherscan.io/address/{{account}}\" target=\"_blank\">{{account}}</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_validation__ = __webpack_require__("../../../../../src/util/validation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Web3 = __webpack_require__("../../../../web3/index.js");
var contract = __webpack_require__("../../../../truffle-contract/index.js");
var metaincoinArtifacts = __webpack_require__("../../../../../build/contracts/MetaCoin.json");

var AppComponent = (function () {
    function AppComponent(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this.MetaCoin = contract(metaincoinArtifacts);
        this.canBeNumber = __WEBPACK_IMPORTED_MODULE_1__util_validation__["a" /* canBeNumber */];
        this.checkAndInstantiateWeb3 = function () {
            // Checking if Web3 has been injected by the browser (Mist/MetaMask)
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask');
                // Use Mist/MetaMask's provider
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                console.warn('No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask');
                // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
                _this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
            }
        };
        this.onReady = function () {
            // Bootstrap the EmeraldCoin Web3 Ethereum Provider
            _this.MetaCoin.setProvider(_this.web3.currentProvider);
            _this.web3.eth.estima;
            // Fetch the network
            _this.web3.version.getNetwork(function (err, netId) {
                _this.networkProtocolVersion = netId;
                switch (netId) {
                    case '1':
                        _this.networkName = 'Mainnet';
                        break;
                    case '2':
                        _this.networkName = 'Deprectaed Morden Network';
                        break;
                    case '3':
                        _this.networkName = 'Ropsten Test Network';
                        break;
                    case '4':
                        _this.networkName = 'Rinkeby Test Network';
                        break;
                    case '42':
                        _this.networkName = 'Kovan Test Network';
                        break;
                    default:
                        _this.networkName = 'Custom or Unknown Network';
                }
            });
            _this.connected = _this.web3.isConnected();
            // Get the initial account balance so it can be displayed.
            _this.web3.eth.getAccounts(function (err, accs) {
                if (err != null) {
                    alert('There was an error fetching your accounts. Please ensure you have the Metamask browser extension installed and set up so that you can connect to the Ethereum Blockchain');
                    return;
                }
                if (accs.length === 0) {
                    alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                    return;
                }
                _this.accounts = accs;
                _this.account = _this.accounts[0];
                // This is run from window:load and ZoneJS is not aware of it we
                // need to use _ngZone.run() so that the UI updates on promise resolution
                _this._ngZone.run(function () {
                    return _this.refreshBalance();
                });
            });
            _this.web3.net.getPeerCount(function (err, result) {
                _this.peerCount = result;
            });
        };
        this.refreshBalance = function () {
            var prism;
            _this.MetaCoin
                .deployed()
                .then(function (instance) {
                prism = instance;
                return prism.getBalance.call(_this.account, {
                    from: _this.account
                });
            })
                .then(function (value) {
                _this.balance = value;
            })
                .catch(function (e) {
                console.log(e);
                _this.errorMessage = e;
                _this.setStatus('Error getting balance; see log.');
            });
        };
        this.clearError = function () {
            _this.errorMessage = '';
        };
        this.setStatus = function (message) {
            _this.status = message;
        };
        this.sendCoin = function () {
            var amount = _this.sendingAmount;
            var receiver = _this.recipientAddress;
            var meta;
            _this.setStatus('Initiating transaction... (please wait)');
            _this.MetaCoin
                .deployed()
                .then(function (instance) {
                meta = instance;
                return meta.sendCoin(receiver, amount, {
                    from: _this.account
                });
            })
                .then(function () {
                _this.setStatus('Transaction complete!');
                _this.refreshBalance();
            })
                .catch(function (e) {
                console.log(e);
                _this.setStatus(e);
            });
        };
        this.connected = false;
        this.errorMessage = '';
        this.showDevTools = false;
    }
    AppComponent.prototype.windowLoaded = function () {
        this.checkAndInstantiateWeb3();
        this.onReady();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:load'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "windowLoaded", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the deev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/util/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = canBeNumber;
function canBeNumber(str) {
    if (!str) {
        return false;
    }
    return !isNaN(+str);
}
//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map