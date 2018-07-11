
var multer  =   require('multer')

var storage =   multer.diskStorage({
      // file upload destination
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        // custom function to change filename
        var fileExtension = file.originalname.split('.');
        callback(null, `${file.fieldname}-${Date.now()}.${fileExtension[fileExtension.length - 1]}`);
    }
});

var upload = multer({ storage : storage}).single('avatar');

exports.uploadAvatar = function(req,res){
  upload(req,res,function(err) {

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

      if(err) {
          return res.end("Error uploading file.");
      }

      res.end("File is uploaded");
  });
}
