import axios from "axios"
import { useEffect, useState } from "react"
import style from "./profile1.module.css"

const Profilecard=()=>{
    let [count,setcount]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then((respo)=>{
            setcount(respo.data)
        })
        .catch(()=>{
            console.log("data didnt get");
        })
    })
    return (
        <div>
            <h1>Profile Card</h1>
        <div className={style.main}>
            {count.map((x)=>{
                return(
                    
                    <div className={style.card}>
                  <center> <img src={x.avatar_url}/></center>
                 <center> <h3> ID : {x.id}</h3></center> 
                       <center><h3 className={style.h1}> Name : { x.login}</h3></center>            
                       <button className={style.b1}>Add Friend</button>
                       <button className={style.b2}>Message</button>
                    </div>
                )
            })}
        </div>
        </div>
          )
        }
        export default Profilecard