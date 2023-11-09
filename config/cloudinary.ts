import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dcvmniy0n", // TODO: Ganti dengan cloudname-mu
  api_key: "788257473194769", // TODO: Ganti dengan API Key-mu
  api_secret: "gTWELQgv7C7zQB20WFvXdH_GqKw", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

export default cloudinary;
