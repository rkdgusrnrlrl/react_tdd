
var babel = require("babel-core");

exports.process = function(sourceText, sourcePath) {
	console.log(`text : ${sourceText}`);
	console.log(`path : ${sourcePath}`);
	compileCode = babel.transform(sourceText);
	console.log(`compileCode : ${compileCode}`);
};