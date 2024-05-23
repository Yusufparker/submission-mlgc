const tf = require("@tensorflow/tfjs-node");
async function loadModel() {
  return tf.loadGraphModel(
    "https://storage.googleapis.com/bucket-yusuf-ml-dicoding/models/model.json"
  );
}
module.exports = loadModel;
