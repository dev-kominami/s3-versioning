let AWS = require('aws-sdk');
// config情報の取得
AWS.config.loadFromPath('./config.json');

// s3 sdkの設定
let s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})

bucket = process.argv[2];
key = process.argv[3];
versionId = process.argv[4];

let param = {
    Bucket: bucket,
    Key: key,
    VersionId: versionId
}

var file = require('fs').createWriteStream(`./${versionId}_${key}`);

s3.getObject(param).createReadStream().pipe(file)