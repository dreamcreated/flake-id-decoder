let FlakeIDDecoder = module.exports = {}

let POW6 = Math.pow(2, 6);  //2 ^ 6
let POW3 = Math.pow(2, 3);

function getTimestamp(id) {
    return Math.floor(id.readUIntBE(0, 6) / POW6);
}
FlakeIDDecoder.getTimestamp = getTimestamp;
