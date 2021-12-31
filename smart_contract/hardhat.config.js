require("@nomiclabs/hardhat-waffle");
const config = require("./config");

module.exports = {
  solidity: "0.8.0",
  networks: {
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/Tpp6uhuWu-a9FyiLQAAK4TpwdvHXzKvl",
      accounts: [
        "c766d970f7e800e9def86a26884f8c2ffca13905fa0d61a1a3290d4d9102c322",
      ],
    },
  },
};
