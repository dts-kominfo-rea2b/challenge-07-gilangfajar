const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const [totalIXX, totalVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    return [...totalIXX, ...totalVGC].filter((x) => x.hasil === emosi).length;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  promiseOutput,
};