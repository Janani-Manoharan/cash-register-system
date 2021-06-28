import React from 'react';
import {useState} from "react";

let count = 0;

const Numbers = (props) => {    

    const [color1,setColor1]=useState('');
    const [color2,setColor2]=useState('');
    const [color3,setColor3]=useState('');
    const [color4,setColor4]=useState('');
    const [color5,setColor5]=useState('');
    const [color6,setColor6]=useState('');
    const [color7,setColor7]=useState('');
    const [color8,setColor8]=useState('');
    const [color9,setColor9]=useState('');
    const [color10,setColor10]=useState('');
    const [color11,setColor11]=useState('');
    const [color12,setColor12]=useState('');
    const [color13,setColor13]=useState('');
    const [color14,setColor14]=useState('');
    const [color15,setColor15]=useState('');
    const [color16,setColor16]=useState('');
    const [color17,setColor17]=useState('');
    const [color18,setColor18]=useState('');
    const [color19,setColor19]=useState('');
    const [color20,setColor20]=useState('');


      
       
   

    return (

        <div className="number-section">
            <form>
        <table className="number-table">
            <tbody>
            <tr>
                <td>
                

                    <button style={{background:color1}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color1 === ''){
                            setColor1("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                            setColor1('');
                        }else{
                        const num={
                            number : 1
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor1('');
                            count=count-1;
                            const num={
                                number:1
                            }
                            props.onDeleteMark(num);
                        }
                        
                        
                        }}>1</button>
                </td>
                <td>
                    <button style={{background:color2}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color2 === ''){
                            setColor2("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 2
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor2('');
                            count=count-1;
                            const num={
                                number:2
                            }
                            props.onDeleteMark(num);
                        
                    }}}>2</button>
                </td>
                <td>
                    <button  style={{background:color3}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color3 === ''){
                            setColor3("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 3
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor3('');
                            count=count-1;
                            const num={
                                number : 3
                            }
                            props.onDeleteMark(num);
                        
                    }}}>3</button>
                </td>
                <td>
                    <button  style={{background:color4}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color4 === ''){
                            setColor4("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 4
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor4('');
                            count=count-1;
                            const num={
                                number:4
                            }
                            props.onDeleteMark(num);
                    }}}>4</button>
                </td>
                <td>
                    <button  style={{background:color5}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color5 === ''){
                            setColor5("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 5
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor5('');
                            count=count-1;
                            const num={
                                number:5
                            }
                            props.onDeleteMark(num);
                        
                    }}}>5</button>
                </td>
                <td>
                    <button  style={{background:color6}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color6 === ''){
                            setColor6("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 6
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor6('');
                            count=count-1;
                            const num={
                                number:6
                            }
                            props.onDeleteMark(num);
                        
                    }}}>6</button>
                </td>

            </tr>
            <tr>
                <td>
                    <button  style={{background:color7}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color7 === ''){
                            setColor7("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 7
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor7('');
                            count=count-1;
                            const num={
                                number:7
                            }
                            props.onDeleteMark(num);
                        
                    }}}>7</button>
                </td>
                <td>
                    <button style={{background:color8}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color8 === ''){
                            setColor8("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 8
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor8('');
                            count=count-1;
                            const num={
                                number:8
                            }
                            props.onDeleteMark(num);
                        
                    }}}>8</button>
                </td>
                <td>
                    <button style={{background:color9}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color9 === ''){
                            setColor9("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 9
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor9('');
                            count=count-1;
                            const num={
                                number:9
                            }
                            props.onDeleteMark(num);
                        
                    }}}>9</button>
                </td>
                <td>
                    <button  style={{background:color10}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color10 === ''){
                            setColor10("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 10
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor10('');
                            count=count-1;
                            const num={
                                number:10
                            }
                            props.onDeleteMark(num);
                        
                    }}}>10</button>
                </td>
                <td>
                    <button  style={{background:color11}} className ="btn btn-number" type="button" onClick={()=>{
                        
                        if(color11 === ''){
                            setColor11("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 11
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor11('');
                            count=count-1;
                            const num={
                                number:11
                            }
                            props.onDeleteMark(num);
                        
                    }}}>11</button>
                </td>
                <td>
                    <button  style={{background:color12}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color12 === ''){
                            setColor12("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 12
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor12('');
                            count=count-1;
                            const num={
                                number:12
                            }
                            props.onDeleteMark(num);
                        
                    }}}>12</button>  
                </td>

            </tr>
            <tr>
                <td>
                    <button  style={{background:color13}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color13 === ''){
                            setColor13("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 13
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor13('');
                            count=count-1;
                            const num={
                                number:13
                            }
                            props.onDeleteMark(num);
                        
                    }}}>13</button>
                </td>
                <td>
                    <button style={{background:color14}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color14 === ''){
                            setColor14("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 14
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor14('');
                            count=count-1;
                            const num={
                                number:14
                            }
                            props.onDeleteMark(num);
                        
                    }}}>14</button>
                </td>
                <td>
                    <button  style={{background:color15}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color15 === ''){
                            setColor15("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 15
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor15('');
                            count=count-1;
                            const num={
                                number:15
                            }
                            props.onDeleteMark(num);
                        
                    }}}>15</button>
                </td>
                <td>
                    <button style={{background:color16}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color16 === ''){
                            setColor16("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 16
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor16('');
                            count=count-1;
                            const num={
                                number:16
                            }
                            props.onDeleteMark(num);
                        
                    }}}>16</button>
                </td>
                <td>
                    <button style={{background:color17}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color17 === ''){
                            setColor17("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                            setColor17('');
                        }else{
                        const num={
                            number : 1
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor17('');
                            count=count-1;
                            const num={
                                number:17
                            }
                            props.onDeleteMark(num);
                        
                    }}}>17</button>
                </td>
                <td>
                    <button style={{background:color18}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color18 === ''){
                            setColor18("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 18
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor18('');
                            count=count-1;
                            const num={
                                number:18
                            }
                            props.onDeleteMark(num);
                        
                    }}}>18</button>
                </td>

            </tr>
            <tr>
                <td>
                    <button style={{background:color19}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color19 === ''){
                            setColor19("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 1
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor19('');
                            count=count-1;
                            const num={
                                number:1
                            }
                            props.onDeleteMark(num);
                    }}}>19</button>
                </td>
                <td>
                    <button style={{background:color20}} className="btn btn-number" type="button" onClick={()=>{
                        
                        if(color20 === ''){
                            setColor20("red");
                            count = count +1;
                        
                        if(count > 5){
                            alert("You cannot choose more than 5 numbers.");
                        }else{
                        const num={
                            number : 20
                        }
                        props.onAddMark(num);
                        
                    }
                        }else{
                            setColor20('');
                            count=count-1;
                            const num={
                                number:20
                            }
                            props.onDeleteMark(num);
                        
                    }}}>20</button>
                </td>
                <td colSpan="2">
                    <button  className="btn btn-cash" type="button">Cash</button>
                </td>
                <td colSpan="2">
                    <button  className="btn btn-clear" type="button" onClick={()=>{
                    
                       props.onClear();
                       count = 0; 
                    }}>Clear </button>
                </td>
                

            </tr>
            </tbody>
        </table>  
        </form>                  
    </div>
    
    )
}

export default Numbers
