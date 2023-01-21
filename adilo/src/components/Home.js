import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  let navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       console.log(localStorage.getItem('token'));
//     }
//     else {
//       navigate("/login");
//     }
//     // eslint-disable-next-line
//   }, [])//[]means this function will run only one time
  return (
    <>
      <div className="container my-5" style={{backgroundColor:"#171D31", color:"white"}}>
        <h1 className='mt-5'>AI-powered Virtual Assistant for Providers</h1>
        <div className="row">
        </div>
      </div>
    </>
  )
}
