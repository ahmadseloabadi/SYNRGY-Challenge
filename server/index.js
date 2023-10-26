/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require("http");
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public"); //untuk mengakses folder public
//membuat function file html
function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "UTF-8");
}
//membuat function file css
function getCSS(cssFileName) {
  const cssFilePath = path.join(PUBLIC_DIRECTORY, cssFileName);
  return fs.readFileSync(cssFilePath, "UTF-8");
}
//membuat function file js
function getJS(jsFileName) {
  const jsFilePath = path.join(PUBLIC_DIRECTORY, jsFileName);
  return fs.readFileSync(jsFilePath, "UTF-8");
}
//membuat function file image
function getImage(imageFileName) {
  const imageFilePath = path.join(PUBLIC_DIRECTORY, imageFileName);
  return fs.readFileSync(imageFilePath);
}

function onRequest(req, res) {
  console.log(req.url);
  let CSS = "";
  let JS = "";
  let IMG = "";

  if (req.url.match(".css$")) {
    CSS = req.url;
  } else if (req.url.match(".js$")) {
    JS = req.url;
  } else if (req.url.match(".png$") || req.url.match(".jpg$")) {
    IMG = req.url;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getHTML("index.html"));
      return;
    case "/cars":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getHTML("cari-mobil.html"));
      return;

    case CSS:
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(getCSS(CSS));
      return;

    case JS:
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(getJS(JS));
      return;

    case IMG:
      res.writeHead(200, { "Content-Type": "image" });
      res.end(getImage(IMG));
      return;

    default:
      res.writeHead(404);
      res.end(getHTML("404.html"));
      break;
  }
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, "", () => {
  console.log(`Server sudah berjalan, silahkan buka http://localhost:${PORT}`);
});
