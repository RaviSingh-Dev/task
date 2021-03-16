import React,{useState} from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

import './styles.css';

export default function App() {
  const[result,setResult]=useState([]);
  const { register, handleSubmit } = useForm();


  const onSubmit = e => {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCW7qAKtI1h1jGIjDkdCMCNqJ1SJmmq980').
    then(data=>setResult(data.data.items));
  };

  const values=result.map(res=>res.family);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>   
        <input name="colors" placeholder="colors...."/>
          <Autocomplete
          id="combo-box-demo" 
          options={values}
          getOptionLabel={option=>option}          
          style={{ width: 300 ,height:100 }}
          renderInput={(values) => <TextField {...values} label="Combo box" variant="outlined" />}
        />                      
        <input type="submit" />
    </form>
  );
}
