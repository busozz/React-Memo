import React from 'react'

function Header({number,data,data2}) {
        console.log("Header Componen Re-Rendering");
  return (
    <div>
        {/* <h1>Header- {number} </h1> */}
        
        <code>{JSON.stringify(data)} </code>
    </div>

  )
}

export default React.memo(Header)    // Boşuna render edilmesin diye kullnılır.!!!!!!!1