import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from '../Common/Loader';

const Sellers = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("")
  const [sellers, setSellers] = useState([]);
 /* useEffect(() =>{
    // console.log("component mount!");
    const notification = 5;
    document.title = `Name: ${name}`; //to put title on browser tab, also we can use restore title mode to clean up tab title after jumping in another section
  }, [name]);
*/

 //section for API purposes:
    useEffect(() => {
       fetchSellers();
      /*
                         setIsLoading(true)
                         axios.get("https://jsonplaceholder.typicode.com/users")
                              .then((res) => {
                                                setSellers(res.data)
                                                setIsLoading(false)
                                              }
                                    ).catch(err => 
                                      {
                                       setIsLoading(false);
                                       setErrors(err.message);
                                       }); 
                    */
                      },[]);

  const fetchSellers = async () =>{
      setIsLoading(true)
      try {
             const res = await axios.get("https://jsonplaceholder.typicode.com/userss");
             setSellers(res.data);
             setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setErrors(err.message);
          }
      
  }

  // if(isLoading) return <h3>Loading...</h3>;                    

  return (
    <>
       <h3>Admin Sellers Page</h3> 
       <input type='text' onChange={(e) => setName(e.target.value)} />
       {isLoading && <Loader/>}
       {errors && <em>{errors}</em>}
       {sellers.map((seller) => (
          <p key={seller.id}>{seller.name}</p>
          ))}
       </>
     )
}

export default Sellers;