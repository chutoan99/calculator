function ImgBackGround(props) {
  const { listBackground, indexImg } = props;
  return (
    <div className="w-full h-full z-[-1] absolute top-0 bottom-0 right-0 left-0 overflow-y-hidden">
      <img
        src={require(`../../imgs/${listBackground[indexImg]}`)}
        className="w-[100vw] h-[100vh] z-10 bg-center"
        alt="bg"
      />
    </div>
  );
}

export default ImgBackGround;
