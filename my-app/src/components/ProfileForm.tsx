import React, { useState } from "react";
import Box from "@mui/system/Box";
import { Checkbox } from "@mui/material";

function UserForm() {
  const [name, setName] = useState<string>("");
  const [yearInSchool, setYearInSchool] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [hometown, setHometown] = useState<string>("");
  const [badgerChecked, setBadgerChecked] = useState<boolean>(false);
  const [flamingoChecked, setFlamingoChecked] = useState<boolean>(false);
  const [interests, setInterests] = useState<string>("");
  const [classOne, setClassOne] = useState<string>("");
  const [classTwo, setClassTwo] = useState<string>("");
  const [classThree, setClassThree] = useState<string>("");
  const [classFour, setClassFour] = useState<string>("");
  const [classFive, setClassFive] = useState<string>("");
  
  const [submitted, setSubmitted] = useState<boolean>(false);


  const profileFormSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Submitted:", { name, yearInSchool, major, hometown, badgerChecked, flamingoChecked, interests, classOne, classTwo, classThree, classFour, classFive });
    // Reset form fields
    setName("");
    setYearInSchool("");
    setMajor("");
    setHometown("");
    setInterests("");
    setClassOne("");
    setClassTwo("");
    setClassThree("");
    setClassFour("");
    setClassFive("");

    setFlamingoChecked(false);
    setBadgerChecked(false);


    setSubmitted(true); 
  };

  const badgerCheckHandler = () => {
    if (badgerChecked){
      setBadgerChecked(false);
    }else{
      setBadgerChecked(true);
      setFlamingoChecked(false);
    }
  }

  const flamingoCheckHandler = () => {
    if (flamingoChecked){
      setFlamingoChecked(false);
    }else{
      setFlamingoChecked(true);
      setBadgerChecked(false);
    }
  }

  return (
    <div>
      <form onSubmit={profileFormSubmitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Render elements vertically
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Year in School:
            <input
              type="text"
              value={yearInSchool}
              onChange={(e) => setYearInSchool(e.target.value)}
            />
          </label>

          <label>
            Major:
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </label>

          <label>
            Hometown:
            <input
              type="text"
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
            />
          </label>

          <label>
            Badger
            <Checkbox
                checked={badgerChecked}
                onChange={badgerCheckHandler}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            Flamingo
            <Checkbox
                checked={flamingoChecked}
                onChange={flamingoCheckHandler}
                inputProps={{ 'aria-label': 'controlled' }}
              />
          </label>

          <label>
            Interests:
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </label>

          <label>
            Class 1:
            <input
              type="text"
              value={classOne}
              onChange={(e) => setClassOne(e.target.value)}
            />
          </label>

          <label>
            Class 2:
            <input
              type="text"
              value={classTwo}
              onChange={(e) => setClassTwo(e.target.value)}
            />
          </label>

          <label>
            Class 3:
            <input
              type="text"
              value={classThree}
              onChange={(e) => setClassThree(e.target.value)}
            />
          </label>

          <label>
            Class 4:
            <input
              type="text"
              value={classFour}
              onChange={(e) => setClassFour(e.target.value)}
            />
          </label>

          <label>
            Class 5:
            <input
              type="text"
              value={classFive}
              onChange={(e) => setClassFive(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
          {submitted && <div>Form Submitted!</div>}
        </Box>
      </form>
    </div>
  );
}

export default UserForm;

/*
Name 
Hometown
Major
Classes
Badger or flamingo 
Year 
interests, etc.) 
*/
