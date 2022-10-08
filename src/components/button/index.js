import './button.css';

function Button(props) {
  const { handleDelete, handelBack, handelClickBtn, handelResult } = props;
  return (
    <div className="grid grid-cols-4 sm:relative">
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handleDelete}
      >
        <i className="fa-solid fa-c text-number" onClick={handleDelete}></i>
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelBack}
      >
        <div className="w-full h-full flex items-center justify-center" onClick={handelBack}>
          <i className="fa-sharp fa-solid fa-delete-left  text-number"></i>
        </div>
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        name="("
        onClick={handelClickBtn}
      >
        (
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        name=")"
        onClick={handelClickBtn}
      >
        )
      </button>

      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="7"
      >
        7
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="8"
      >
        8
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="9"
      >
        9
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="/"
      >
        &divide;
      </button>

      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="4"
      >
        4
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="5"
      >
        5
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        name="6"
        onClick={handelClickBtn}
      >
        6
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="*"
      >
        &times;
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="1"
      >
        1
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="2"
      >
        2
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="3"
      >
        3
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="-"
      >
        -
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="."
      >
        &middot;
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="0"
      >
        0
      </button>
      <button
        className="text-white w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
      >
        &permil;
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn"
        onClick={handelClickBtn}
        name="+"
      >
        +
      </button>
      <button className="text-white w-full h-btn text-btn bg-transparent hover-btn">
        <i className="fa-solid fa-calculator text-number"></i>
      </button>
      <button
        className=" text-number w-full h-btn text-btn bg-transparent hover-btn flex justify-center items-center col-start-2 col-end-5"
        onClick={handelResult}
      >
        =
      </button>
    </div>
  );
}

export default Button;
