"use strict";

var Documentary = require("../models/documentary-model.js");
const multer = require("multer");
const vision = require("@google-cloud/vision");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("documentary");

const client = new vision.ImageAnnotatorClient({
  keyFilename: "./ocr-documentary.json",
});

const keywords = [
  ["hướng dẫn", "giải thích"], // hướng dẫn
  ["kết quả", "giải thích", "số niêm phong"], // giải thích
  ["chỉ đạo", "triển khai", "yêu cầu", "khẩn trương", "thực hiện nghiêm", "nghiêm túc", "tăng cường", "công tác", "tiếp tục"], // chỉ đạo
  ["đôn đốc", "nhắc nhở", "thực hiện", "chỉ đạo", "triển khai", "yêu cầu", "khẩn trương", "căn cứ", "kiểm tra"], // đôn đốc, nhắc nhở
  ["đề nghị", "đăng ký kiểm tra xác nhận", "thực hiện chỉ đạo", "ý kiến chỉ đạo", "quy định", "yêu cầu"], // đề nghị, yêu cầu
  ["phúc đáp", "nhận được văn bản", "yêu cầu", "trả lời công văn", "căn cứ công văn", "về vấn đề", "ý kiến như sau", "trả lời như sau", "trả lời thêm", "chịu trách nhiệm"], // phúc đáp
  ["xin ý kiến", "góp ý", "ý kiến đóng góp"], // xin ý kiến
];

function detectTextFromImage(imagePath, req, res) {
  let resultArray = "";
  let exactKeyword = 0;
  let maxKeyword = { number: 0, index: -1 };
  let size = keywords.length;
  client
    .textDetection(imagePath)
    .then((results) => {
      const result = results[0].textAnnotations;
      result.map((item) => (resultArray += " " + item.description));
      console.log(resultArray);
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < keywords[i].length; j++) {
          if (resultArray.toLowerCase().match(keywords[i][j])) {
            exactKeyword++;
          }
        }
        if (exactKeyword > maxKeyword.number) {
          maxKeyword.number = exactKeyword;
          maxKeyword.index = i;
        }
        exactKeyword = 0;
      }
      if (maxKeyword.index !== -1) {
        createADocumentary(req, res, maxKeyword.index);
      }
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
}

function createADocumentary(req, res, index) {
  var new_documentary = new Documentary({
    image_path: req.file.filename,
    category_id: index + 1,
  });

  //handles null error
  if (!new_documentary.category_id || !new_documentary.image_path) {
    res
      .status(400)
      .send({ error: true, message: "Please provide documentary" });
  } else {
    Documentary.createDocumentary(new_documentary, function (err, documentary) {
      if (err) res.send(err);
      res.json(documentary);
    });
  }
}

exports.list_all_documentary = function (req, res) {
  Documentary.getAllDocumentary(function (err, documentary) {
    if (err) res.send(err);
    res.send(documentary);
  });
};

exports.create_a_documentary = function (req, res) {
  upload(req, res, function (err) {
    detectTextFromImage("./uploads/" + req.file.filename, req, res);
  });
};

exports.read_a_documentary = function (req, res) {
  Documentary.getDocumentaryById(
    req.params.documentaryId,
    function (err, documentary) {
      if (err) res.send(err);
      res.json(documentary);
    }
  );
};

exports.read_image_documentary = function (req, res) {
  Documentary.getImageDocumentaryById(
    req.params.documentaryId,
    function (err, image) {
      if (err) res.send(err);
      const jsonString = Object.values(JSON.parse(JSON.stringify(image)));
      res.send(jsonString[0].image_path);
    }
  );
};
