import Words from "./Words";
import Typing from "./Typing";
import { useEffect,useState,useRef } from "react";

const Body = () => {
  const [nextKey, setNextKey] = useState('');
  const [currentKey, setCurrentKey] = useState('');
  const [keyCount, setKeyCount] = useState(1);
  const [totalCount,setTotalCount]=useState(1);

  const keyCountRef = useRef(keyCount);
  const totalCountRef = useRef(totalCount);

  const [start,setStart]=useState(true);
  const [showAccuracy,setShowAccuracy]=useState(false);
  const [accuracy,setAccuracy]=useState(0);

  const [countDown,setCountDown]=useState(0);
    
  useEffect(() => { // used to generate next Key very first time 
    setNextKey(generateRandomKey());
  }, []);
  
  useEffect(() => {
    keyCountRef.current = keyCount;
    totalCountRef.current = totalCount;
  }, [keyCount, totalCount]);

  

const generateRandomKey = () => { // generate function 
    const keys = 'asdfjkl;';
    return keys[Math.floor(Math.random() * keys.length)];
  };


const timer_starts=()=>{ // 1 minutes timer code is here
  setStart(false);
  console.log("Timer starts")
  setTimeout(() => {
    console.log("STOP Time UP");
    console.log("Total Key Press: " + totalCountRef.current);
    console.log("Total Key Count: " + keyCountRef.current);
    setShowAccuracy(true);
    setAccuracy(Math.floor((keyCountRef.current/totalCountRef.current) * 100))
  },300000)

}
const handleKeyPress = (key) => { // handling the key count in this function
    setCurrentKey(key);
    console.log("Typed Key" + key);
    if(key===nextKey){

        setKeyCount((count)=>count+1);
        console.log("keycount"+keyCount);
        setNextKey(generateRandomKey());
        setCurrentKey('');
    }
    setTotalCount((count)=>count+1);
    console.log("total count"+totalCount);
    if(start) timer_starts();
    setCountDown((count)=>{return count+1});
    console.log(countDown);
};

const restart=()=>{ // this function reset all the state variables
  setNextKey(generateRandomKey());
  setCurrentKey('');
  setKeyCount(0);
  setTotalCount(0);
  setStart(true);
  setShowAccuracy(false);
  setAccuracy(0);
  setCountDown(0);
}

  return (
    <>
    {
    showAccuracy?
     
      <div className="alert">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
              <h3 style={{"textAlign":"center"}}> <strong>Stop Times Up Your Time Limit of 5 minutes complete </strong></h3>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
    :null
    }
    

    
      <div className="container">
        
          <div className="left_class">
              <ul>
                <strong><li>What is Touch Typing</li></strong>
                <p>Touch typing is a method of typing without the use of the sense of sight, or simply by feeling the keyboard. However, the sense of touch is only slightly involved since this typing method is governed by muscle memory through rigorous training with the proper typing method. This way, the fingers get so used to typing that they instinctively go to the appropriate keys without the typist needing to see or even feel around the keyboard.</p>
                <strong><li>Rules of this game</li></strong>
                <p> In this game, you are given <strong>5 minutes</strong> to type as many alphabets as you can. The timer starts when you begin typing, and an alert will appear when the time is up. Your results, including accuracy and key counts, will be displayed on the right side of the page.
                </p>
              </ul>
          </div>

          <div className="middle_class">
              
              {
                showAccuracy==false?
                  <>
                    <Words nextKey={nextKey}/>
                    <Typing currentKey={currentKey} handleKeyPress={handleKeyPress} />
                  </>
                :
                null
              }
              
              {showAccuracy?
            <>
              <h3 style={{ textAlign: "center" }}>Your Result </h3>
              <ul>
                <li> <h3 style={{ textAlign: "center" }}>Accuracy : {accuracy} % </h3></li>
                <li><h4 style={{ textAlign: "center" }}>Total Key Count : {totalCount}</h4></li>
                <li> <h4 style={{ textAlign: "center" }}>Correct Key Count : {keyCount}</h4></li>
                <li> <h4 style={{ textAlign: "center" }}>Wrong Key Count : {totalCount - keyCount} </h4></li>
              </ul>
                <button type="button"  style={{ textAlign: "center" , marginLeft:"250px"}}  onClick={restart} className="btn btn-secondary">Restart</button>
              </>
            :
            <h2 style={{ textAlign: "center" }}>All the best !! Your's result shown here </h2>}
          </div>
      </div>
    </>
  );
};

export default Body;




