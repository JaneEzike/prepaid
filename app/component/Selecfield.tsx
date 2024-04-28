"use client";
import Select from "react-select";
import React, { useState } from "react";

const Selecfield = ({ selectedOption, options, onChange }: any) => {
  return (
    <div>
      <Select
        value={selectedOption}
        onChange={(selectedValue) => onChange(selectedValue)}
        options={options}
        className="w-full h-50"
      />
    </div>
  );
};

export default Selecfield;
