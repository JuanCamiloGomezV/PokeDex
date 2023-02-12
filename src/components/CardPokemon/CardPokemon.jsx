import React, { useState } from 'react'
import getFetch from '../../utils/getFetch';
import './CardPokemon.css'
import { Link } from "react-router-dom";
import LoaderCard from '../LoaderCard/LoaderCard';

const CardPokemon = ({url,type}) => {
    const estado = getFetch(url,type)
    const {cargando,data} = estado;
    const habilidad = () => {
        let nombre=''
        if(data.abilities.length>1)
        {
            nombre = data.abilities[1].ability.name
        }
        else
        {
            nombre = data.abilities[0].ability.name
        }
        return nombre.replace('-',' ')
    }

    return (
        cargando?
        <><figure className={`target target--default`}>
        <div className="target__image-container">
            <LoaderCard />
        </div>
        <figcaption className="target__caption">
            <h1 className="target__name text-capitalize"></h1>
            <h3 className="target__type">
           
            </h3>
            <table className="target__stats">
            <tbody><tr>
                <th>HP</th>
                <td></td>
            </tr>
            <tr>
                <th>Attack</th>
                <td></td>
            </tr>
            
            <tr>
                <th>Defense</th>
                <td></td>
            </tr>

            <tr>
                <th>Special Attack</th>
                <td></td>
            </tr>
            <tr>
                <th>Special Defense</th>
                <td></td>
            </tr>
            <tr>
                <th>Speed</th>  
                <td></td>
            </tr>
            </tbody></table>
            <div className="target__abilities">
            <h4 className="target__ability text-capitalize fs-6">
                <span className="target__label">Ability</span>
                
            </h4>
            <h4 className="target__ability text-capitalize fs-6">
                <span className="target__label">Hidden Ability</span>
                
            </h4>
            </div>
        </figcaption>
    </figure></>:
        <>
            <figure className={`target target--${type?type:data.types[0].type.name}`}>
                <div className="target__image-container">
                    <img src={data.sprites.other.home.front_default} alt={data.forms[0].name} className="target__image"/>   
                </div>
                <figcaption className="target__caption">
                    <h1 className="target__name text-capitalize">{data.forms[0].name.replace('-',' ')}</h1>
                    <h3 className="target__type">
                    {type?type:data.types[0].type.name}
                    </h3>
                    <table className="target__stats">
                    <tbody><tr>
                        <th>HP</th>
                        <td>{data.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <td>{data.stats[1].base_stat}</td>
                    </tr>
                    
                    <tr>
                        <th>Defense</th>
                        <td>{data.stats[2].base_stat}</td>
                    </tr>

                    <tr>
                        <th>Special Attack</th>
                        <td>{data.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <th>Special Defense</th>
                        <td>{data.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <th>Speed</th>  
                        <td>{data.stats[5].base_stat}</td>
                    </tr>
                    </tbody></table>
                    <div className="target__abilities">
                    <h4 className="target__ability text-capitalize fs-6">
                        <span className="target__label">Ability</span>
                        {data.abilities[0].ability.name.replace('-',' ')}
                    </h4>
                    <h4 className="target__ability text-capitalize fs-6">
                        <span className="target__label">Hidden Ability</span>
                        {habilidad(data.abilities)}
                    </h4>
                    </div>
                </figcaption>
            </figure>
        </>
    )
}

export default CardPokemon