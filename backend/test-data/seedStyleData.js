const fs = require("fs");
var parseString = require("xml2js").parseString;

function seedStyleData() {
  return new Promise((resolve, reject) => {
    fs.readFile("./test-data/styles.xml", async (err, data) => {
      if (err) {
        reject(err);
      }
      const xmlString = data.toString();
      const stylesObject = await parseStyle(xmlString);
      resolve(parseStyleObject(stylesObject));
    });
  });
}

function parseStyle(xmlString) {
  return new Promise((resolve, reject) => {
    parseString(xmlString, function(err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function parseStyleObject(styleObject) {
  const resultKeys = Object.keys(styleObject.STYLES.STYLE[0]);
  const styleArray = [];
  styleObject.STYLES.STYLE.forEach(style => {
    const parsedStyle = {};
    resultKeys.forEach(key => {
      const [value] = style[key];
      parsedStyle[formatKey(key)] = value;
    });
    styleArray.push(parsedStyle);
  });
  return styleArray;
}

function formatKey(key) {
  const splitKeys = key.split("_");
  const formattedArray = splitKeys.map((part, i) => {
    let newPart = part;
    newPart = newPart.toLowerCase();
    if (i > 0) {
      newPart = newPart.charAt(0).toUpperCase() + newPart.slice(1);
    }
    return newPart;
  });
  return formattedArray.join("");
}

exports.seedStyleData = seedStyleData;
