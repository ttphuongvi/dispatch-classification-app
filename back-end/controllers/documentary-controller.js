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
  ["hướng dẫn", "ý kiến", "thực hiện", "chỉ đạo", "triển khai", "thực hiện công văn", "căn cứ quyết định", "căn cứ thông tư", "thực hiện nghị quyết"], // hướng dẫn
  ["kết quả", "giải thích", "triển khai", "chỉ đạo", "trách nhiệm", "thực hiện"], // giải thích
  ["chỉ đạo", "triển khai", "khẩn trương", "thực hiện nghiêm", "nghiêm túc", "tăng cường", "công tác", "tiếp tục", "khẩn trương triển khai thực hiện", 
    "gấp rút", "đảm bảo", "trách nhiệm", "phải"], // chỉ đạo
  ["đôn đốc", "nhắc nhở", "thực hiện", "chỉ đạo", "triển khai", "khẩn trương", "căn cứ", "kiểm tra"], // đôn đốc, nhắc nhở
  ["đề nghị", "đăng ký kiểm tra xác nhận", "thực hiện chỉ đạo", "ý kiến chỉ đạo", "quy định", "yêu cầu", "cung cấp"], // đề nghị, yêu cầu
  ["phúc đáp", "nhận được văn bản", "trả lời", "căn cứ công văn", "về vấn đề", "ý kiến như sau", "chịu trách nhiệm", "phản hồi"], // phúc đáp
  ["xin ý kiến", "góp ý", "ý kiến đóng góp", "dự thảo", "xin phép", "kế hoạch", "tờ trình"], // xin ý kiến
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
      // console.log(resultArray);
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
      if (err) res.json(err);
      res.send(new_documentary)
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
    // console.log(req.file)
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
