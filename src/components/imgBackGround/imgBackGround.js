function ImgBackGround(props) {
  const { listBackground, indexImg } = props;
  return (
    <div className="w-full h-full z-[-1] absolute top-0 left-00 right-0 left-0">
      <img
        src={require(`../../imgs/${listBackground[indexImg]}`)}
        className="w-full h-full z-10 bg-center"
        alt="bg"
      />
    </div>
  );
}
export default ImgBackGround;
