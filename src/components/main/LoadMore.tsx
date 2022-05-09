import React from "react";
import styled from "styled-components";
import more_button from "../../static/image/more_button.svg";
const LoadMore: React.FC<{ loadMore: Function }> = (props) => {
  const { loadMore } = props;
  return (
    <Div>
      <Img onClick={() => loadMore()} src={more_button} alt=""></Img>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  margin: 20px 0;
  @media (max-width: 576px) {
    margin: 0 0 10px;
  }
`;

const Img = styled.img`
  @media (max-width: 576px) {
    width: 130px;
  }
`;

export default LoadMore;
