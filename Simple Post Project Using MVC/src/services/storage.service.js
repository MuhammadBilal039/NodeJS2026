const { ImageKit } = require("@imagekit/nodejs/client.js");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (buffer) => {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });

  return result;
};

module.exports = uploadFile;
