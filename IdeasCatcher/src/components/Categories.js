import React, {useState, useEffect} from "react";
import CategoriesForm from './CategoriesForm'
import fireDb  from "../firebase"



const Categories = () => 
{

    var [categoryObjects, setcategoryObjects]=useState({})
    var [currentId, setCurrentId]=useState('')

    useEffect(()=>{
        fireDb.child('categories').on('value', snapshot=>{
            
            if(snapshot.val()!=null)
           setcategoryObjects({
               ...snapshot.val()
           })
           else
           setcategoryObjects({})
        })
    },[])

    const addOrEdit = obj=>{
        if(currentId=='')

        fireDb.child('categories').push(
            obj,
            err=>{
                if(err)
                console.log(err)
                else
                setCurrentId('')
            }
        )
        else
        fireDb.child(`categories/${currentId}`).set(
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
        if(window.confirm('Da li si siguran da želiš obrisati kategoriju?')){
            fireDb.child(`categories/${key}`).remove(
               
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
        
            <div className="container2">
             <h1 className="h12">KOREKCIJA KATEGORIJE IDEJE</h1>                
            </div>
       
        <div className="row">
            <div className="col-md-4">
                <CategoriesForm {...({addOrEdit, currentId, categoryObjects })} />
            </div>
            <div className="col-md-4">               
                   <label className="l1">Pregled kategorija:</label>
                <table className="table table-borderd"  >
                    <thead>
                        <tr>
                            <th className="h2">NAZIV KATEGORIJE</th><th className="h8">IZMJENI</th><th className="h9">OBRIŠI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(categoryObjects).map(id=>{
                                return<tr key={id}>                                    
                                    <td className="t2r1">{categoryObjects[id].kategorija}</td>                                    
                                    <td className="t2r2"><a className="btn text-primary"  onClick={()=>{setCurrentId(id)}} ><i className="fas fa-pencil-alt"></i></a></td>                                  
                                    <td className="t2r3"><a className="btn text-primary"  onClick={ ()=> onDelete(id)} ><i className="far fa-trash-alt"></i></a></td>
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
 
export default Categories;