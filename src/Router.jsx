import { useState } from "react"
import { EVENTS } from "./consts"
import { useEffect } from "react"
import { match } from "path-to-regexp"
import { Children } from "react"
import { getCurrentPath } from "./utils"

export function Router({children,routes=[],defaultComponent:DefaultComponent=()=> null}) {

    const [currentPath,setCurrentPath] = useState(getCurrentPath())
  
    useEffect(()=>{
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
      window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE,onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
      }
    },[])

    let routeParams = {}

    const routesFromChildren = Children.map(children,({props,type})=>{
        const {name} = type
        const isRoute = name === 'Route'

        return isRoute ? props : null
    })

    const routesToUse =routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({path})=> {if(path===currentPath) true
        

        //regex para deterctar rutas dinamicas 
        const matcherUrl=match(path,{decode:decodeURIComponent})
        const matched =matcherUrl(currentPath)
        if(!matched) return false

        //guardar los parametros de la url dinamica
        routeParams=matched.params
        return true
    })?.Component
    return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams} />
  }