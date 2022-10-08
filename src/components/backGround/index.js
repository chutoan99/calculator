import './backGround.css';

function BackGround(props) {
  const { listBackground, handelChangeImgBackGround, showImg } = props;

  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid sm:absolute sm:top-[100%]">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {showImg ? (
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="overflow-y-auto">
              <div className="offcanvas-header flex flex-col shrink-0">
                <h5
                  className="offcanvas-title text-center text-white"
                  id="offcanvasDarkNavbarLabel"
                >
                  For Web
                </h5>
                <div className="max-h-[100vh] py-[20px] grid grid-cols-2 shrink-0">
                  {listBackground.map((item, index) => (
                    <>
                      {index >= 0 && index < 10 ? (
                        <div
                          className="w-full h-full gap-[5px] p-[5px]"
                          key={index}
                          onClick={() => handelChangeImgBackGround(index)}
                        >
                          <img
                            src={require(`../../imgs/${item}`)}
                            alt="backGround"
                            className="w-[100%] h-[100%] rounded-[10px]  hover-img"
                          ></img>
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
              </div>
              <div className="offcanvas-header flex flex-col  shrink-0">
                <h5
                  className="offcanvas-title text-center text-white"
                  id="offcanvasDarkNavbarLabel"
                >
                  For MB
                </h5>
                <div className="max-h-[100vh] py-[20px] grid grid-cols-2  ">
                  {listBackground.map((item, index) => (
                    <>
                      {index >= 11 && index < 27 ? (
                        <div
                          className="w-full h-full gap-[5px] p-[5px]"
                          key={index}
                          onClick={() => handelChangeImgBackGround(index)}
                        >
                          <img
                            src={require(`../../imgs/${item}`)}
                            alt="backGround"
                            className="w-[100%] h-[100%] rounded-[10px]  hover-img"
                          ></img>
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
              </div>
            </div>

            <></>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
export default BackGround;
