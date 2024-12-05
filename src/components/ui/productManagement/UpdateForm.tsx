/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import handleImageUpload from "../../../utils/handleImageUpload";
import productApi from "../../../redux/features/product/productApi";
import { CategoryData } from "../../../utils/staticData";
import { Button } from "flowbite-react";

const UpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //get specific data
  const { data } = productApi.useGetSpecificProductQuery(id);
  //update product
  const [updateProduct] = productApi.useUpdateProductMutation();

  const { register, handleSubmit } = useForm({
    values: data?.data,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
  });
  const onSubmit = async (data: any) => {
    const file = data.image[0];
    const imageData = await handleImageUpload(file);
    const image = imageData?.display_url;

    const { name, price, category, description, stock } = data;
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
      stock: stock,
      image: image ? image : null,
    };
    await updateProduct({ id, product });
    toast.success("Product updated successfully");
    navigate("/products/management");
  };
  return (
    <>
      <div className="bg-lightBg text-secondary min-h-screen">
        <div className="max-w-4xl mx-auto px-3 lg:px-0 py-10">
          <div>
            <div className="bg-base-100 w-full h-full shadow-2xl rounded-lg">
              <h1 className="text-3xl font-bold ml-6 pt-6 text-center">
                Update Product
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    {...register("price")}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    {...register("category")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select Category
                    </option>
                    {CategoryData?.map((category) => (
                      <option>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Stock</span>
                  </label>
                  <input
                    type="number"
                    {...register("stock")}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 border rounded"
                    {...register("image")}
                  />
                </div>
                <div className="form-control mt-6 w-1/4">
                  <Button color="blue" className="text-sm lg:text-base">
                    UPDATE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
