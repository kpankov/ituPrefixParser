var fs = require('fs');
var path = require('path');
var data = fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8');
var words = JSON.parse(data);

var countries = words["countries"];

module.exports.getInfo = function (callsign) {
    
    var output;
    var found = 0;
    
    countries.forEach(function (element) {
        if (callsign.match(element.prefix) ) {
            output = element;
            found++;
        }
    });
    
    if (found > 1) {
        throw "Multiple countries found!";
    }
    
    if (found === 0) {
        throw "No country found!";
    }
    
    delete output.prefix;

    return output;
};
