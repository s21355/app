
import React, { useReducer, useState } from 'react';
import '../style.css'

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

export default function AddNotice() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  
   return(
    <div className="addpost">
      <h1>Add your notice</h1>
      {submitting &&
       <div>
         You are submitting the following:

           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>: {value.toString()}</li>
           ))}

       </div>
      }
      <form onSubmit={handleSubmit}>

          <label>
            <p>Title</p>
            <input name="title" className='inp1' onChange={handleChange}/>
            <p>Content</p>
            <textarea name="content" className='inp2' onChange={handleChange}>
            </textarea>
          </label>
            <br></br>
            <br></br>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  )

}