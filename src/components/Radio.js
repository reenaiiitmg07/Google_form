import React, {Component} from 'react';

class Radio extends  Component{
    constructor(){
        super();
        this.state={
            vale:''
        }
        this.onAddClick=this.onAddClick.bind(this)
    }

    onRadioTextChange(e){
        console.log(e.target.value);
        e.preventDefault();

    }
    onOptionChange(e){
        console.log(e.target.Value)
    }
    onAddClick(){
        let item=this.props.item;
        let options=item.options;
        options.push("add?");
        item.options=options;
        this.props.onRadioChange(item,"add")

    }

    render(){
            let {id,type,questionValue,options}=this.props.item;

        return(
            <div style={{'border':'solid 2px black'}}>
                <div className="col-sm-3" style={{'marginTop':'60px'}}>
                Radio
                </div>
                <div className="col-sm-9">
                <input className="form-control" type="text" onChange={this.onRadioTextChange} defaultValue={questionValue} />
                {options.map((item)=>{
                    return(
                        <div className="form-inline">
                            <input  type="radio"  defaultValue={item} />
                            <input className="form-control" type="text" defaultValue={item} onChange={this.onOptionValueChange}></input>
                        </div>
                    )
                })}    
                </div>
                <br />
                <button className="btn btn-primary" onClick={this.onAddClick} >Add</button>
            </div>
        )
    }
}
export default Radio;