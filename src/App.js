import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['서브웨이', '면탐정', '군마왕족발']);
  let [heart, changeHeart] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true);
  let [currentTitle,ChangecurrentTitle] = useState('제목을 선택해주세여');
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '30px' }}>블로그임</h4>
      </div>

      <button onClick={() => {
        let newarray = [...글제목];
        newarray = newarray.sort((a, b) => a > b ? 1 : -1);
        글제목변경(newarray);

      }}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={function () { changeHeart(heart + 1) }}>💗</span> {heart} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          setModal(modal + 1);
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (name, i) {
          return <div className='list' key={i}>
            <h4 style={{ display: 'inline-block' }} onClick={() => {
              // console.log(i);
              ChangecurrentTitle(글제목[i]);
              if (currentTitle == 글제목[i]) {
                setModal(!(modal));
              }
              else if (currentTitle != 글제목[i] && modal == false) {
                setModal(true);
              }
              console.log(modal)
            }}> {name}&nbsp; </h4>

            <span onClick={function (e) {
              e.stopPropagation();

              let newheart = [...heart];
              newheart[i] = heart[i] + 1;
              changeHeart(newheart);
            }}>💗</span> {heart[i]}
            <button style={{marginLeft: '20px' }} onClick={()=> {
              let newarray = [...글제목];
              newarray.splice(i,1);
              let newnewarray = [...newarray];
              글제목변경(newnewarray);
            }}>삭제</button>
            <p>2월 17일 발행</p>
          </div>
        })

      }

      <input onChange={(e)=> {입력값변경(e.target.value)}}></input> <button onClick={()=>{
        let newarray = [...글제목];
        newarray.unshift(입력값);
        let newnewarray = [...newarray];
        글제목변경(newnewarray);


        let newheart = [...heart];
        newheart.unshift(0);
        let newneheart = [...newheart];
        changeHeart(newneheart);

      }}>전송</button>

      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}
      {
        modal == true ? <MyModal color={'gray'} currentTitle={currentTitle} myfunc={() => {
          let newarray = [...글제목];
          newarray[0] = '여자코트추천';
          글제목변경(newarray);
        }} /> : null
      }
    </div>
  );
}

function MyModal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.currentTitle}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.myfunc}>글수정</button>
    </div>
  )
}

export default App;
