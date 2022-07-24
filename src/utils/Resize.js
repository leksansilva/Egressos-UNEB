import Compress from "compress.js";

const compress = new Compress();

export default async function Resize(file) {
  const resizedImage = await compress.compress([file], {
    size: 0.08,
    quality: 1,
    maxWidth: 127,
    maxHeight: 162,
    resize: true,
  });
  const img = resizedImage[0];
  const base64str = img.data;
  const imgExt = img.ext;
  const resizedFile = Compress.convertBase64ToFile(base64str, imgExt);
  return resizedFile;
}
