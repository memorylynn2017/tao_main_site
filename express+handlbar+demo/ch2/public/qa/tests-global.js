// 创建public/qa/tests-global.js全局测试脚本


suite('Global Tests', function() {
    test('page has a valid title', function() {
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});