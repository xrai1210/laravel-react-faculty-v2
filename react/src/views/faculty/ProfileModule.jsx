import React, { useState } from "react";
import Button from "../../components/Button";

const ProfileModule = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [extensionName, setExtensionName] = useState();
  const [maidenName, setMaidenName] = useState();
  const [employeeNumber, setEmployeeNumber] = useState();
  const [birthDate, setBirtDate] = useState();
  const [birthPlace, setBirthPlace] = useState();
  const [country, setCountry] = useState();
  const [gender, setGender] = useState("default");
  const [civilStatus, setCivilStatus] = useState();
  const [personalMobilePhone, setPersonalMobilePhone] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [tin, setTin] = useState();
  const [tinNumber, setTinNumber] = useState();
  const [instructorCode, setInstructorCode] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();
  const [emergencyContact, setEmergencyContact] = useState();
  const [currentMobilePhone, setCurrentMobilePhone] = useState();

  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [editBtnVisible, setEditBtnVisible] = useState(true);
  const [saveBtnVisible, setSaveBtnVisible] = useState(false);
  const [cancelBtnVisible, setCancelBtnVisible] = useState(false);

  const enableInput = () => {
    console.log("hello");
    setIsInputDisabled(true);
    setEditBtnVisible(false);
    setSaveBtnVisible(true);
    setCancelBtnVisible(true);
  };

  const saveChanges = () => {
    // Perform any save logic or state updates
    setIsInputDisabled(false);
    setEditBtnVisible(true);
    setSaveBtnVisible(false);
    setCancelBtnVisible(false);
  };

  const cancelChanges = () => {
    // Reset input value, set to disable input, and reset buttons

    setIsInputDisabled(false);
    setEditBtnVisible(true);
    setSaveBtnVisible(false);
    setCancelBtnVisible(false);
  };

  return (
    <div className="">
      <header className="my-4 text-2xl font-bold text-center">
        <h1>Personal Information</h1>
      </header>

      {/* main container for content */}
      <main className="">
        <form className="" action="">
          {/* personal details */}
          <div>
            <div className="w-full p-2 font-semibold rounded bg-redwood text-antiquewhite">
              <h1>Personal Details</h1>
            </div>

            <div className="py-2">
              {/* first row */}
              <div className="flex flex-col flex-wrap md:flex-row md:justify-between">
                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Last Name:
                  </label>
                  <input
                    className="p-2 md:w-64 md:rounded"
                    type="text"
                    placeholder=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={!isInputDisabled}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    First Name:
                  </label>
                  <input
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={!isInputDisabled}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Middle Name:
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Extension Name:
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={extensionName}
                    onChange={(e) => setExtensionName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Maiden Name:
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={maidenName}
                    onChange={(e) => setMaidenName(e.target.value)}
                  />
                </div>
              </div>

              {/* second row */}
              <div className="flex flex-col flex-wrap py-2 md:flex-row md:justify-between lg:w-4/5">
                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Employee Number
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={employeeNumber}
                    onChange={(e) => setEmployeeNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Birthdate
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="date"
                    placeholder=""
                    value={birthDate}
                    onChange={(e) => setBirtDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Birthplace{" "}
                    <span className="hidden md:inline">(Povince City)</span>
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Country
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    placeholder=""
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              {/* third row */}
              <div className="flex flex-col flex-wrap py-2 md:flex-row md:justify-between lg:w-4/5">
                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Gender
                  </label>
                  <select
                    className="p-2 rounded md:w-64"
                    name=""
                    id=""
                    defaultValue={gender}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={!isInputDisabled}
                  >
                    <option value="default"></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Civil Status
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    value={civilStatus}
                    onChange={(e) => setCivilStatus(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Mobile Phone
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]+"
                    value={personalMobilePhone}
                    onChange={(e) => setPersonalMobilePhone(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label className="font-semibold" htmlFor="">
                    Email Address
                  </label>
                  <input
                    disabled={!isInputDisabled}
                    className="p-2 rounded md:w-64"
                    type="email"
                    name=""
                    id=""
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* employment details */}
          <div>
            <div className="w-full p-2 font-semibold rounded bg-redwood text-antiquewhite">
              <h1>Employment Details</h1>
            </div>

            <div className="flex flex-col flex-wrap py-2 md:flex-row md:justify-between md:w-3/5">
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  TIN:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={tin}
                  onChange={(e) => setTin(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  ___No.:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={tinNumber}
                  onChange={(e) => setTinNumber(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Instructor Code:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={instructorCode}
                  onChange={(e) => setInstructorCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* current address */}
          <div>
            <div className="w-full p-2 font-semibold rounded bg-redwood text-antiquewhite">
              <h1>Current Address</h1>
            </div>

            <div className="flex flex-col flex-wrap py-2 md:flex-row md:justify-between">
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Street Address:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Province-City:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Zip Code:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Emergency Contact:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="">
                  Phone Number:
                </label>
                <input
                  disabled={!isInputDisabled}
                  className="p-2 rounded md:w-64"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]+"
                  value={currentMobilePhone}
                  onChange={(e) => setCurrentMobilePhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* edit button */}
          <div
            className="w-full p-2 text-right text-white"
            onClick={enableInput}
          >
            {editBtnVisible && <Button color="seaserpent" label="Edit" />}
          </div>

          {/* save/cancel button */}
          <div className="flex flex-row justify-end w-full p-2 text-center text-white">
            <div onClick={saveChanges}>
              {saveBtnVisible && (
                <Button label="Save" newClass="bg-green-600" />
              )}
            </div>
            <div onClick={cancelChanges}>
              {cancelBtnVisible && (
                <Button label="Cancel" newClass="bg-red-600" />
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileModule;
