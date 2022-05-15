import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  function setFullData(data) {
    setValues(data);
  }

  return {
    values,
    handleChange: (e) => {
      setValues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    setFullData,
  };
};
