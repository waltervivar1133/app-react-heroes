import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
// import { heroes } from '../../data/Heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../Heroes/HeroCard';
import { getHeroesByName } from '../../selector/getHeroesByName';

export const SearchScreen = ({history}) => {

  const location = useLocation()
  
  const {q = ''} = queryString.parse(location.search);

  const [ formValues , handleInputChange ] = useForm({ searchText : q });
  
  const { searchText } = formValues;
  
  const heroFiltered = useMemo(() => getHeroesByName(q), [q] )
  

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`)
  }

  
  return (
    <div>
        <h1>Search Screen</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
              <h3>Search Form</h3>
              <form onSubmit={handleSearch}>
                  <input 
                    type="text"
                    name="searchText"
                    placeholder="Find your hero"
                    value={searchText}
                    onChange={handleInputChange}
                    className="form-contol w-100 py-2 my-2"/>
                    <button className="btn btn-primary"> Buscar</button>
              </form>
          </div>
          <div className="col-7">
              <h2>Results</h2>
              {
                  heroFiltered.map( hero =>( 
                    <HeroCard key={hero.id}
                              {...hero}/>
                  ))
              }
              {
                heroFiltered.length === 0 && 'No hay ese heroe'
              }
          </div>
        </div>
    </div>
  )
}
