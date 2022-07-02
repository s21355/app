
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
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Title</p>
            <input name="title" onChange={handleChange}/>
            <p>Content</p>
            <input name="content" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  )

}