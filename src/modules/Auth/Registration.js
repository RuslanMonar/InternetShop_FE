import React from 'react';

import classes from '../../css/style.module.css';

const Registration = () => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    var csrf_token = '{{ echo csrf_token()}}';

    const singUp = async () => {
        let data = {name,email,password,csrf_token }
        const respone = await fetch("http://shop/api/register",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                'X-CSRF-TOKEN': csrf_token,
            }
            
        })
        const result = await respone.json()
        console.log("result",result) 
    }
    return (

        <div className={classes.registration_content}>
            <h3>Реєстрація</h3>
            <div className={classes.field}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <div className={classes.line}></div>
            </div>
            <div className={classes.field}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <div className={classes.line}></div>
            </div>
            <div className={classes.field}>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <div className={classes.line}></div>
            </div>
             <button onClick={singUp} className={classes.auth_button} >Відправити</button> 
        </div>
    )
}

export default Registration