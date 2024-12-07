import { Hono } from 'hono'
import { createBunWebSocket, serveStatic } from 'hono/bun'

const app = new Hono();
app.get('/*', serveStatic({
  root: "/static/", rewriteRequestPath: p => {
    console.log(p)
    return p.replace(/^\/static/, '')
  }
}))
app.get('/', serveStatic({ path: "/static/index.html" }))

export default app
