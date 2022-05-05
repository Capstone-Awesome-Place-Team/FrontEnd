import React from "react";
import more_button from "../../static/image/more_button.svg";
const LoadMore: React.FC<{loadMore:Function}> = (props)=>{
    const {loadMore} =props
    return(<div style={{textAlign:"center", margin:"36px 0 0 0"}}><img onClick={()=>loadMore()} src={more_button} alt=""></img></div>)
}

export default LoadMore;