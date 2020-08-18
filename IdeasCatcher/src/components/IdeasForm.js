import React, {useState, useEffect} from "react"
import Category from '../components/Dropdowns/Category'
import Kat from '../components/Dropdowns/Kat'




const rejtingOpt=[
    {label:'1', value:'1'},
    {label:'2', value:'2'},
    {label:'3', value:'3'},
    {label:"4", value:"4" },
    {label:'5', value:'5'},
    {label:'6', value:'6'},
    {label:'7', value:'7'},
    {label:'8', value:'8'},
    {label:'9', value:'9'},
    {label:'10', value:'10'}
];

const IdeasForm = (props) => {

    const initialFieldValues ={
        rb:'',
        vri:'',
        aka:'',
        opis:'',
        rejting:'1',        
        kategorija: 'Posao',
        value:'',
        ocekivanja:''       
    }
 

    var [values, setValues]=useState(initialFieldValues);

    const categoriesArray = [];
    for (let key in props.categoryObjects) {
        categoriesArray.push({
        id: key,
        value: props.categoryObjects[key].kategorija
        });
    }      

    useEffect(()=>{
        if(props.currentId=='')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.ideaObjects[props.currentId]
        })
    }, [props.currentId, props.ideaObjects])

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
                        <i class="fas fa-list-ol"></i>
                        </div>
                    </div>
                    <input type="number" className="form-control" placeholder="Unesite redni broj ideje" name="rb" value={values.rb} onChange={handleInputChange} required/>
                </div>
                
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">                        
                        <i class="far fa-clock"></i>
                        </div>
                    </div>
                    <input type="datetime-local" className="form-control" placeholder="Unesite vrijeme i datum" name="vri" value={values.vri} onChange={handleInputChange} required/>
                </div>
                
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="far fa-lightbulb"></i>                      
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Unesite naziv ideje" name="aka" value={values.aka} onChange={handleInputChange} required/>                    
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fas fa-pencil-alt"></i>                      
                        </div>
                    </div>
                    <textarea className="form-control" placeholder="Opišite ideju" name="opis" value={values.opis} onChange={handleInputChange} ></textarea>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fas fa-star-half-alt"></i>                      
                        </div>
                        <select onChange={handleInputChange} name="rejting" className="form-control" id="rejting">
                                 {rejtingOpt.map(opt => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                 ))}                                
                    </select>
                    </div>                    
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                       
                        <div className="input-group-text">
                        <i class="fas fa-space-shuttle "></i>
                    </div>                      
                             {/* <Kat   value={values.value} onChange={handleInputChange} name="kategorija"/></div>  */}
                             <select onChange={handleInputChange} name="kategorija" id="posao" className="form-control">
                                 {categoriesArray.map(opt => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.value}
                                    </option>
                                 ))}                                
                             </select>                        
                    </div>                          
                </div>                

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i class="fas fa-chart-line"></i>                      
                        </div>
                    </div>
                    <textarea className="form-control" placeholder="Unesite očekivanja" name="ocekivanja" value={values.ocekivanja} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit"  value={props.currentId==''?"SAČUVAJ":"IZMJENI"} className="btn-btn-primary btn-block"></input>
                </div>
            </form>       
     );
}
 
export default IdeasForm;