import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { simulate } from "../../actions/simulationActions";

const SimulationForm = () => {
  const [formData, setFormData] = useState({
    x0: "",
    y0: "",
    z0: "",
    sigma: "",
    rho: "",
    beta: "",
    delta_t: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(simulate(formData));
    setFormSubmitted(true);
  };

  const validateInput = (value) => {
    // Check if the input is empty
    if (value.trim() === "") {
      return true; // Input is empty, no need to apply "is-invalid" class
    }
    // Check if the parsed float value is a valid number
    return !isNaN(parseFloat(value));
  };

  // Conditionally define the classes for the container
  const containerClasses = `container mt-3 p-3 ${
    formSubmitted ? "rounded-top" : "rounded"
  } bg-light`;

  return (
    <form onSubmit={handleSubmit}>
      <div className={containerClasses}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0">AI Labs | Full Stack Case Study</h2>
          <button type="submit" className="btn btn-primary ">
            Run
          </button>
        </div>

        <div className="container mt-3 p-1 rounded">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th
                  colSpan="7"
                  className="text-left"
                  style={{ backgroundColor: "#ccc" }}
                >
                  Inputs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="x0Input" className="form-label">
                    x0
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.x0) ? "" : "is-invalid"
                    }`}
                    id="x0Input"
                    name="x0"
                    value={formData.x0}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="y0Input" className="form-label">
                    y0
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.y0) ? "" : "is-invalid"
                    }`}
                    id="y0Input"
                    name="y0"
                    value={formData.y0}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="z0Input" className="form-label">
                    z0
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.z0) ? "" : "is-invalid"
                    }`}
                    id="z0Input"
                    name="z0"
                    value={formData.z0}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="sigmaInput" className="form-label">
                    Sigma
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.sigma) ? "" : "is-invalid"
                    }`}
                    id="sigmaInput"
                    name="sigma"
                    value={formData.sigma}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="rhoInput" className="form-label">
                    Rho
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.rho) ? "" : "is-invalid"
                    }`}
                    id="rhoInput"
                    name="rho"
                    value={formData.rho}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="betaInput" className="form-label">
                    Beta
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.beta) ? "" : "is-invalid"
                    }`}
                    id="betaInput"
                    name="beta"
                    value={formData.beta}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <label htmlFor="deltaTInput" className="form-label">
                    Delta t
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validateInput(formData.delta_t) ? "" : "is-invalid"
                    }`}
                    id="deltaTInput"
                    name="delta_t"
                    value={formData.delta_t}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default SimulationForm;
