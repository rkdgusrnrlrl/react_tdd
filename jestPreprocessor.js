
var babel = require("babel-core");

exports.process = function(sourceText, sourcePath) {
	compileCode = babel.transform(sourceText, {
		presets : ["es2015", "react"]
	});
	return compileCode.code;
};