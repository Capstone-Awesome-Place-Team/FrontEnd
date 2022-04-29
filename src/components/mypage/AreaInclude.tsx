import mark from "../../static/image/mark.svg";
const AreaInclude : React.FC<{dummyArea:string[]}> =(props)=>{
    console.log(props)
    const {dummyArea} = props;
    
    return(<>
    <img src={mark} style={{ position:"relative", left:"145px",top:"70px", visibility:dummyArea.includes("은평구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"190px",top:"40px", visibility:dummyArea.includes("강북구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"200px",top:"20px", visibility:dummyArea.includes("도봉구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"210px",top:"30px", visibility:dummyArea.includes("노원구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-50px",top:"130px", visibility:dummyArea.includes("강서구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"110px",top:"90px", visibility:dummyArea.includes("성북구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"10px",top:"120px", visibility:dummyArea.includes("서대문구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-30px",top:"150px", visibility:dummyArea.includes("마포구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"0px",top:"170px", visibility:dummyArea.includes("용산구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"0px",top:"140px", visibility:dummyArea.includes("중구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"25px",top:"110px", visibility:dummyArea.includes("동대문구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-10px",top:"150px", visibility:dummyArea.includes("성동구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"15px",top:"100px", visibility:dummyArea.includes("중랑구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-10px",top:"150px", visibility:dummyArea.includes("광진구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-270px",top:"190px", visibility:dummyArea.includes("양천구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-240px",top:"190px", visibility:dummyArea.includes("영등포구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"170px",top:"170px", visibility:dummyArea.includes("동작구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"90px",top:"220px", visibility:dummyArea.includes("금천구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"110px",top:"220px", visibility:dummyArea.includes("관악구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"145px",top:"190px", visibility:dummyArea.includes("서초구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"170px",top:"180px", visibility:dummyArea.includes("강남구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"200px",top:"170px", visibility:dummyArea.includes("송파구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"210px",top:"120px", visibility:dummyArea.includes("강동구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"15px",top:"70px", visibility:dummyArea.includes("종로구")?"visible":"hidden"}} alt="mark"></img>
    <img src={mark} style={{ position:"relative", left:"-120px",top:"180px", visibility:dummyArea.includes("구로구")?"visible":"hidden"}} alt="mark"></img>
     </>)
}

export default AreaInclude;