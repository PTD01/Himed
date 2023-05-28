import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-white h-[80vh] py-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Download Our App Here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div>
                <img
                  src={"/../../../images/bubble.gif"}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80vw] m-auto" />
    </div>
  );
}

export default Contact;
