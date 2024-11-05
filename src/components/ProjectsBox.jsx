import React from "react";
import product1 from "../assets/images/pen.jpg";
import product2 from "../assets/images/paper.jpg";
import product3 from "../assets/images/fam.jpg";
import product4 from "../assets/images/clock.jpg";
import product5 from "../assets/images/com.jpg";
import product6 from "../assets/images/home.jpg";
const ProjectsBox = () => {
  return (
    <section className="section" id="project">
      <div className="top-header">
        <h1>Popular</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <h3>อุปกรณ์การเขียนและลบคำผิด</h3>
          <div className="image">
            <img src={product1} alt="product1" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div className="project-box">
          <h3>ผลิตภัณฑ์กระดาษ</h3>
          <div className="image">
            <img src={product2} alt="product2" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div className="project-box">
          <h3>แฟ้มและอุปกรณ์จัดเก็บเอกสาร</h3>
          <div className="image">
            <img src={product3} alt="product3" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div className="project-box">
          <h3>อุปกรณ์สำนักงานอิเล็กทรอนิกส์</h3>
          <div className="image">
            <img src={product4} alt="product4" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div className="project-box">
          <h3>ผลิตภัณฑ์สำหรับคอมพิวเตอร์</h3>
          <div className="image">
            <img src={product5} alt="product5" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div className="project-box">
          <h3>เฟอร์นิเจอร์สำนักงาน</h3>
          <div className="image">
            <img src={product6} alt="product6" />
          </div>
          <i class="fa-solid fa-cart-plus"></i>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
