import React, {useState} from 'react';
function ContionalRendaring(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Text, setText] = useState('');
    const message=()=>{
        alert(`Welcome ${Text}`);
    }
    if(isLoggedIn){
        message();
    } else{
        alert('please login');
    }
    return (
        <div>
            <h2>Conditional Rendering</h2>
            <input type="text" value={Text} onChange={(e)=>setText(e.target.value)} placeholder='Enter your name'/>
        
        </div>
    );
}
export default ContionalRendaring;