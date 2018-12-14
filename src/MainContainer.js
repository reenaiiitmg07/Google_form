import React,{Component} from 'react';
import Text from './components/Text';
import DropDown from './components/DropDown';
import Input from './components/Input';
import Radio from './components/Radio';

const ShowWidgetTypeDropDown=(props)=>{
    return(
            <select onChange={props.addWidget}>
                <option value="select widget">Select Widget</option>
                <option value="TEXT" >Text</option>
                <option  value="INPUT" >Input</option>
                <option value="RADIO" >Radio</option>
                <option value="DROPDOWN" >DropDown</option>
            </select>
    )
}
const ShowAddComponentButton=(props)=>{
    return(
        <button onClick={props.addComponent} className="btn  btn-primary">Add Component</button>
    )
}

class MainContainer extends Component{

    constructor(){
        super();
        this.state={
            showAddButton:true,
            selectedvalue:'',
            formElements:[]
        }
        this.addComponent=this.addComponent.bind(this)
        this.addWidget=this.addWidget.bind(this)
      //  this.onRadioChange=this.onRadioChange.bind(this)
        this.onChange=this.onChange.bind(this)
    }
    formElementsCounter=0;

    addComponent(){
        this.setState({
            showAddButton:!this.state.showAddButton
        })
    }
    addWidget(event){
        let selectedvalue=event.target.value;
        this.formElementsCounter++;
        let formElements=this.state.formElements;
        let SingleElement={};
        if(selectedvalue=="INPUT"){
            SingleElement['id']=this.formElementsCounter;
            SingleElement['type']=selectedvalue;
            SingleElement['inputValue']="please type the question";
        }
        if(selectedvalue=='TEXT'){
            SingleElement['id']=this.formElementsCounter;
            SingleElement['type']=selectedvalue;
            SingleElement['textValue']="please type the Text";

        }
        if(selectedvalue=='RADIO'){
            SingleElement['id']=this.formElementsCounter;
            SingleElement['type']=selectedvalue;
            SingleElement['questionValue']="your favorite color ?";
            SingleElement['options']=['red','green','yellow'];

        }

        if(selectedvalue=='DROPDOWN'){
            SingleElement['id']=this.formElementsCounter;
            SingleElement['type']=selectedvalue;
            SingleElement['questionValue']="Your favorate country ?";
            SingleElement['options']=['IN','JP','RSA','RS','FR'];

        }
        formElements.push(SingleElement);
        this.setState({
            showAddButton:!this.state.showAddButton,
            selectedvalue:selectedvalue,
            formElements
        })

    }
  onChange(item){
    console.log(item)
    let formElements=this.state.formElements;
    console.log("before",formElements)
    formElements=formElements.map((items)=>{
        if(items.id==item.id){
            return item;
        }
        else
        return items;
    })
    console.log("afetr",formElements)
    this.setState({
        formElements
    })

}


    render(){
        let {selectedvalue,formElements}=this.state;
        console.log(formElements)
       let toShow= formElements.map((item)=>{
            if(item.type=='TEXT'){
                return <Text onTextChange={this.onChange} item={item} data={formElements}  />
            }
            if(item.type=='INPUT'){
                return <Input onInputChange={this.onChange} item={item} />
            }
            if(item.type=='DROPDOWN'){
                return <DropDown onDropDownChange={this.onChange}  item={item} />
            }
            if(item.type=='RADIO'){
                return <Radio onRadioChange={this.onChange} item={item} />
            }

        })

        return(
            <div>
                <br />
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">
                {toShow}
                <br />
                {this.state.showAddButton?<ShowAddComponentButton addComponent={this.addComponent} />:<ShowWidgetTypeDropDown addWidget={this.addWidget} />}
                <br />
                <br />

                {this.state.formElements.length>0?<button className="btn btn-primary"> Download Json</button>:null}
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        )
    }

}

export default MainContainer;
