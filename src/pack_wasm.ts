import { binaryify } from "https://deno.land/x/binaryify@2.5.4.1/binaryify_api.js"

await binaryify({
    pathToBinary: "./src/canvaskit-opt.wasm",
    pathToBinarified: "./src/canvaskit-opt.wasm.binaryified.js",
    disableSelfUpdating: false, // default is false
})