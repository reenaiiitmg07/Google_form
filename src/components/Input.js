import React, {Component} from 'react';

class Input extends  Component{

    onInputValueChange(e){
        

    }

    render(){
        let {id,type,inputValue}=this.props.item;

        return(
            <div style={{'border':'solid 2px black'}}>
                <input  className="form-control" id ={id} formtypeValue={type}  onChange={this.onInputValueChange} defaultValue={inputValue} />
            </div>
        )
    }
}
export default Input;