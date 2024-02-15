import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count1, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {}, []);
  
  return (
    <div className="user-card">
      <h1>Count={count1}</h1>
      <h1>Count2={count2}</h1>

      <h2>Name:{name}</h2>
      <h3>Location:Delhi</h3>
      <h4>Contact:Shivangi.yadu</h4>
    </div>
  );
};
export default User;
