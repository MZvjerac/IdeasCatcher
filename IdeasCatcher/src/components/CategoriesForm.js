import React, {useState, useEffect} from "react"




const CategoriesForm = (props) => {

    const initialFieldValues ={              
        kategorija: ''                
    }
 

    var [values, setValues]=useState(initialFieldValues);

    useEffect(()=>{
        if(props.currentId==='')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.categoryObjects[props.currentId]
        })
    }, [props.currentId, props.categoryObjects])

    const handleInputChange= e =>{
      var{ name, value }=  e.target

      setValues({
          ...values, [name]:value
      })
    }

    const handleFormSubmit= e =>{
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (         
          
            <form autoComplete="off" onSubmit={handleFormSubmit} >
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fas fa-space-shuttle "></i>                      
                        </div>
                    </div>
                    <input className="form-control" placeholder="Unesite novu kategoriju" name="kategorija" value={values.kategorija} onChange={handleInputChange}></input>
                </div>                   
                <div className="form-group">
                    <input type="submit"  value={props.currentId===''?"SAČUVAJ":"IZMJENI"} className="btn-btn-primary btn-block"></input>
                </div>
              
            </form>       
     );
}
 
export default CategoriesForm;