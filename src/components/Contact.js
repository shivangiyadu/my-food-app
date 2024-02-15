import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-xl p-5 m-5 text-center'>Contact Us</h1>
   
    <form>
      <input type="text " className="border-black p-2 m-5 text-center"  placeholder='name'/>
      <input type="text " className="border-black p-2 m-5 text-center"  placeholder='message'/>
      <button>Submit</button>
    </form>
    </div>
  );
};

export default Contact;

