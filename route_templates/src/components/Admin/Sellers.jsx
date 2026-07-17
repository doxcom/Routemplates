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
             const res = await axios.get("https://jsonplaceholder.typicode.com/users");
             setSellers(res.data);
             setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setErrors(err.message);
          }
      
  }

  // if(isLoading) return <h3>Loading...</h3>;      
  
    const addSeller = () => {
      const newSeller ={
        name,
        id: sellers.length + 1,
      }
      setSellers([newSeller, ...sellers]);
      axios.post("https://jsonplaceholder.typicode.com/users", newSeller)
           .then((res) => setSellers([res.data, ...sellers]))
           .catch((err) =>{
               setErrors(err.message);
               setSellers(sellers);
           });
    };

    const deleteSeller = (id) =>{
      setSellers(sellers.filter((s) => s.id !== id));
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
           .catch((err) => {
               setErrors(err.message);
               setSellers(sellers);
           });
    };

       const updateSeller = seller =>{
           const updatedSeller = {
              ...seller,
              name: seller.name + " UPDATED",
        } 
        setSellers(
          sellers.map((s) => (s.id === seller.id ? updatedSeller : s))
        );
    };

  return (
    <>
       <h3>Admin Sellers Page</h3> 
       <input type='text' onChange={(e) => setName(e.target.value)} />
       <button onClick={addSeller}>Add Seller</button>
       {isLoading && <Loader/>}
       {errors && <em>{errors}</em>}

       <table>
          <tbody>
             {sellers.map((seller) => (
                            <tr key={seller.id}> 
                                 <td>{seller.name} </td> 
                                 <td><button onClick={() => updateSeller(seller)}>Update</button> </td>
                                 <td><button onClick={() => deleteSeller(seller.id)}>Delete</button> </td>
                           </tr>
               ))}
          </tbody>
       </table> 
       </>
     )
}

export default Sellers;