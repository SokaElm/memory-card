import { useState } from 'react'


function FormGenInfo({person,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail}) {

  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
      }

      function handleEmailChange(e) {
        setEmail(e.target.value);
      }
  
    return (
      <>
        <h2>General Information</h2>
        <label>
          First name{': '}
          <input
          type="text"
            value={person.firstName}
            onChange={handleFirstNameChange}
            required />
        </label>
        <label>
          Last name:{' '}
          <input
          type="text"
            value={person.lastName}
            onChange={handleLastNameChange}
            required />
        </label>
        <label>
          Phone Number:{' '}
          <input type="tel"
            value={person.phoneNumber}
            onChange={handlePhoneNumberChange}
          required />
        </label>
        <label>
          Email:{' '}
          <input
          type="email"
            value={person.email}
            onChange={handleEmailChange}
            required />
        </label>
       
      </>
    );
  }


function FormEducation({education,setSchoolName,
  setDiplomaTitle,
  setDiplomaDate}) {
    
   
  
    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }
  
    function handleDiplomaTitleChange(e) {
        setDiplomaTitle(e.target.value);
    }

    function handleDiplomaDateChange(e) {
        setDiplomaDate(e.target.value);
      }

  
    return (
      <>
        <h2>Education</h2>
        <label>
          School name{': '}
          <input
          type="text"
            value={education.schoolName}
            onChange={handleSchoolNameChange}
          />
        </label>
        <label>
          Title of diploma:{' '}
          <input
          type="text"
            value={education.diplomaTitle}
            onChange={handleDiplomaTitleChange}
          />
        </label>
        <label>
          Date of diploma:{' '}
          <input
          type="date"
            value={education.diplomaDate}
            onChange={handleDiplomaDateChange}
          />
        </label>
    
      </>
    );
  }
  
  function FormExperience({experience,setCompanyName,setPositionTitle,setMainRespo,setStartDate,setEndDate}) {

   
  
    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }
  
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
    }

    function handleMainRespoChange(e) {
        setMainRespo(e.target.value);
      }
      function handleStartDateChange(e) {
        setStartDate(e.target.value);
      }
      function handleEndDateChange(e) {
        setEndDate(e.target.value);
      }

  
    return (
      <>
        <h2>Work Experience</h2>
        <label>
          Last company name{': '}
          <input
          type="text"
            value={experience.companyName}
            onChange={handleCompanyNameChange}
          />
        </label>
        <label>
          Position title:{' '}
          <input
          type="text"
            value={experience.positionTitle}
            onChange={handlePositionTitleChange}
          />
        </label>
        <label>
         Main responsabilities:{' '}
          <textarea
          type="text"
            value={experience.mainRespo}
            onChange={handleMainRespoChange}
          />
        </label>
        <label>
         Start Date:{' '}
          <input
          type="date"
            value={experience.startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label>
         End Date:{' '}
          <input
           type="date"
            value={experience.endDate}
            onChange={handleEndDateChange}
          />
        </label>
     {(new Date(experience.endDate)-new Date(experience.startDate)<0) && <p>End date must be after start date</p>}
      </>
    );
  }
  
  function Button({ text = "Submit", handleClick}) {
  
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    );
  }

function Display({person}) {

    const fullName = person.genInfo.firstName + " " + person.genInfo.lastName;

    return(
<>
<h1>{fullName}</h1>
{(person.genInfo.phoneNumber || person.genInfo.email) && (<h2>Contact details: </h2>)}
<p>{person.genInfo.phoneNumber} </p>
<p>{person.genInfo.email} </p>

{(person.education.schoolName || person.education.diplomaTitle) && (<h2>Education: </h2>)}
<p>{person.education.schoolName} </p>
<p>{person.education.diplomaTitle} </p>
<p>{person.education.diplomaDate} </p>

{(person.experience.companyName) && (<h2>Work Experience: </h2>)}
<p>{person.experience.companyName} </p>
<p>{person.experience.positionTitle} </p>
<p>{person.experience.mainRespo} </p>
{person.experience.endDate && <p>{person.experience.startDate} - {person.experience.endDate} </p>}
</>
 )
}


export {FormGenInfo,FormEducation,FormExperience,Display,Button} 