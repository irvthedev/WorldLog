import React, { Component, useState } from 'react'

function CreateDestination() {
  const [input, setInput] = useState({
      Name: '',
      Country : '',
      FutureDestination : false
  })

function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value

      }
    })
  }

  function handleClick(event){
    event.preventDefault();
    console.log(input);
  }

  return (
    <div className='container'>
      <h4>Add visited destination</h4>
      <form>
          <div className='form-group'>
            <input onChange={handleChange} name="Name" value={input.Name} autoComplete="off" className="form-control mb-2" placeholder="Enter destinaton name"></input>
          </div>
          <div className="form-group">
            <input onChange={handleChange} name="Country" value={input.Country} autoComplete="off" className="form-control mb-2" placeholder="Enter country name"></input>
          </div>
          <div>
            <button onClick={handleClick} className="btn btn-primary">Add visited destination</button>
          </div>
      </form>
      <br />

      {/* <h4>Add desired desination</h4>
      <form>
          <div className='form-group'>
            <input onChange={handleChange} name="Name2" value={input.Name} autoComplete="off" className="form-control mb-2" placeholder="Enter destinaton name"></input>
          </div>
          <div className="form-group">
            <input onChange={handleChange} name="Country2" value={input.Country} autoComplete="off" className="form-control mb-2" placeholder="Enter country name"></input>

          </div>
          <div>
            <button onClick={handleClick} className="btn btn-primary">Add visited destination</button>
          </div>
      </form> */}

    </div>
  )
}


export default CreateDestination;
  

    

    
