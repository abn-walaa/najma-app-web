import { Hono } from 'hono'
import { createBunWebSocket, serveStatic } from 'hono/bun'

const app = new Hono();
app.get('/*', serveStatic({
  root: "/static/", rewriteRequestPath: p => {
    // console.log(p)
    return p.replace(/^\/static/, '')
  }
}))
app.get('/admin/*', serveStatic({
  root: "/web/", rewriteRequestPath: p => {
    console.log(p, " ss2ssss-sssssss")
    return p.replace(/^\/admin/, '')
  }
}))
app.get('/', serveStatic({ path: "/static/index.html" }))
app.get('/admin', serveStatic({ path: "/web/index.html" }))



export default {
  fetch: app.fetch,
  port: 3600
}
