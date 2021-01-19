let AWS = require('aws-sdk');
// config情報の取得
AWS.config.loadFromPath('./config.json');

// s3 sdkの設定
let s3 = new AWS.S3({
    apiVersion: '2006-03-01'
})

bucket = process.argv[2];
console.log(bucket)

let param = {
    Bucket: bucket
}


s3.listObjectsV2( param, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        data.Contents.forEach(ele => {
            let param = {
                Bucket: bucket,
                Prefix: ele.Key
            }
            s3.listObjectVersions(param,function(err, data) {
                if(err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            })
        });
    }
});