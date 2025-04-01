import Product from "./product";

const format = require("xml-formatter");

function jsonToXml(json, rootElement = "root") {
  let xml = `<?xml version="1.0"?><${rootElement}>\n`;

  json.forEach((item) => {
    xml += "<product";
    for (const key in item) {
      xml += ` ${key}="${item[key].toString()}"`;
    }
    xml += "></product>";
  });

  xml += `</${rootElement}>`;
  const formattedXml = format(xml, { indentation: "  ", collapseContent: true });

  return formattedXml;
}

function jsonToCsv(json) {
  let csv = ``;
  const keys = Object.keys(json[0]);
  json.forEach((item) => {
    const values = keys.map((key) => item[key]);
    csv += values.join(", ") + "\n";
  });
  return csv;
}

export function printProducts(products: Product[]): void {
  console.log("Printed to JSON format \n");
  console.log(JSON.stringify(products, null, 2));
  console.log("----------------------------");
  console.log("Printed to XML format \n");
  console.log(jsonToXml(products, "products"));
  console.log("----------------------------");
  console.log("Printed to Comma-Seperated value(CSV) format\n");
  console.log(jsonToCsv(products));
}
