'user strict';
var sql = require('./db.js');

//Category object constructor
var Category = function(category){
    console.log(category);
    this.name = category.name;
};
Category.getListDocumentaryByCategoryId = function getListDocumentaryByCategoryId(categoryId, result) {
    sql.query("Select * from documentary where category_id = ? ", categoryId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Category.getAllCategory = function getAllCategory(result) {
    sql.query("Select * from category", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('category : ', res);

            result(null, res);
        }
    });
};


module.exports= Category;
