import { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';



function Box(props) {
    const [ContentShown, setContentShown]= useState(true);

    function toggleContent(){
        setContentShown(!ContentShown);
    }
   
    return(
        <div className='boxes'>
            <div className='Box'>
                <h2 onClick={toggleContent}>
                    box {props.num}<ArrowDropDown className={ContentShown ? "rotate" : ""}/>
                </h2>
                <div className={ContentShown ? "content shown" : "content"}>
                   <img src="" alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloribus, excepturi autem a fugiat quam ratione dolore velit eligendi odit.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae expedita eveniet beatae soluta? Nam magni quia accusantium consequuntur beatae, quibusdam, unde ipsum omnis quis eos ad deserunt debitis vero odit dolore possimus ut pariatur natus.</p>
                </div>
            </div>
        </div>
    )
}
export default Box

// className={ContentShown ? "rotate" : ""}