import { useState } from 'react'
import './App.css'
import {FormGenInfo,FormEducation,FormExperience,Display,Button} from "./components.jsx"

function App() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [diplomaTitle, setDiplomaTitle] = useState('');
  const [diplomaDate, setDiplomaDate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainRespo, setMainRespo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const [displayedFirstName, setDisplayedFirstName] = useState('');
  const [displayedLastName, setDisplayedLastName] = useState('');
  const [displayedPhoneNumber, setDisplayedPhoneNumber] = useState('');
  const [displayedEmail, setDisplayedEmail] = useState('');
  const [displayedSchoolName, setDisplayedSchoolName] = useState('');
  const [displayedDiplomaTitle, setDisplayedDiplomaTitle] = useState('');
  const [displayedDiplomaDate, setDisplayedDiplomaDate] = useState('');
  const [displayedCompanyName, setDisplayedCompanyName] = useState('');
  const [displayedPositionTitle, setDisplayedPositionTitle] = useState('');
  const [displayedMainRespo, setDisplayedMainRespo] = useState('');
  const [displayedStartDate, setDisplayedStartDate] = useState('');
  const [displayedEndDate, setDisplayedEndDate] = useState('');
 

  const person = {
    genInfo: {firstName,
    lastName,
    phoneNumber,
    email},
    education :{schoolName,diplomaTitle,diplomaDate},
    experience : {companyName,positionTitle,mainRespo,startDate,endDate}
  }

  const displayedPerson = {
    genInfo: {firstName: displayedFirstName,
      lastName: displayedLastName,
      phoneNumber: displayedPhoneNumber,
      email: displayedEmail},
      education :{schoolName:displayedSchoolName,diplomaTitle:displayedDiplomaTitle,diplomaDate:displayedDiplomaDate},
      experience : {companyName:displayedCompanyName,positionTitle:displayedPositionTitle,mainRespo:displayedMainRespo,
        startDate:displayedStartDate,endDate:displayedEndDate}

  }

 function handleSubmit(){

  setDisplayedFirstName(firstName);
  setDisplayedLastName(lastName);
  setDisplayedPhoneNumber(phoneNumber);
  setDisplayedEmail(email);
  setDisplayedSchoolName(schoolName);
  setDisplayedDiplomaTitle(diplomaTitle);
  setDisplayedDiplomaDate(diplomaDate);
  setDisplayedCompanyName(companyName);
  setDisplayedPositionTitle(positionTitle);
  setDisplayedMainRespo(mainRespo);
  setDisplayedStartDate(startDate);
  setDisplayedEndDate(endDate);

  setFirstName("");
  setLastName("");
  setPhoneNumber("");
  setEmail("");
  setSchoolName("");
  setDiplomaTitle("");
  setDiplomaDate("");
  setCompanyName("");
  setPositionTitle("");
  setMainRespo("");
  setStartDate("");
  setEndDate("");

 } 

 function handleEdit(){
  setFirstName(displayedFirstName);
  setLastName(displayedLastName);
  setPhoneNumber(displayedPhoneNumber);
  setEmail(displayedEmail);
  setSchoolName(displayedSchoolName);
  setDiplomaTitle(displayedDiplomaTitle);
  setDiplomaDate(displayedDiplomaDate);
  setCompanyName(displayedCompanyName);
  setPositionTitle(displayedPositionTitle);
  setMainRespo(displayedMainRespo);
  setStartDate(displayedStartDate);
  setEndDate(displayedEndDate);
 } 


 return(
  <>

<div className="formContainer">

<h1>CV Application</h1>

<FormGenInfo
person={person.genInfo}
setFirstName={setFirstName}
setLastName={setLastName}
setPhoneNumber={setPhoneNumber}
setEmail={setEmail}
/>
<FormEducation education={person.education}
setSchoolName={setSchoolName}
setDiplomaTitle={setDiplomaTitle}
setDiplomaDate={setDiplomaDate}
/>

<FormExperience experience={person.experience}
setCompanyName={setCompanyName}
setPositionTitle={setPositionTitle}
setMainRespo={setMainRespo}
setStartDate={setStartDate}
setEndDate={setEndDate}
/>

<div className="buttons">
<Button handleClick={handleSubmit}/>
<Button text="Edit" handleClick = {handleEdit} /> 
</div>
</div>

 <div className="display">
<Display 
person={displayedPerson} 
 />
</div>
 </>
 )
}

export default App
