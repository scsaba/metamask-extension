/** @module*/
module.exports = {
  checkAccount,
}

/**
 * Checks if a specified account on a specified network is blacklisted.
  @param networkId {number}
  @param account {string}
*/
async function checkAccount (networkId, account) {

  const mainnetId = 1
  if (networkId !== mainnetId) {
    //return
    console.log('not on mainnet')
  }
  
  const response = await fetch(`https://etherscamdb.info/api/check/${account}/`)
  const responseJson = await response.json()
  if (!responseJson.success || !responseJson.blocked) {
    return
  }

  return `https://etherscamdb.info/address/${account}`
}
