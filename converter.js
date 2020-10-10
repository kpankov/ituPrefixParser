'use strict';

var fs = require('fs');
var path = require('path');

// var ituPrefixTable = fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8');
var ituPrefixTable = JSON.parse(fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8'));
var list_itu = ituPrefixTable["countries"];

// var countries = fs.readFileSync(path.resolve(__dirname) + '/countries.json', 'utf8');
var countries = JSON.parse(fs.readFileSync(path.resolve(__dirname) + '/countries.json', 'utf8'));
var list_flags = countries["countries"];

list_itu.forEach(function (element) {
    list_flags.forEach(function (element2) {
        if (element.name === element2.name) {
            element.flag = element2.flag;
        }
    })
});

fs.writeFileSync(path.resolve(__dirname) + '/ituPrefixTable_new.json', JSON.stringify(ituPrefixTable), 'utf8');
