import React, { useRef, useId } from "react";
import Select from "react-select";

export default function FontSelector({ font, setFont }) {
  const selectRef = useRef();
  const options = [
    { value: "Georgia", label: "Georgia" },
    { value: "Bookerly", label: "Bookerly" },
    {
      value: "ProximaNova",
      label: "Proxima Nova",
    },
    { value: "Roboto", label: "Roboto" },
    { value: "SFMono", label: "SF Mono" },
    { value: "Courier", label: "Courier" },
  ];
  const selectorStyles = {
    menu: (provided) => ({
      ...provided,
      width: "max-content",
      minWidth: "100%",
    }),
    control: (provided) => ({
      ...provided,
      width: "11.5rem",
      fontFamily: font,
    }),
    option: (provided, { data: { value } }) => ({
      ...provided,
      fontFamily: value,
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
      value={options.find(({ value }) => value === font)}
      instanceId={useId()}
      styles={selectorStyles}
      name="Font"
      options={options}
      onChange={handleChange}
      filterOption={(option) => option.value !== font}
      isSearchable={false}
    />
  );
}
