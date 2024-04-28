"use client";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  action: string;
  type: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      action: "",
      type: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("localhost:8585/electricity/payment", data);
      console.log(res?.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-blue-400 h-[100vh] w-full flex justify-center items-center">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[60%] py-12 mx-auto min-h-[400px] rounded-2xl"
      >
        <div className="w-4/5 mx-auto mt-5 flex flex-col gap-y-8">
          <div className="mt-4 w-full flex flex-col">
            <label htmlFor="">Name</label>
            <input
              defaultValue=""
              {...register("name")}
              className="border-[1px] h-[50px] border-gray-400"
            />
            {errors.name && <span>This field is required</span>}
          </div>

          <div className="mt-4 w-full flex flex-col">
            <label htmlFor="">Action</label>
            <input
              {...register("action", { required: true })}
              className="border-[1px] border-gray-400  h-[50px]"
            />
            {errors.action && <span>This field is required</span>}
          </div>
          <div className="mt-4 w-full flex flex-col">
            <label htmlFor="">Type</label>
            <input
              {...register("type", { required: true })}
              className="border-[1px] border-gray-400  h-[50px]"
            />
            {errors.type && <span>This field is required</span>}
          </div>

          <input
            type="submit"
            className="mt-4 bg-[#C1C1C1]  h-[50px]  w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
