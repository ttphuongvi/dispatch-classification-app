'user strict';
var sql = require('./db.js');

//Documentary object constructor
var Documentary = function(documentary){
    this.image_path = documentary.image_path;
    this.category_id = documentary.category_id;
};
Documentary.createDocumentary = function createDocumentary(newDocumentary, result) {
    sql.query("INSERT INTO documentary set ?", newDocumentary, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.id);
        }
    });
};
Documentary.getDocumentaryById = function getDocumentaryById(documentaryId, result) {
    sql.query("Select d.id, d.image_path, c.name as category_name from documentary d, category c where d.id = ? and d.category_id = c.id ", documentaryId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Documentary.getAllDocumentary = function getAllDocumentary(result) {
    sql.query("Select d.id, d.image_path, c.name as category_name from documentary d, category c where d.category_id = c.id", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('documentary : ', res);

            result(null, res);
        }
    });
};
Documentary.getImageDocumentaryById = function getImageDocumentaryById(documentaryId, result) {
    sql.query("Select image_path from documentary where id = ? ", documentaryId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};


module.exports= Documentary;
