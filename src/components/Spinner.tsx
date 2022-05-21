import spinner from "../static/image/spinner.gif"

const Spinner:React.FC = ()=>{
    return (<div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"  }}>
    <img src={spinner} alt="" width="100px"></img>
  </div>)
}

export default Spinner;


