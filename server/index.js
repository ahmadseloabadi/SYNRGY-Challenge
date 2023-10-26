/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require("http");
const { PORT = 7000 } = process.env; // Ambil port dari environment variable

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public"); //untuk mengakses folder public
console.log("dir :", PUBLIC_DIRECTORY);

//membuat function getHTML
function getHTML(filename) {
  // Membuat path ke html file yang ada di directory public
  const htmlFile = path.join(PUBLIC_DIRECTORY, filename);

  // Membaca file HTML pada path htmlFile
  return fs.readFileSync(htmlFile, "utf-8");
}

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
  switch (req.url) {
    case "/":
      // Set header agar client tau kalo response kita itu berupa HTML
      res.setHeader("Content-Type", "text/html");
      // Set response status, agar client kita tau kalo requestnya berhasil
      res.writeHead(200);
      // Set response body, agar dapat dibaca oleh client
      res.end(getHTML("index.html"));
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(getHTML("404.html"));
      break;
  }
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server sudah berjalan, silahkan buka http://0.0.0.0:${PORT}`);
});
