const {join,resolve, basename,sep} = require('path')
const path = basename('/content','latyus','place','index.html')
const resol = resolve('/content','latyus','place','index.html')
const joi = join('/content','latyus','place','index.html')
console.log(resol)
console.log(path)
console.log(joi)
console.log(sep)