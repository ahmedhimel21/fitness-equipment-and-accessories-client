const handleImageUpload = async (file: string | Blob) => {
  // console.log(process.env.VITE_IMGBB_API_KEY);
  const secretKey = import.meta.env.VITE_IMGBB_KEY;
  console.log(secretKey);

  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${secretKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data?.data;
  } catch (err) {
    console.log(err);
  }
};
export default handleImageUpload;
