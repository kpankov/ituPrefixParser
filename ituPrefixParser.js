var fs = require('fs');
var path = require('path');
var data = fs.readFileSync(path.resolve(__dirname) + '/ituPrefixTable.json', 'utf8');
var words = JSON.parse(data);

var countries = words["countries"];

const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

module.exports.getInfo = function (callsign) {

    var output = null;
    var found = 0;

    countries.forEach(function (element) {
        if (callsign.match(element.prefix) ) {
            output = element;
            found++;
        }
    });

    if (found > 1) {
        throw "Multiple countries found!";
        return null;
    }

    if (found === 0) {
        throw "No country found!";
        return null;
    }

    return output;
};

console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
