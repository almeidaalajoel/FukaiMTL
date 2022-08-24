import React, { useRef } from "react";
import Select from "react-select";

export default function FontSelector({ font, setFont }) {
  const selectRef = useRef();
  const options = [
    { value: "serif", label: "Serif" },
    { value: "sans", label: "Sans" },
    { value: "mono", label: "Mono" },
    { value: "Bookerly", label: "Bookerly" },
    {
      value: "ProximaNova",
      label: "Proxima Nova",
    },
  ];
  const selectorStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "max-content",
      minWidth: "100%",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "12rem",
      fontFamily: font,
    }),
    option: (provided, { data: { value } }) => ({
      ...provided,
      fontFamily: value,
      backgroundColor: "red",
    }),
  };
  const handleChange = ({ value }) => {
    selectRef.current.blur();
    if (typeof window !== "undefined") {
      localStorage.setItem("font", value);
      setFont(value);
    }
  };

  return (
    <Select
      ref={selectRef}
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      defaultValue={options.find(({ value }) => value === font)}
      styles={selectorStyles}
      name="Font"
      options={options}
      onChange={handleChange}
      filterOption={(option) => option.value !== font}
      isSearchable={false}
    />
  );
}
