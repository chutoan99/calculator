import './home.css';
import Toggle from '../toggle/index';
import Input from '../input/index';
import BackGround from '../backGround/index';
import ImgBackGround from '../imgBackGround/index';
import { useEffect, useState } from 'react';
import Button from '../button';
function Home() {
  // BACKGROUND LIST
  const listBackground = [
    'background-00.jpg',
    'background-01.jpg',
    'background-02.jpg',
    'background-03.jpg',
    'background-04.jpg',
    'background-05.jpg',
    'background-06.jpg',
    'background-07.jpg',
    'background-08.jpg',
    'background-09.jpg',
    'background-10.jpg',
    'background-11.jpg',
    'background-12.jpg',
    'background-13.jpg',
    'background-14.jpg',
    'background-15.jpg',
    'background-16.jpg',
    'background-17.jpg',
    'background-18.jpg',
    'background-19.jpg',
    'background-20.jpg',
    'background-21.jpg',
    'background-22.jpg',
    'background-23.jpg',
    'background-24.jpg',
    'background-25.jpg',
    'background-26.jpg',
    'background-27.jpg',
    'background-28.jpg',
    'background-29.jpg',
    'background-30.jpg',
    'background-31.jpg',
  ];

  const [indexImg, setIndexImg] = useState(JSON.parse(localStorage.getItem('indexImg')));
  const [showImg, setShowImg] = useState(true);
  const [statusToggle, setStatusToggle] = useState(
    JSON.parse(localStorage.getItem('statusToggle'))
  );
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handelKeyDown, true);
  }, []);

  const handelClickBtn = (e) => {
    setInput(input.concat(e.target.name));
  };
  const handleDelete = () => {
    setInput('');
    setResult('');
  };
  const handelResult = () => {
    try {
      setResult(eval(input));
      setInput('');
    } catch {
      setResult('Error');
      setInput('');
    }
  };

  const handelBack = () => {
    setInput(input.slice(0, input.length - 1));
  };

  const handelKeyDown = (e) => {
    if (e.key === 'Enter') {
      handelResult();
    } else if (e.key === 'Backspace') {
      handelBack();
    }
  };

  const handelChangeImgBackGround = (index) => {
    setIndexImg(index);
    // save selected image to localStorage
    localStorage.setItem('indexImg', JSON.stringify(index));
    setShowImg(false);
    setTimeout(() => {
      setShowImg(true);
    }, 1000);
  };
  const handelToggle = () => {
    if (statusToggle === 'wrapperWhite') {
      setStatusToggle('wrapperDark');
      localStorage.setItem('statusToggle', JSON.stringify('wrapperDark'));
    } else {
      setStatusToggle('wrapperWhite');
      localStorage.setItem('statusToggle', JSON.stringify('wrapperWhite'));
    }
  };

  return (
    <div className="w-[100%] h-[100%]" id="app">
      <ImgBackGround listBackground={listBackground} indexImg={indexImg}></ImgBackGround>
      <BackGround
        showImg={showImg}
        listBackground={listBackground}
        handelChangeImgBackGround={handelChangeImgBackGround}
      ></BackGround>
      <div className="flex items-center justify-center absolute w-[100vw] h-[100vh] ">
        <div
          className="sm:w-calculator sm:h-calculator px-[20px] pb-[2.188rem] pt-[20px]  text-[#232323] h-[100vh] sm:rounded-[16px]"
          id={statusToggle}
        >
          <div className="grid w-full h-[100%]">
            <Toggle handelToggle={handelToggle}></Toggle>
            <Input input={input} result={result} setInput={setInput}></Input>
            <Button
              handleDelete={handleDelete}
              handelBack={handelBack}
              handelClickBtn={handelClickBtn}
              handelResult={handelResult}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
