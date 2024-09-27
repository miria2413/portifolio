// server.mjs
import { createServer } from "node:http"

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello World!\n")
})

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})

// run with `node server.mjs`

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto da Miriã Ribeiro com cabelo solto, oculos, camiseta branca com estampa de um coração com dois panda se abraçando."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto da Miriã Ribeiro com cabelo solto, oculos, blusa  salmon com estampa do Mickey Mouse."
    )
  }
}
