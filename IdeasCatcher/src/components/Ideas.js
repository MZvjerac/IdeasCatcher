import React, {useState, useEffect} from "react";
import IdeasForm from './IdeasForm'
import fireDb  from "../firebase"
import axios from '../axios-local';


const Ideas = () => {

    var [ideaObjects, setideaObjects]=useState({})
    var [currentId, setCurrentId]=useState('')
    var [categoryObjects, setCategoryObjects]=useState(null);
  

    useEffect(()=>{      

        //const databaseURL = "https://ideas-crud.firebaseio.com"
        axios.get('/categories.json')
            .then( response => {
                setCategoryObjects(response.data);
            });

        fireDb.child('ideas').on('value', snapshot=>{
            
            if(snapshot.val()!=null)
           setideaObjects({
               ...snapshot.val()
           })
           else
           setideaObjects({})
        });
    },[])

    const addOrEdit = obj=>{
        if(currentId=='')

        fireDb.child('ideas').push(
            obj,
            err=>{
                if(err)
                console.log(err)
                else
                setCurrentId('')
            }
        )
        else
        fireDb.child(`ideas/${currentId}`).set(
            obj,
            err=>{
                if(err)
                console.log(err)
                else
                setCurrentId('')
            }
        )
    }

    const onDelete = key=>{
        if(window.confirm('Da li si siguran da želiš obrisati ideju?')){
            fireDb.child(`ideas/${key}`).remove(
               
                err=>{
                    if(err)
                    console.log(err)
                    else
                    setCurrentId('')
                }
            )
        }
    }

    return (  
      
        <>
        <div className="row">
            <div className="col-md-4">
                <IdeasForm {...({addOrEdit, currentId, ideaObjects, categoryObjects })} />
            </div>
            <div className="col-md-4">               
                    Lista ideja:
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="h1">Rb.</th><th className="h2">DATUM I VRIJEME</th><th className="h3">NAZIV IDEJE</th><th className="h4">DESKRIPCIJA</th><th className="h5">REJT ING</th><th className="h6">KATEGORIJA</th><th className="h7">OČEKIVANJA</th><th className="h8">IZMJENI</th><th className="h9">OBRIŠI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(ideaObjects).map(id=>{
                                return<tr key={id}>
                                    <td className="rb">{ideaObjects[id].rb}</td>
                                    <td className="vri">{ideaObjects[id].vri}</td>
                                    <td className="aka">{ideaObjects[id].aka}</td>
                                    <td className="opis">{ideaObjects[id].opis}</td>
                                    <td className="rejt">{ideaObjects[id].rejting}</td>
                                    <td className="kat">{ideaObjects[id].kategorija}</td>
                                    <td className="oc">{ideaObjects[id].ocekivanja}</td>
                                    <td className="izm"><a className="btn text-primary"  onClick={()=>{setCurrentId(id)}} ><i class="fas fa-pencil-alt"></i></a></td>                                  
                                    <td className="bris"><a className="btn text-primary"  onClick={ ()=> onDelete(id)} ><i class="far fa-trash-alt"></i></a></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
       </> 
    );
}
 
export default Ideas;