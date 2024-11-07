import { Hono } from 'hono';
import { handle } from 'hono/vercel';

// for app router
// export const runtime = 'edge';

// for app router
export const config = {
    runtime: 'edge'
}

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello World'
    })
})

// for app router
// export const GET = handle(app);
// export const POST = handle(app);

// for app router
export default handle(app);