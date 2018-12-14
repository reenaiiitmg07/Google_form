import React, {Component} from 'react';

class DropDown extends  Component{
    constructor(){
        super();
        this.state={
            value:'value'
        }
        this.onAddClick=this.onAddClick.bind(this)

    }
    onAddClick(){
        let item=this.props.item;
        let options=item.options;
        options.push("add?");
        item.options=options;
        this.props.onDropDownChange(item,"add")

    }
    render(){
        let {id,type,questionValue,options}=this.props.item;

        return(
            <div style={{'border':'solid 2px black'}}>
                 <input  className="form-control" type="text" onChange={this.onDropDownTextChange} defaultValue={questionValue} />
                {options.map((item)=>{
                    return(
                       <div>
                           <input className="form-control" type="text" onChange={this.onDropTextChange}  defaultValue={item} />
                       </div>
                    )
                })}    
                 <br />
                <button className="btn btn-primary" onClick={this.onAddClick} >Add</button>
                
            </div>
        )
    }
}
export default DropDown;