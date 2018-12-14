import React, {Component} from 'react';

class Text extends  Component{
  constructor(){
     super();
    this.onUp=this.onUp.bind(this)
  }

  onUp(item){
    let id=this.props.item.id;
    this.props.data.map((item)={
      
    })
  }
    handleChange(e){

        console.log(e.target.value);
        e.preventDefault();
    }
    render(){
        let {id,type,textValue}=this.props.item;
        console.log(this.props.item);
        console.log(this.props.data);
        return(
            <div style={{'border':'solid 2px black'}}>
               <input className="form-control" value={"hey everyone"} defaultValue={textValue} onChange={this.handleChange} />
               <button onClick={this.onUp} className="btn primary">up</button>
               <button onClick={this.onDown} className="btn primary">down</button>

            </div>
        )
    }
}
export default Text;
