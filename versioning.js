let AWS = require('aws-sdk');
// config情報の取得
AWS.config.loadFromPath('./config.json');

// s3 sdkの設定
let s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})


s3.listBuckets(function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Buckets);
    }
  });
