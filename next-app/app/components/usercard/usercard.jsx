import React from "react";
import { HiUser } from "react-icons/hi2";
const Usercard = (props) => {
  const { username, email } = props.user;
  return (
    <>
      {/*<!-- Component: User profile card --> */}
      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              <span>
                <HiUser />
              </span>
              {username}{" "}
            </h3>
            <p className=" text-slate-400">{email}</p>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}
        <div className="flex justify-end gap-2 p-6 pt-0"></div>
      </div>
    </>
  );
};

export default Usercard;
