import React from "react";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const GradingSheetClass = () => {
  return (
    <div>
      <header className="relative font-semibold text-center">
        <div className="hidden">
          <h1>***REMINDERS***</h1>
          <span>
            1. Please take note that once you click the “SUBMIT GRADES” button
            you can no longer change the grades online.
          </span>
          <span>
            2. Request for grade changes can only be done through a letter of
            request addressed to the ______________________
          </span>
          <span>
            3. All “Final Grade” first should be filled up before clicking the
            “Submit Grades” button
          </span>
        </div>
        <div>
          <h1 className="py-4 text-2xl">Report of Grades</h1>
          <p>
            **acceptable grades 1.00 to 3.00, 3.00, INC- incomplete, DO -
            dropped officially, 1.0 - 1.00 1.5 - 1.50 2.0 - 2.00 2.5 - 2.50 3.0
            - 3.00 4.0 - 4.00 5.0 - 5.00
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="flex flex-row items-center px-4 py-2 my-2 text-white bg-maroon">
            <MdOutlineLocalPrintshop className="mr-2 w-7 h-7" />
            <span>Print</span>
          </button>
          <button className="flex flex-row items-center px-4 py-2 my-2 text-white bg-blue-600">
            <MdOutlineEmail className="mr-2 w-7 h-7" />
            <span>Submit Grades</span>
          </button>
        </div>
      </header>

      <main className="my-4">
        <div className="flex flex-row items-center justify-between text-center text-white bg-maroon">
          <div>
            <h1 className="font-semibold">Course Code</h1>
            <span>CSC 0413</span>
          </div>
          <div>
            <h1 className="font-semibold">Subject Title</h1>
            <span>CS Elective 1 (LEC)</span>
          </div>
          <div>
            <h1 className="font-semibold">Units</h1>
            <span>2</span>
          </div>
          <div>
            <h1 className="font-semibold">Term/A.Y.</h1>
            <span>1 / 2023</span>
          </div>
        </div>
        <table className="table text-center table-fixed">
          <thead>
            <tr>
              <th>Count</th>
              <th>Student No.</th>
              <th>Student Name</th>
              <th>College</th>
              <th>Year</th>
              <th className="hidden">Final Grade</th>
              <th className="hidden">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2020-00000</td>
              <td>STUDENT NAME 1</td>
              <td>BSCS</td>
              <td>4</td>
              <td className="hidden">
                <select name="" id="">
                  <option value="">1.00</option>
                  <option value="">1.25</option>
                  <option value="">1.50</option>
                  <option value="">1.75</option>
                  <option value="">2.00</option>
                  <option value="">2.25</option>
                  <option value="">2.50</option>
                  <option value="">2.75</option>
                  <option value="">3.00</option>
                </select>
              </td>
              <td className="hidden">
                <input type="text" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default GradingSheetClass;
