import React from 'react'
import arrowBack from '../img/arrowBack.png'

export default function PaisSelected({infoPeliculaSelected, handleDeseleccionarPais, darkMode}) {
  return (
    <>
        <div className={`pais-selected-container ${darkMode?'dark':''}`}>

            <button onClick={()=>{handleDeseleccionarPais()}} className="back"><span><img src={arrowBack}></img></span>Back</button>

            <div className={`pais-desc-container ${darkMode?'dark':''}`}>
                <div className="pais-desc-container-bandera-container">
                    <img src={infoPeliculaSelected.flag}></img>
                </div>

                <div className="pais-desc-container-desc-container">
                    <h2>{infoPeliculaSelected.name}</h2>
                    <div className="top-container">
                        <div className="izq-container">
                            <div className="mini-info-container">
                                <label>Native Name: </label>
                                <span>{infoPeliculaSelected.nativeName}</span>
                            </div>

                            <div className="mini-info-container">
                                <label>Population: </label>
                                <span>{infoPeliculaSelected.population}</span>
                            </div>

                            <div className="mini-info-container">
                                <label>Region: </label>
                                <span>{infoPeliculaSelected.region}</span>
                            </div>

                            <div className="mini-info-container">
                                <label>Sub Region: </label>
                                <span>{infoPeliculaSelected.subregion}</span>
                            </div>

                            <div className="mini-info-container">
                                <label>Capital: </label>
                                <span>{infoPeliculaSelected.capital}</span>
                            </div>
                        </div>

                        <div className="der-container">
                            <div className="mini-info-container">
                                <label>Top Level Domain: </label>
                                {
                                    infoPeliculaSelected.topLevelDomain.map((b, index)=><span key={index} className="tld-span">{b + ((index == infoPeliculaSelected.topLevelDomain.length - 1)?(''):(', '))}</span>)
                                }
                            </div>

                            <div className="mini-info-container">
                                <label>Currencies: </label>
                                {
                                    infoPeliculaSelected.currencies.map((c, index)=><span key={index} className="c-span">{c.name + ((index == infoPeliculaSelected.currencies.length - 1)?(''):(', '))}</span>)
                                }
                            </div>

                            <div className="mini-info-container">
                                <label>Languajes: </label>
                                {
                                    infoPeliculaSelected.languages.map((l, index)=><span key={index} className="l-span">{l.name + ((index == infoPeliculaSelected.languages.length - 1)?(''):(', '))}</span>)
                                }
                            </div>
                        </div>
                    </div>
                    {
                        (infoPeliculaSelected.borders == undefined)?(
                        <></>
                        ):(
                            <div className="border-countries-container">
                            <label>Border Countries: </label>
                                {
                                    infoPeliculaSelected.borders.map((b, index)=><span className="bc-span" key={index}>{b}</span>)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </>
  )
}