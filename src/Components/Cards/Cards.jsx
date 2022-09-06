import React,{useEffect} from 'react'
import "../../style-components/Cards/style.css"

const Cards = ({country}) => {
    useEffect(()=>{})
    return (
            <li>
                <a href="#" className="card">
                <img src="https://img.freepik.com/vector-gratis/fondo-plano-brujula-mapa_23-2147735342.jpg?size=338&ext=jpg&uid=R50194990&ga=GA1.2.1371446412.1647650461" className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <img className="card__thumb" src="https://img.freepik.com/vector-gratis/fondo-plano-brujula-mapa_23-2147735342.jpg?size=338&ext=jpg&uid=R50194990&ga=GA1.2.1371446412.1647650461" alt="" />
                    <div className="card__header-text">
                        <h3 className="card__title">{country.name}</h3>            
                        <span className="card__status">Capital</span>
                        <div>{country.capital}</div>
                    </div>
                    </div>
                    <p className="card__description">{`It belongs to the continent of  ${country.continent.name}.  Your cell phone is ${country.phone}.`}</p>
                </div>
                </a>      
            </li> 
    )
}

export default Cards