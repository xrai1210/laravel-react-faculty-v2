import React from "react";
import Button from "../../components/Button";
import { LiaCheckCircleSolid } from "react-icons/lia";

const ChangePassword = () => {
  return (
    <div className="">
      <header className="relative font-semibold text-center">
        <h1 className="py-4 text-2xl">Change Password</h1>
      </header>

      <main className="items-center justify-center w-full py-10 mx-auto rounded lg:shadow lg:bg-white lg:flex lg:w-4/5">
        {/* main left */}
        <div className="flex-col items-center p-2 lg:w-1/2 lg:flex">
          <div>
            <h1 className="mb-4 text-xl font-semibold md:text-2xl">
              Password must contain:
            </h1>
            <div className="flex flex-row items-start my-2 font-semibold">
              <LiaCheckCircleSolid color="green" className="mr-2 w-7 h-7" />
              <span>At least 6 characters</span>
            </div>

            <div className="flex flex-row items-start my-2 font-semibold">
              <LiaCheckCircleSolid color="green" className="mr-2 w-7 h-7" />
              <span>At least 1 upper case letter (A-Z)</span>
            </div>

            <div className="flex flex-row items-start my-2 font-semibold">
              <LiaCheckCircleSolid color="green" className="mr-2 w-7 h-7" />
              <span>At least 1 lower case letter (a-z)</span>
            </div>

            <div className="flex flex-row items-start my-2 font-semibold">
              <LiaCheckCircleSolid color="green" className="mr-2 w-7 h-7" />
              <span>At least 1 number (0-9)</span>
            </div>
          </div>
        </div>

        {/* main right */}
        <div className="p-2 my-4 lg:w-1/2">
          <form action="">
            {/* current password */}
            <div className="my-2">
              <div className="flex flex-col">
                <label htmlFor="">Current Password:</label>
                <input
                  className="p-2 rounded lg:bg-gray-200"
                  type="password"
                  name=""
                  id=""
                />
              </div>
              <h1 className="my-2 font-medium text-right text-red-600">
                Forgot Password?
              </h1>
            </div>

            {/* new password */}
            <div className="my-2">
              <div className="flex flex-col">
                <label htmlFor="">New Password:</label>
                <input
                  className="p-2 rounded lg:bg-gray-200"
                  type="password"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Confirm New Password:</label>
                <input
                  className="p-2 rounded lg:bg-gray-200"
                  type="password"
                  name=""
                  id=""
                />
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-col justify-center lg:items-center">
              <Button
                color="green-600"
                label="Save"
                newClass="text-white lg:w-32"
              />
              <Button
                color="red-600"
                label="Cancel"
                newClass="text-white lg:w-32"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
