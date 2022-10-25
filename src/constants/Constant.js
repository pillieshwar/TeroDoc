module.exports = {
  REGION: "us-east-1",
  S3_BUCKET: "sop-bucket-storage-for-pdf",
  S3_SUFFIX:
    new Date().getUTCFullYear().toString() +
    new Date().getUTCMonth().toString() +
    new Date().getUTCDate().toString() +
    new Date().getUTCHours().toString() +
    new Date().getUTCMinutes().toString() +
    new Date().getUTCSeconds().toString() +
    new Date().getUTCMilliseconds().toString(),
  SOP_PAGE_API_GATEWAY:
    "https://e7q2a20ulk.execute-api.us-east-1.amazonaws.com/prod/hello?q=",
  REVIEW_REQUEST_PAGE_API_GATEWAY:
    "https://u4zrqpix5h.execute-api.us-east-1.amazonaws.com/prod/",
};
