import React, { useState } from 'react';
import "./text.css";

function Text() {
    const [isBold, setIsBold] = useState(false);
    const [input, setInputText] = useState("");

    const handleChangeFont = () => {
        setIsBold(!isBold);
    };

    return (
        <div>
            <div className='parent'>
                <input type="text" className={isBold ? "bold" : "normal"}  value={input} 
 onChange={(e) => setInputText(e.target.value)} />
                <button onClick={handleChangeFont}>{isBold ? "Normal" : "Bold"} </button>
            </div>
        </div>
    );
}

export default Text;


















// import React, { useState } from 'react';
// import "./text.css";

// function Text()
//  {
//     // const[val, setval]=useState("")
//     const[Bold, SetBold]=useState(false);
//       // e.PreventDefault()
//     const ChangeFont=(()=>
//     {
//             SetBold(!Bold)
//     }
//     )
//     console.log(Bold)
//   return (
//     <div>
//         <div>
//                 <div className='parent' >
//                     <input type="text" id={Bold}  onChange={()=> SetBold(e.target.id)}/>
//                     <button onClick={ChangeFont} className={Bold ? "bold" : "Normal"}>Bold</button>
//                 </div>
//         </div>
//     </div>
//   )
// }

// export default Text

// {Bold===true ? "Bold" : "Normal"}
// style={e.target.id === Bold ? "bold": "Normal"} 

