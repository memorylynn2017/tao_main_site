var helper = {
    //判断是否是第一个属性
    isfirst: function(index, options) {
        if (index == 0) {
            return options.fn(this);
        }
    },
    section: function(name, block){
        //例如：。。。
    },
    
}
module.exports = helper