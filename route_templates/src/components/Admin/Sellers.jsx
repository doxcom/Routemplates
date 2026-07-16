import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Sellers = () => {
  const [name, setName] = useState("");
 /* useEffect(() =>{
    // console.log("component mount!");
    const notification = 5;
    document.title = `Name: ${name}`; //to put title on browser tab, also we can use restore title mode to clean up tab title after jumping in another section
  }, [name]);
*/

 //section for API purposes:

    useEffect(() =>{
       axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
        console.log(res))
    }, [])

  return (
    <>
       <h3>Admin Sellers Page</h3> 
       <input type='text' onChange={(e) => setName(e.target.value)} />
    </>
     )
}

export default Sellers;