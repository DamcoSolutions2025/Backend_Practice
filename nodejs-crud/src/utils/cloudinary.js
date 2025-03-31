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
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log(
      "File has been Successfully uploaded on cloudinary",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operations got failed
    return null;
  }
};

// Upload an image
const uploadResult = await cloudinary.uploader
  .upload(
    "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
    {
      public_id: "shoes",
    }
  )
  .catch((error) => {
    console.log(error);
  });

console.log(uploadResult);
 export  {uploadOnCloudinary}