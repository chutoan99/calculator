function BackGround(props) {
  const { listBackground, handelChange } = props;
  return (
    <nav class="navbar navbar-dark fixed-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header flex flex-col ">
            <h5 class="offcanvas-title text-center text-white" id="offcanvasDarkNavbarLabel">
              Change Background
            </h5>
            <div className="max-h-[100vh] overflow-y-auto py-[20px]">
              {listBackground.map((item, index) => (
                <div
                  className="w-full gap-[5px] p-[5px] shrink-0"
                  key={index}
                  onClick={() => handelChange(index)}
                >
                  <img
                    src={require(`../../imgs/${item}`)}
                    alt="backGround"
                    className="w-full h-full rounded-[20px]  hover-img"
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default BackGround;
