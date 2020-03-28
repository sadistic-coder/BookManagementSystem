var assert = require('assert');
class Book {
    constructor(name, auther){
        this.name = name;
        this.auther = auther;
        this.id = name;
    }
}
describe('Book', function () {
    it('은 생성할 수 있다.', function () {
        const book = new Book('프린키피아 1', '아이작 뉴턴');
        assert.ok(book, "book can't create");
        assert.equal(book.name, '프린키피아 1');
    });
});