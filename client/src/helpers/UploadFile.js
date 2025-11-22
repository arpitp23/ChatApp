// ...existing code...
const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  // include the preset value from env
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Upload failed: ${response.status} ${errText}`);
  }

  const responseData = await response.json();
  return responseData;
};

export default uploadFile;
// ...existing code...