import { useState } from "react";

const Request = ({startCheck} : any) => {

  const [sprintNumber, setSprintNumber] = useState('2')
  const [sprintDate, setSprintDate] = useState('22.11.2021')
 
  
  
  const handleSubmit = (e : any) => {
    e.preventDefault()

    let regexpSprintDate = new RegExp('^[0-3][0-9].[0-1][0-9].20[0-9]{2}$')
    let regexpSprintNumber = new RegExp('^[0-9]{1,3}$')

    if(regexpSprintDate.test(sprintDate) && regexpSprintNumber.test(sprintNumber)){
      const newReq = {sprintDate, sprintNumber}

      startCheck(newReq)
      console.log("From handler: ", newReq)
  
      
      setSprintNumber('')
      setSprintDate('')
    } else {
        alert('Incorrect input')
    }
  
  }
        return (
            <form className='add-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label>Sprint number</label>
                    <input autoFocus type='text' 
                        value={sprintNumber} 
                        onChange={(e)=> setSprintNumber(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Sprint date</label>
                    <input type='text'
                        value={sprintDate} 
                        onChange={(e)=> setSprintDate(e.target.value)}
                        placeholder={'Ex. '+ new Date(Date.now()).toLocaleDateString()}/>
                </div>
                   <input type='submit' className="btn btn-block" value='Start'/>
            </form> 
            );
}

export default Request
