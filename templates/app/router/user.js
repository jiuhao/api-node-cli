const Router = require('koa-router');
const userService = require('../service/user');
var router = new Router({
    prefix: '/user'
});

router.post("/hello", async(ctx)=> {
    ctx.data = await userService.load(ctx.request.body);
});

router.post("/hello2", async(ctx)=> {
    ctx.data = await userService.load2(ctx.request.body);
});

module.exports = router;