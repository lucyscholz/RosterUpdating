function addScholars() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var update = ss.getSheetByName('Roster Tool');
  var roster = ss.getSheetByName('Scholar Roster');
  
  var rowNum = update.getRange(3,3).getValue();
  var numAdd = update.getRange(4,3).getValue();
  var addition = update.getRange(6,2,numAdd,1).getValues();
  
  roster.getRange(rowNum,1,numAdd,1).setValues(addition);
}


function removeScholars() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var update = ss.getSheetByName('Roster Tool');
  var roster = ss.getSheetByName('Scholar Roster');
  var archive = ss.getSheetByName('Archived Scholars');
  
  var numRemove = update.getRange(4,4).getValue();

  for (var x = 5+numRemove; x > 5; x--) {
    var row = update.getRange(x,4).getValue();
    var old = roster.getRange(row,1,1,update.getLastColumn()).getValues();
    archive.getRange(archive.getLastRow()+1,1,1,update.getLastColumn()).setValues(old);
    roster.deleteRow(row);
  }

}

function deleteDups() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var update = ss.getSheetByName('Roster Tool');
  var roster = ss.getSheetByName('Scholar Roster');
  
  var numDups = update.getRange(4,5).getValue();
  
   for (var x = 5+numDups; x > 5; x--) {
    var row = update.getRange(x,6).getValue();
    roster.deleteRow(row);
  }
  
}
