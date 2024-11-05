import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contect">
      <div className="top-header">
        <h1>Review</h1>
        <span>You can send us a message here.</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>review</h2>
            <p>
              อุปกรณ์สำนักงาน ที่ขาดไม่ได้
              คืออุปกรณ์ที่จำเป็นต่อการทำงานในสำนักงาน
              และไม่สามารถมีความขาดแคลนได้
              เพื่อให้งานสำนักงานเป็นไปได้อย่างมีประสิทธิภาพ
              เมื่อเราต้องการเริ่มกิจการใดๆ
              การเตรียมอุปกรณ์เป็นสิ่งที่สำคัญอย่างมาก
              เนื่องจากอุปกรณ์สำนักงานเป็นอุปกรณ์ที่ช่วยให้เราทำงานได้อย่างสะดวกสบายและง่ายมากขึ้น
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="text-area">
              <textarea placeholder="Email"></textarea>
            </div>
            <div className="form-button">
              <button className="btn">
                Subscribe <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
