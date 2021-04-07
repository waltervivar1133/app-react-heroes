import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/Dc/DcScreen'
import { HeroesScreen } from '../components/Heroes/HeroesScreen'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { SearchScreen } from '../components/Search/SearchScreen'
import { Navbar } from '../components/Ui/Navbar/Navbar'


export const DashboardRouter = () => {
  return (
    <>
      <Navbar/> 

      <div className="container">
        <Switch>
            <Route exact path='/marvel' component={ MarvelScreen } />
            <Route exact path='/hero/:heroeId' component={ HeroesScreen} />
            <Route exact path='/search' component={SearchScreen } />
            <Route exact path='/dc' component={ DcScreen } />

            <Redirect to='marvel' />
        </Switch>
      </div>
    </>
  )
}
