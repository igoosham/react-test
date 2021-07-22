function compareArrays(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;
  return ar1.every((el, i) => el === ar2[i]);
}

function rnd(max) {
  if (!max) return Math.random();
  return Math.floor(Math.random() * max);
}

function toObject(string) {
  const intAsString = string.replace(".", "");
  return {
    int: +intAsString,
    dot: string.indexOf("."),
    len: intAsString.length,
  };
}

function randomChange(obj, percent) {
  let koef = 1;

  let int = obj.int;

  const result = JSON.parse(JSON.stringify(obj));

  const trend = rnd(2);

  if (trend === 0) {
    // decreasing int
    koef = percent ? 1 - rnd(percent) / 100 : 1 - rnd() / 100;
  } else {
    // increasing int
    koef = percent ? 1 + rnd(percent) / 100 : 1 + rnd() / 100;
  }
  // console.log({ int, newint: Math.floor(int * koef), trend, koef });

  result.int = Math.floor(int * koef);

  return result;
}

function toDotedStringValue({ int, dot, len }) {
  const str = int.toString();
  const dotPos = str.length < len ? dot - 1 : dot;
  let withDot = `${str.substring(0, dotPos)}.${str.substring(dotPos)}`;
  if (withDot.substr(0, 1) === ".") withDot = "0" + withDot;
  return withDot;
}

function getRandomRow({ Symbol, Bid, Ask, Spread }) {
  // console.table({ Symbol, Bid, Ask, Spread });

  const bidObj = toObject(Bid);
  const askObj = toObject(Ask);
  const spreadObj = toObject(Spread);

  const newBid = randomChange(bidObj);
  const newSpread = randomChange(spreadObj, 5);
  const newAsk = {
    int: newBid.int + newSpread.int,
    dot: askObj.dot,
    len: askObj.len,
  };

  return {
    Symbol,
    Bid: toDotedStringValue(newBid),
    Ask: toDotedStringValue(newAsk),
    Spread: toDotedStringValue(newSpread),
  };
}

export { compareArrays, rnd, getRandomRow };
