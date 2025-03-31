const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "backendwithayush",
  api_key: "288718811576242",
  api_secret: "APNH0pbAQQLM_0hf3eHytFLsRjE", // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // Upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    // console.log(
    //   "File has been successfully uploaded on Cloudinary",
    //   response.url
    // );
    // console.log("Cloudinary REPOSNSE",response)
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the upload operation failed
    return null;
  }
};

// Upload an image
(async () => {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    );
    // console.log(uploadResult);
  } catch (error) {
    console.log(error);
  }
})();

// Correct CommonJS export
module.exports = { uploadOnCloudinary };
