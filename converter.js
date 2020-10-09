'use strict';

var fs = require('fs');
var path = require('path');

var data = fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8');
var words = JSON.parse(data);
var countries = words["countries"];

var country_base = fs.readFileSync(path.resolve(__dirname) + '/countries.json', 'utf8');
var country_words = JSON.parse(country_base);
var list = country_words["countries"];

// countries.forEach(function (element) {
//     console.log("name: "+element.name);
// });

const offset = 127397;

list.forEach(function (element) {
  if (element.code) {
    const f = element.code.codePointAt(0);
    const s = element.code.codePointAt(1);
    element.flag = String.fromCodePoint(f + offset) + String.fromCodePoint(s + offset);
    console.log(element.flag + "  " + element.name);
  }
});

fs.writeFileSync(path.resolve(__dirname) + '/ituPrefixTable_new.json', JSON.stringify(country_words), 'utf8');
