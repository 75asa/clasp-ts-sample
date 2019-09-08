export const hoge = () => {
  console.log("hige");
};

export const foo = () => {
  console.log("hhh");
};

function main() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/DD");
  const value = "Hello clasp ts !!!!";

  console.log(value);
  sheet.appendRow([today, value]);
}
