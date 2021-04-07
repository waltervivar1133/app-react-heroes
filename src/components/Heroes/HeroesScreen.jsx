import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selector/getHeroesById';

export const HeroesScreen = ({history}) => {

  const {heroeId} = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])


  if(!hero) {
    return <Redirect to ="/"/>
  }
  // console.log(history)


  const handleReturn = () => {
    // el history guarda la cantidad de veces que navegas
    if(history.length <= 2) {
      hero.publisher === 'Marvel Comics' && history.push('/');
      hero.publisher === 'DC Comics' && history.push('/dc');
   } else {
     history.goBack();
   }

  }
  const {  id,
    superhero,
    alter_ego,
    first_appearance,
    characters,} = hero
  return (
    <div className="row my-5">
      <div className="col-md-6">
         <img src={`../assets/heroes/${id}.jpg`} className="img-fluid" alt={superhero}/>
      </div>
      <div className="col-md-6">
      <h2 className="card-title">{superhero}</h2>
              
              {
                alter_ego === characters ? <p className="card-text">{alter_ego}</p> : <p className="card-text">{characters}</p>
              }
              <p className="card-text">
                <small className="text-muted">{ first_appearance}</small>
              </p>

        <button className="btn btn-outline-primary"
                onClick={handleReturn}
                  >
          return
        </button>
      </div>
    </div>
  )
}
