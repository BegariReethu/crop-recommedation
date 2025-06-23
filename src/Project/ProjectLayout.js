import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./ProjectLayout.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "./ResultContextProvider";

function ProjectLayout() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [, updateResult] = useContext(ResultContext);

  let [input, setInput] = useState("");

  let formSubmit = (inputObj) => {
    setInput(inputObj);
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (input) {
      axios
        .post("http://127.0.0.1:5000/predict", input)
        .then((response) => {
          console.log(response.data);
          updateResult(response.data);
          return navigate("/output");
        })
        .catch((error) => console.log(error));
    }
  }, [input, navigate, updateResult]);
  return (
    <div className="mm">
      <div className="m1">
        <h2>CROP RECOMMENDATION</h2>
      </div>
      <div className="main">
        <form className="mx-auto form" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label htmlFor="N" className="mt-1 font">
              Nitrogen
            </label>
            <input
              type="number"
              name="N"
              id="N"
              className="form-control"
              placeholder="0-150"
              {...register("N", { required: true, min: 0, max: 150 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 0</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 150</p>
            )}
          </div>
          <div>
            <label htmlFor="P" className="mt-2 font">
              Phosphorus
            </label>
            <input
              type="number"
              name="P"
              id="P"
              className="form-control"
              placeholder="0-150"
              {...register("P", { required: true, min: 0, max: 150 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 0</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 150</p>
            )}
          </div>
          <div>
            <label htmlFor="K" className="mt-2 font">
              Potasium
            </label>
            <input
              type="number"
              name="K"
              id="K"
              className="form-control"
              placeholder="0-210"
              {...register("K", { required: true, min: 0, max: 210 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 0</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 210</p>
            )}
          </div>
          <div>
            <label htmlFor="temp" className="mt-2 font">
              temperature
            </label>
            <input
              type="number"
              name="temp"
              id="temp"
              className="form-control"
              placeholder="0-50"
              {...register("temp", { required: true, min: 0, max: 50 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 0</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 50</p>
            )}
          </div>
          <div>
            <label htmlFor="humidity" className="mt-2 font">
              humidity
            </label>
            <input
              type="number"
              name="humidity"
              id="humidity"
              className="form-control"
              placeholder="5-100"
              {...register("Humidity", { required: true, min: 5, max: 100 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 5</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 100</p>
            )}
          </div>
          <div>
            <label htmlFor="ph" className="mt-2 font">
              Ph
            </label>
            <input
              type="number"
              name="ph"
              id="ph"
              className="form-control"
              placeholder="3-10"
              {...register("Ph", { required: true, min: 3, max: 10 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 3</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 10</p>
            )}
          </div>
          <div>
            <label htmlFor="rainfall" className="mt-2 font">
              rainfall
            </label>
            <input
              type="number"
              name="rainfall"
              id="rainfall"
              className="form-control"
              placeholder="20-300"
              {...register("Rainfall", { required: true, min: 20, max: 300 })}
            />
            {errors.N?.type === "required" && (
              <p className="text-danger">*required</p>
            )}
            {errors.N?.type === "min" && (
              <p className="text-danger">*min = 20</p>
            )}
            {errors.N?.type === "max" && (
              <p className="text-danger">*max = 300</p>
            )}
          </div>
          <div className="my-4">
            <button type="submit" className="button">
              Predict
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectLayout;
