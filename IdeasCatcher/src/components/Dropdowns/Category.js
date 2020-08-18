import React, {useState} from 'react'


function Category({title, items =[], multiSelect=false}) {
    
    
    const [selection, setSelection]=useState([]);
    
  


    function handleOnClick(item){
        if(!selection.some(current=>current.id===item.id)){
            if(!multiSelect){
               setSelection([item]);
            }
            else if(multiSelect)
            {
                setSelection([...selection, item]);
            } 
            else
            {
                let selectionAfterRemoval =selection;
                selectionAfterRemoval=selectionAfterRemoval.filter(
                    current=>current!=item.id
                );
                setSelection([...selectionAfterRemoval])
            }
        }
    }

    function isItemInSelection(item){
        if(selection.find(current=> current.id ===item.id)){
            return true;
        }
        return false;
    }
    
    return (
        


        <div className="dropdown form-control">
            <button class="btn form-control dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Izaberite kategoriju
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <div className="form-group">
                    {items.map(item =>(
                        <div className="form-control" key={item.id}>
                            <li type="button" onClick={()=> handleOnClick(item)} className="btn1">
                                <span>{item.value}</span>
                                <span>{isItemInSelection(item) && ' =Izabrano'}</span>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        </div>

       
    )
}

export default Category;
