var express = require('express') ;
var router = express.Router();

router.get("" , require('./controller/'));

module.exports = router;

// var express = require("express");
// var router = express.Router();

//测试用

//router.post('/testing',require('./controller/testing.js'));

// router.get("/role/get_all", require("./controllers/role/search.js"));

// 这里依赖服务中心来调试debug...
// router.get("/debug", (req, res) => {
//   引入了base
//   var base = require("base");
//   var data = base.inner_status();
//   res.send(data);
// });

// module.exports = router;








