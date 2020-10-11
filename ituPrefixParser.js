const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8');
const words = JSON.parse(data);

const countries = words["countries"];

module.exports.getInfo = function (callsign) {

    var output = null;
    var found = 0;

    countries.forEach(function (element) {
        if (callsign.match(element.prefix) && !found) {
            output = element;
            found++;
        }
    });

    if (found === 0) {
        throw "No country found!";
        return null;
    }

    return output;
};
