const Wallet = require('ethereumjs-wallet')

const accountExporter = {

  async exportAccount(privateKey) {
    var key = Buffer.from(privateKey, 'hex')
    const wallet = Wallet.fromPrivateKey(key)
    return wallet.toV3String('anypass') 
  }
}

module.exports = accountExporter
