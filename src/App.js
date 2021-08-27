import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import {Join, CourseRegister, Login, OnlineProfiles, Home, Navi, SchoolStatus} from 'components/index'

import Basic from './modern-javascript/chap-01-basic/Basic';
import ArrowFunction from './modern-javascript/chap-02-arrow-function/ArrowFunction'
import Arguments from './modern-javascript/chap-03-arguments/Arguments'
import TemplateLiteral from './modern-javascript/chap-04-template-literal/TemplateLiteral'
import LiteralMethod from './modern-javascript/chap-05-literal-merhod/LiteralMethod'
import Destructuring from './modern-javascript/chap-06-destructuring/Destructuring'
import Loop from './modern-javascript/chap-07-loop/Loop'
import ArrayMethod from './modern-javascript/chap-08-array-method/ArrayMethod'
import SpreadOperatorRestParameter from './modern-javascript/chap-09-spread-operator-rest-parameter/SpreadOperatorRestParameter'
import ObjectLiteral from './modern-javascript/chap-10-object-literal/ObjectLiteral'
import Symbol from './modern-javascript/chap-11-symbol/Symbol'
import Class from './modern-javascript/chap-12-class/Class'
import Promise from './modern-javascript/chap-13-promise/Promise';
import Generator from './modern-javascript/chap-14-generator/Generator'
import Proxy from './modern-javascript/chap-15-proxy/Proxy'
import SetMap from './modern-javascript/chap-16-set-map/SetMap'
import Array from './modern-javascript/chap-17-array/Array'
import ES2017 from './modern-javascript/chap-18-es2017/ES2017'
import AsyncAwait from './modern-javascript/chap-19-async-await/AsyncAwait'
import ES2018 from './modern-javascript/chap-20-es2018/ES2018'
import ES2019 from './modern-javascript/chap-21-es2019/ES2019'
import ES2020 from './modern-javascript/chap-22-es2020/ES2020'
import Typescript from './modern-javascript/chap-23-typescript/Typescript'
import NavigationForJavascript from './components/NavigationForJavascript';

//import './App.css';

const App = () =>  (<>
    <Navi/><NavigationForJavascript/>
    <Switch>
    <Route exact path = '/' component = {Home}/>
    <Redirect from = '/home' to={'/'}/>
    <Route exact path = '/home' component = {Home}/>
    <Route exact path = '/join' component = {Join}/>
    <Route exact path = '/course-register' component = {CourseRegister}/>
    <Route exact path = '/login' component = {Login}/>
    <Route exact path  = '/online-profiles' component = {OnlineProfiles}/>
    <Route exact path  = '/school-status' component = {SchoolStatus}/>
    
    <Route exact path = '/basic' component = {Basic}/>
    <Route exact path = '/arrowFunction' component = {ArrowFunction}/>
    <Route exact path = '/arguments' component = {Arguments}/>
    <Route exact path = '/template-literal' component = {TemplateLiteral}/>
    <Route exact path = '/literal-method' component = {LiteralMethod}/>
    <Route exact path = '/destructuring' component = {Destructuring}/>
    <Route exact path = '/loop' component = {Loop}/>
    <Route exact path = '/array-method' component = {ArrayMethod}/>
    <Route exact path = '/spread-operator-rest-parameter' component = {SpreadOperatorRestParameter}/>
    <Route exact path = '/object-literal' component = {ObjectLiteral}/>
    <Route exact path = '/symbol' component = {Symbol}/>
    <Route exact path = '/class' component = {Class}/>
    <Route exact path = '/promise' component = {Promise}/>
    <Route exact path = '/generator' component = {Generator}/>
    <Route exact path = '/proxy' component = {Proxy}/>
    <Route exact path = '/SetMap' component = {SetMap}/>
    <Route exact path = '/array' component = {Array}/>
    <Route exact path = '/ES2017' component = {ES2017}/>
    <Route exact path = '/async-await' component = {AsyncAwait}/>
    <Route exact path = '/ES2018' component = {ES2018}/>
    <Route exact path = '/ES2019' component = {ES2019}/>
    <Route exact path = '/ES2020' component = {ES2020}/>
    <Route exact path = '/typescript' component = {Typescript}/> 
  
  
    </Switch>

  </>);

  
export default App;
