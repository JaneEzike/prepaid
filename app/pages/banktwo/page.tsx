"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Selecfield from "@/app/component/Selecfield";
export default function PageTwo() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<any>(null);
  interface optType {
    value: string;
    label: string;
  }
  const options: optType[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ];
  type FormValues = {
    banks?: {
      value?: string; // Make value optional if necessary
    };
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data?.banks?.value);
    switch (data?.banks?.value) {
      case "chocolate":
        console.log("Selected: Chocolate");
        router.push("form");
      case "strawberry":
        console.log("Selected: Strawberry");
        router.push("form");
        break;
      default:
        console.log("Unknown selection");
        break;
    }
  };

  return (
    <main className="flex bg-red-400 h-[100vh] w-full items-center justify-center ">
      <div className="w-[50%] min-h-[250px] bg-white rounded-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 mx-auto mt-16 h-[50px]"
        >
          <Controller
            control={control}
            name="banks"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Selecfield
                value={value}
                defaultValue={selectedOption}
                onChange={onChange}
                options={options}
              />
            )}
          />
          {errors.banks && <span>This field is required</span>}

          <input
            type="submit"
            className="text-center h-[50px] mt-10 w-full bg-[#C1C1C1] cursor-pointer"
          />
        </form>
      </div>
    </main>
  );
}
