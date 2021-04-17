import { Application } from 'https://deno.land/x/oak/mod.ts'
import { parse } from 'https://deno.land/std/flags/mod.ts';
import router from './routes.ts'

const { args } = Deno;
const argPort = parse(args).port;
const HOST = '127.0.0.1'
const PORT = argPort ? Number(argPort) : 8000
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen({ port: PORT })