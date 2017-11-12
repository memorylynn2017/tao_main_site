module.exports = function(req, res) {
    this.indexAction = function() {
        res.json({ state: 'fail', msg: '操作失败', data: [] });
    }

    this.Hello = function(req, res){
		console.log("Hello world！！" );
		res.render('index', {
			locals: {
				title: 'Express',
                text: "hello world",
                city: "London",
			}
		});
    }
    
    this.getHello = function(req, res){
        console.log("Hello world！！" );
    }
}

// function IndexHandler() {
//     this.indexAction = function(req, res) {
//         // var model = this._model('message');
//         // this._local('info', model.getInfo());
//         res.json({ state: 'fail', msg: '操作失败', data: [] });
//     }
// }

// // 'use strict';
// // function clickHandler (db) {
// //     var clicks = db.collection('clicks');
// //     this.getClicks = function (req, res) {
// //         var clickProjection = { '_id': false };
// //         clicks.findOne({}, clickProjection, function (err, result) {
// //             if (err) {
// //                 throw err;
// //             }
// //             res.json(result);
// //         });
// //     };
// // }

// module.exports = IndexHandler;