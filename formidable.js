const {IncomingForm} = require('formidable');
const {resolve} = require('path')
const http = require('http');
const {rename, readFileSync} = require('fs');
const file = readFileSync('formidable_file.html', 'utf8')
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
        const oldpath = files.filetoupload.filepath;
        const newpath = __dirname+files.filetoupload.originalFilename
        rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(file)
  return res.end();
}
  //  else {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  //   res.write('<input type="file" name="filetoupload">');
  //   res.write('<input type="submit">');
  //   res.write('</form>');
  //   return res.end();
  // }
}).listen(8080);