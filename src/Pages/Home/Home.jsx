import React,{useState,useEffect} from "react";
import { useQuery, gql } from "@apollo/client";
import Nav from "../../Components/Nav/Nav";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer"
import LIST_COUNTRIES from "./gql.js"
import {ButtonHome, Div_group, PageHome, Titulo_group, TitleData} from "../../style-components/Home/Style";

const Home = () => {
    const [searchValue, setSearchValue] = useState(null);
    const [groupBy, setGroupBy] = useState("continent");
    const {data, loading, error} = useQuery(LIST_COUNTRIES());
    const [dataCountries,setDataContries]=useState([])
    const [setContinent, setSetCountinents]=useState([])
    const [refresh, setRefresh]=useState(true)

    useEffect(()=>{
      if(dataCountries.length<1 && data){
        setDataContries([data])
      }else if(searchValue!==null){
        if(searchValue===""){
          setDataContries([data])
          setSearchValue(null)
        }else if(refresh===true){
          var setContinentArray=new Set([])
          var dataFilter =data.countries.filter((country)=>{
            if(country.name.toLowerCase().includes(searchValue.toLowerCase())){
              if(groupBy==="continent"){setContinentArray.add(country.continent.name)}
              else{setContinentArray.add(country.languages[0]?.name)}
              return country;
            }
          })
          var setItem=[]
          for (const entry of setContinentArray) {
            setItem.push(entry);
          }
          console.log(setContinentArray)
          setSetCountinents(setItem)
          setDataContries([{countries: dataFilter}])
          setRefresh(false)
        }
      }
    },[searchValue,groupBy,data,dataCountries])

    const onChangeSearch=(value)=>{
      setRefresh(true)
      setSearchValue(value)
    }

    const onChangeGroupBy=(value)=>{
      setRefresh(true)
      setGroupBy(value)
    }

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div>
          <PageHome>
              <Nav onChangeSearch={onChangeSearch}/>
              <Div_group>
                <Titulo_group>Group By: </Titulo_group>
                <ButtonHome onClick={()=>{onChangeGroupBy("continent")}} className="buttonContinent">Continent</ButtonHome >
                <ButtonHome  onClick={()=>{onChangeGroupBy("language")}}>Language</ButtonHome>
              </Div_group>
              {searchValue===null && <div className="cards">
                  {dataCountries[0]  && dataCountries[0].countries.map((country,key) => {
                      return <Cards country={country} key={key+1}/>
                  })}
                </div>
              }
                  {searchValue!==null && <div>
                     {setContinent.map((data,id)=>{
                      return <div key={id+1}>
                        <TitleData>{data}</TitleData>
                        <div className="cards">
                          {
                            dataCountries[0].countries.map((country,key) => {
                              return (country.continent.name===data || country.languages[0]?.name===data )&& <Cards country={country} key={key+1}/>
                            })
                          }
                        </div>
                      </div>
                    })}
                    </div>
                  }
          </PageHome>
          <Footer />
        </div>
    )
}

export default Home