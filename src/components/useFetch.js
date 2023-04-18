import { useState, useEffect } from "react";

// Remember to start the name of your custom hook with "use"
function useFetch(initializer, componentName) {
  const [data, setData] = useState(null);

  // Increases the value of counter by 1
  function dataGrab() {
    fetch()
  }

 useEffect(() => {
   
 
   return () => {
     
   }
 }, [])
 

  // Calls the useEffect hook if the counter updates
  return dataGrab;
}

export default useFetch;
