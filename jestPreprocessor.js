
var babel = require("babel-core");

exports.process = function(sourceText, sourcePath) {
	console.log(`text : ${sourceText}`);
	console.log(`path : ${sourcePath}`);
	compileCode = babel.transform(sourceText, {
		presets : ["es2015", "react"]
	});
	console.log(`compileCode : ${compileCode.code}`);
	return compileCode.code;
};