import React from "react";
import PLMLogo from "../../assets/PLM-logo.png";

const GradingSheetReport = () => {
  return (
    <div className="p-2 bg-white">
      <header className="relative flex flex-row items-center justify-center font-semibold text-center">
        <div>
          <img className="w-16" src={PLMLogo} alt="PLM Logo" />
        </div>
        <div>
          <h1 className="text-lg">PAMANTASAN NG LUNGSOD NG MANILA</h1>
          <p><i>University of the City of Manila</i></p>
          <p><i>Intramuros, Manila</i></p>
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
          <thead className="text-white bg-redwood">
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

export default GradingSheetReport;
