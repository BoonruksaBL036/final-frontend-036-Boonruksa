import React from "react";
import product1 from "../assets/images/pen.jpg";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About</h1>
      </div>
      <div className="row">
        {/** About Me*/}
        <div className="col">
          <div className="about-info">
            <h3>Office Shop</h3>
            <p>
              อุปกรณ์สำนักงาน ของใช้หลักที่จำเป็น สำหรับงานธุรกิจทุกประเภท
              ไม่ว่าจะเป็นองค์กรหน่วยงานภาครัฐ, บริษัท, หน่วยงานต่าง ๆ
              รวมถึงสถานศึกษา ล้วนแล้วแต่ต้องใช้
              อุปกรณ์สำนักงานเพื่อช่วยอำนวยความสะดวกในการทำงานให้กับคุณ
              และช่วยเปลี่ยนเรื่องยากๆ ให้เป็นเรื่องง่าย ๆ ได้ทันที
            </p>
          </div>
        </div>
        {/** Skills*/}
        <div className="col">
          <div className="skills-box">
            <div className="image">
              <img src={product1} alt="product1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
