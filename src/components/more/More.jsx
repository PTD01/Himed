import React from "react";
import styles from "../more/more.module.css";

function More() {
  return (
    <div className={styles.more}>
      <div className="flex sticky z-0 flex-col w-full lg:flex-row content-center">
        <div className="grid flex-grow h-56 text-3xl  card bg-primary rounded-box place-items-center">
          Ready to join our Program?
          <button className={styles.but__white}>Start enrollment</button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-56 card text-black text-3xl bg-white shadow-2xl rounded-box place-items-center">
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
