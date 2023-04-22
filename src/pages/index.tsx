import React from "react";

function index() {
  return (
    <div>
      <nav
        className="items-center hover:
      bg-neutral text-neutral-content/80 p-4 px-12 flex justify-between transition-all"
      >
        <div className="text-primary text-4xl font-bold italic uppercase tracking-wide ">
          logo
        </div>
        <div className="flex gap-4">
          <a href="#" className="btn">
            Our goals
          </a>
          <a href="#" className="btn ">
            Programs
          </a>
          <a href="#" className="btn ">
            Past students
          </a>
          <a href="#" className="btn ">
            Diaspora
          </a>
        </div>
      </nav>

      <h1 className="font-bold text-4xl">Hello</h1>
      <button
        data-tip="please don't click me"
        className="tooltip p-2 border rounded-xl hover:bg-primary-focus active:shadow-none transition-all duration-300 hover:shadow-xl bg-primary text-primary-content px-8"
      >
        click
      </button>

      <button className="btn btn-primary normal-case btn-outline">click</button>

      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin, <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
      <input type="text" className="input input-bordered w-full mt-4" />
    </div>
  );
}

export default index;
