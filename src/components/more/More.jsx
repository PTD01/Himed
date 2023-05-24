import React from "react";
import styles from "../more/more.module.css";

function More() {
  return (
    <div className={styles.more}>
      <div className="flex flex-col w-full lg:flex-row content-center">
        <div className="grid flex-grow h-56   card bg-base-300 rounded-box place-items-center">
          Rejoin our Program
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-56 card bg-base-300 rounded-box place-items-center">
          Stay Updated
        </div>
      </div>
    </div>
  );
}

export default More;
