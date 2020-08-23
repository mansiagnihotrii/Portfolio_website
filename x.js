import purify from "purify-css"
const purify = require("purify-css")

let content = ""
let css = ""
let options = {
    output: "filepath/output.css"
}
purify(content, css, options)
