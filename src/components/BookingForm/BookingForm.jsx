import { useState } from 'react';

export const BookingForm = () => {

  const [bookedFrom, setBookedFrom] = useState ('');

  const handleSubmit = (event) => {
    
  }
  return(
    <>
    <h2>Formular</h2>
    <form onSubmit={handleSubmit}>
      <input
      id="bookedForm"
      value={bookedFrom}
      onChange={(event) => {setBookedFrom(event.target.value)}}
/>
    </form>
    </>
  )
}
