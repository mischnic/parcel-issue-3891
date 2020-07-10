const ts = require("typescript");

let opts = {
	declaration: true,
	emitDeclarationOnly: true,
	outFile: "index.d.ts",
	// traceResolution: true,
};

const createdFiles = {};
const host = ts.createCompilerHost(opts);
host.writeFile = (fileName, contents) => (createdFiles[fileName] = contents);

let program = ts.createProgram(["a/src/index.ts"], opts, host);
let emitResult = program.emit();

for (let x in createdFiles) {
	console.log("##### " + x);
	console.log(createdFiles[x]);
}

// let diagnostics = ts
// 	.getPreEmitDiagnostics(program)
// 	.concat(emitResult.diagnostics);

// console.log(diagnostics);
