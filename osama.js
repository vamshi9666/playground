const http = require('axios');

//const fs = require('fs');

const  textract = require('textract');



const fs = require('fs');

const axios = require('axios');

var url = 'http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=62699&toslno=62699';

textract.fromUrl(url, (err, text)=> {
	console.log(text);
	fs.writeFileSync("out.pdf", text.toString('base64'),'binary')
	
})
