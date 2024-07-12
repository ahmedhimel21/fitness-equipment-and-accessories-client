const handleImageUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=714124e4f93a40200764049dd9c6a386",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export default handleImageUpload;
