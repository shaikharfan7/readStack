[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Star this repository](https://img.shields.io/github/stars/shaikharfan7/readStack?style=social)
[![Follow me on Twitter](https://img.shields.io/twitter/follow/shaikharfan7?style=social)](https://twitter.com/shaikharfan7)
[![To know more about me visit](https://github.com/shaikharfan7/COVID19-Stats-India/blob/master/app/src/main/res/drawable/site_button.png)](http://shaikharfan.me)


# readStack

Personal Reading List Page With Google Sheet Integration Using Google AppScript.


## Google AppScript Code ##

  ```javascript
	//Edit Sheetname in argument on below function if different (Sheet1 is default) 
	var sheetName = 'Sheet1'
	var scriptProp = PropertiesService.getScriptProperties()

	function intialSetup () {
		var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
		scriptProp.setProperty('key', activeSpreadsheet.getId())
	}

	function doPost (e) {
		var lock = LockService.getScriptLock()
		lock.tryLock(10000)

		try {
			var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
			var sheet = doc.getSheetByName(sheetName)

			var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
			var nextRow = sheet.getLastRow() + 1

			var newRow = headers.map(function(header) {
			return header === 'timestamp' ? new Date() : e.parameter[header]
			})

			sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

			return ContentService
			  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
			  .setMimeType(ContentService.MimeType.JSON)
	}

		  catch (e) {
			return ContentService
			  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
			  .setMimeType(ContentService.MimeType.JSON)
		  }

		  finally {
			lock.releaseLock()
		  }
		}
            

    function doGet(e){
    
     //Change SpeadSheet Link Below
     var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1hPOxLEDj4i4O6PDrvjbZ3GZynpYxdjMci0rnyRt9n8g/edit?usp=sharing");
    
      //Edit Sheetname in argument on below function if different (Sheet1 is default) 
      var sheet = ss.getSheetByName("Sheet1");
      
     return getUsers(sheet); 
      
    }


    function getUsers(sheet){
      var jo = {};
      var dataArray = [];
    
    // collecting data from 2nd Row , 1st column to last row and last column.
      var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
      
      for(var i = 0, l= rows.length; i<l ; i++){
        var dataRow = rows[i];
        var record = {};
        //Edit records based on your requirement. 
        record['title'] = dataRow[0];
        record['link'] = dataRow[1];
        record['author'] = dataRow[2];
        
        dataArray.push(record);
        
      }  
      
      jo.user = dataArray;
      
      var result = JSON.stringify(jo);
      
      return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
    }  
  
```
### Screenshots ###
 ![Screenshot1-Google Sheet With Data](https://github.com/shaikharfan7/readStack/blob/master/res/screenshots/sheet.png)
 ![Screenshot1-App Page](https://github.com/shaikharfan7/readStack/blob/master/res/screenshots/index.png)
  ![Screenshot1-Add Form](https://github.com/shaikharfan7/readStack/blob/master/res/screenshots/addform.png)

### Technology Stack ###
- [Google AppsScript](https://script.google.com/)
- [Google Sheets](http://sheets.google.com/)

## Support

If you like this repo or find it useful, please consider (★) starring it.


## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)