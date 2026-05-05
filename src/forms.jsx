import MAIN from "./images/MAIN.jpg";

function Myforms() {
  return (
    <div>
      <div
        className="bg-body-tertiary mt--15 p-5 rounded d-flex flex-column flex-md-row align-items-center col-sm-8 py-5 mx-auto"
        style={{ gap: "1rem" }}
      >
        {/* Text Section */}
        <div>
          <h1 className="display-5 fw-normal">Tell us your budget range.</h1>

          <p className="fs-5">
            <i className="bi bi-mouse me-2"></i>
            Click the button below and fill out the form.
          </p>

          <p style={{ fontWeight: "200" }}>You are one step away!</p>

          {/* Button triggers showing FillForm */}
          <button
            className="btn btn-dark btn-lg"
          >
            FILL THE FORM
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={MAIN}
            alt="SEC"
            className="img-fluid rounded"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Myforms;
