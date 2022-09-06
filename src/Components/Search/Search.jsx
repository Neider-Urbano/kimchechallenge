import React,{useState} from 'react'
import { DivSearch, InputSearch, SearchButton } from "../../style-components/Search/Style"

const Search = ({onChangeSearch}) => {
    const [value,setValue]=useState("");
  return (  
    <DivSearch >
        <InputSearch type="text" name="" placeholder="Search" onChange={(e)=>{
            setValue(e.target.value)
        }}/>
        <SearchButton onClick={()=>{
            if(value.length>1 || value===""){
                onChangeSearch(value)
            }
        }}>🔍</SearchButton>
    </DivSearch>      
  )
}

export default Search