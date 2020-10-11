var ituParser = require("./ituPrefixParser");

function testCallsing(callsign, country) {
    console.log("Testing callsign "+callsign+" in "+country+"...");
    if (country == "") {
        console.error("ERROR: Empty country!");
        return 1;
    }
    if (ituParser.getInfo(callsign).name === country) {
        console.log("Found in \""+ituParser.getInfo(callsign).name+"\", flag "+ituParser.getInfo(callsign).flag+" , prefix regexp \""+ituParser.getInfo(callsign).prefix+"\"");
        return 0;
    } else if (ituParser.getInfo(callsign).name.search(country) >= 0) {
        console.log("Seems, found in \""+ituParser.getInfo(callsign).name+"\", flag "+ituParser.getInfo(callsign).flag+" , prefix regexp \""+ituParser.getInfo(callsign).prefix+"\"");
        return 0;
    } else {
        console.error("ERROR: Wrong country ("+ituParser.getInfo(callsign).name+")!");
        return 1;
    }
}

var errors = 0;

errors += testCallsing("R2APN", "Russia");

errors += testCallsing("3VAJHS", "Tunisia");

errors += testCallsing("G34GDF", "United Kingdom");

errors += testCallsing("234GDF", "United Kingdom");

errors += testCallsing("CQ3KHKJ", "Portugal");

errors += testCallsing("EU5JK", "Belarus");

errors += testCallsing("SSN4K", "Sudan");

errors += testCallsing("STZ2K", "Sudan");

errors += testCallsing("BU4HJ", "Taiwan");

errors += testCallsing("HB0WAS", "Liechtenstein");
errors += testCallsing("HB3YSD", "Liechtenstein");
errors += testCallsing("HBL8SD", "Liechtenstein");

if (errors)
    process.exit(1);