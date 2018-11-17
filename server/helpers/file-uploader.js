var Q = require('q');
var config = require('config');
var multer = require('multer');
var path = require('path');
var fs = require('fs');

module.exports = {
    prepareResponse: function(status, data, message) {
        serviceResponse = {};
        // Response handling
        serviceResponse = {
            status: status,
            data: data || [],
            message: message
        };
        return serviceResponse;
    },
    MAGIC_NUMBERS: {
        jpg: 'ffd8ffe0',
        jpg1: 'ffd8ffe1',
        png: '89504e47',
        gif: '47494638'
    },
    checkMagicNumbers: function(magic) {
        if (magic == this.MAGIC_NUMBERS.jpg ||
            magic == this.MAGIC_NUMBERS.jpg1 ||
            magic == this.MAGIC_NUMBERS.png ||
            magic == this.MAGIC_NUMBERS.gif) return true;
    },
    uploadFile: function(req, res, fileControlName = "myFile", uploadPath = "./uploads/") {
        // ref link : https://evdokimovm.github.io/javascript/nodejs/expressjs/multer/2016/11/03/Upload-files-to-server-using-NodeJS-and-Multer-package-filter-upload-files-by-extension.html
        var deferred = Q.defer();
        var upload = multer({
            storage: multer.memoryStorage()
        }).single(fileControlName)

        var fileUploader = this;
        upload(req, res, function(err) {
            var buffer = req.file.buffer
            var magic = buffer.toString('hex', 0, 4)
                // var filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname)
                //var filename = path.parse(req.file.originalname).name + '-' + Date.now() + path.extname(req.file.originalname)
                // var filename = req.body.tbl_business_id+ '-' +req.file.originalname

            // var filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname)
            //var filename = path.parse(req.file.originalname).name + '-' + Date.now() + path.extname(req.file.originalname)
            var filename = Date.parse(new Date().toISOString().slice(0,10))+"-"+req.file.originalname

            if (fileUploader.checkMagicNumbers(magic)) {
                fs.writeFile(uploadPath + filename, buffer, 'binary', function(err) {
                    if (err) {
                        //error while uploadin file                        
                        let serviceResponse = fileUploader.prepareResponse(0, [], err);
                        deferred.resolve(serviceResponse);
                        // res.send(serviceResponse);
                    }
                    let fileData = {};
                    fileData.filename = filename;
                    let serviceResponse = fileUploader.prepareResponse(1, fileData, "File has been uploaded successfully.");
                    deferred.resolve(serviceResponse);
                    // res.send(serviceResponse);
                })
            } else {
                let serviceResponse = fileUploader.prepareResponse(1, [], "Invalid file type");
                deferred.resolve(serviceResponse);
                // res.send(serviceResponse);
            }
        })
        return deferred.promise;
    },
    removeFile: function(filename, uploadPath = "./uploads/") {
        console.log("filename from file uploader", filename);
        var deferred = Q.defer();
        var filePath = uploadPath + filename;
        //fs.unlinkSync(filePath);
        var fileUploader = this;
        if (fs.existsSync(filePath)) {

            fs.unlink(filePath, function(err) {

                if (err) {
                    let serviceResponse = fileUploader.prepareResponse(0, [], err);
                    deferred.reject(serviceResponse);
                }
                let serviceResponse = fileUploader.prepareResponse(1, [], "File has been deleted successfully.");
                deferred.resolve(serviceResponse);
            });
        } else {

            let serviceResponse = fileUploader.prepareResponse(0, [], "File is not exist ! so cant remove it !");
            deferred.reject(serviceResponse);
        }
        return deferred.promise;
    }
}