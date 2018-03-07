const Router = require('koa-router');
var router = new Router({
    prefix: '/user'
});

router.get("/hello", async(ctx)=> {
    ctx.data = +new Date();
});

router.post("/hello", async(ctx)=> {
    ctx.data = +new Date();
});

router.post("/error", async(ctx)=> {
    ctx.data = null.aa;
});

module.exports = router;