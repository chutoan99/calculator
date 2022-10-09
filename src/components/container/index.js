import './home.css';
import Button from '../button/index';
import Input from '../input/index';
import Toggle from '../toggle/index';
import BackGround from '../backGround/index';
import ImgBackGround from '../imgBackGround/index';
import { useEffect, useState } from 'react';

function Home() {
  const [indexImg, setIndexImg] = useState(JSON.parse(localStorage.getItem('indexImg')) || 0);
  const [showImg, setShowImg] = useState(true);
  const [statusToggle, setStatusToggle] = useState(
    JSON.parse(localStorage.getItem('statusToggle')) || 'wrapperDark'
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
    console.log(statusToggle);
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
      <ImgBackGround indexImg={indexImg}></ImgBackGround>
      <BackGround
        showImg={showImg}
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
