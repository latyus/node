const url = require('url')
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')
// serialized
console.log(myUrl.href)
console.log(myUrl.toString())
// host :return the port
console.log(myUrl.host)
// hostname 
// console.log(myUrl.hostname)
// // pathname
// console.log(myUrl.pathname)
// console.log(myUrl.search)
// paraams
// console.log(myUrl.searchParams)
// add params
// myUrl.searchParams.append('abc', 'i23')
// myUrl.searchParams.forEach(url=>console.log(url))
// myUrl.searchParams.forEach(url=>console.log(url))

