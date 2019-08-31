// Compiled using ts2gas 3.4.4 (TypeScript 3.6.2)
var exports = exports || {};
var module = module || { exports: exports };
exports.hoge = function () {
    console.log("hige");
};
function main() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/DD");
    var value = "Hello clasp ts";
    console.log(value);
    sheet.appendRow([today, value]);
}
