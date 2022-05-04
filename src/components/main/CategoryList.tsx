import React from "react";
import category_font from "../../static/image/category_font.svg"
const CategoryList: React.FC<{}>  = () => {
  const arr = [0, 0, 0, 0, 0];
  return (
    <>
      <div style={{margin:"40px auto", width:"fit-content"}}><img src={category_font} alt="" ></img> </div>
      <div
        style={{
          display: "flex",
          margin: "40px 0 45px 0",
          justifyContent: "center",
        }}
      >
        {arr.map(() => {
          return (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  background: "gray",
                  margin: "0 12px",
                }}
              ></div>
              <p style={{margin:"3px 0"}}>중식</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          margin: "0 0 50px 0",
          justifyContent: "center",
        }}
      >
        {arr.map(() => {
          return (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  background: "gray",
                  margin: "0 12px",
                }}
              ></div>
              <p>중식</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryList;
