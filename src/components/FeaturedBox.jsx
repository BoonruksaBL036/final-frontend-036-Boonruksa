import React from "react";
import avatar from "../assets/images/officelogo.jpg";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card"></div>
        <div className="featured-name">
          Welocome to <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            อุปกรณ์สำนักงาน ของใช้หลักที่จำเป็น สำหรับงานธุรกิจทุกประเภท
            ไม่ว่าจะเป็นองค์กรหน่วยงานภาครัฐ, บริษัท, หน่วยงานต่าง ๆ
            รวมถึงสถานศึกษา ล้วนแล้วแต่ต้องใช้ อุปกรณ์สำนักงาน
            เพื่อช่วยอำนวยความสะดวกในการทำงานให้กับคุณ และช่วยเปลี่ยนเรื่องยาก ๆ
            ให้เป็นเรื่องง่าย ๆ ได้ทันที
          </p>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/o_obo70l?igsh=Ymk0Y3h5dHptcTc2">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/boonruksa.winanon.5?mibextid=LQQJ4d">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/FAYRESU">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
