import React, { useEffect, useState } from "react";

export default function Berries() {
  const [allBerries, setAllBerries] = useState([]);
  const [selected, setSelected] = useState(false);

  // https://pokeapi.co/api/v2/berry/

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/berry`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.count);
        setAllBerries(data);
        // console.log(allBerries.count)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selected])


//   const onClick = () => {
// //i want to change the value and display stuff
//   }

  return (
    <div>
      <h1>Select a Type</h1>
      {/* <p>{allBerries.count}</p> */}
      Type:{" "}
      <select name="Type" id="Type">
        <option value="" selected="selected">
          Please select subject first
        </option>

        {/* {allBerries.results.map((berry) => {
          return <option value={berry.name}>{berry.name}</option>;
        })} */}

      </select>
    </div>
  );
}
