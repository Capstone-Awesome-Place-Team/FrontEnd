import React from 'react';

const BodyGlobal = (props)=>{
    return(<div style={{
        margin:"100px 0px"
    }}>
        {props.children}
    </div>)
}

export default BodyGlobal;