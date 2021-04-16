import { serve } from "https://deno.land/std@0.93.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  const url = Deno.args[0];
  const res = await fetch(url);

  const body = new Uint8Array(await res.arrayBuffer());
  req.respond({ body });
}