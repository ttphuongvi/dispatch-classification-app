'use strict';

var Category = require('../models/category-model.js');

exports.list_all_category = function(req, res) {
    Category.getAllCategory(function(err, category) {

        if (err)
            res.send(err);
        res.send(category);
    });
};

exports.list_all_documentary_by_category = function(req, res) {
    Category.getListDocumentaryByCategoryId(req.params.categoryId, function(err, category) {
        if (err)
            res.send(err);
        res.json(category);
    });
};

