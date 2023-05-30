import React from "react";
import styles from "../more/more.module.css";

function More() {
  return (
    <div className={styles.more}>
      <div className="flex flex-col w-full lg:flex-row content-center md:flex-row pt-10 md:content-center items-center">
        <div className="grid flex-grow flex-1 h-56 text-3xl bg-[#2196F3] card rounded-box place-items-center">
          Ready to join our Program?
          <button className="btn bg-white text-slate-600 btn-lg rounded-lg  border-0">
            Start the enrollment
          </button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow flex-1 h-56 card text-black text-3xl bg-white shadow-2xl rounded-box place-items-center">
          Stay Updated
          <div className="flex gap-6">
            <button className="btn btn-primary">Facebook</button>
            <button className="btn btn-error">Youtube</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
