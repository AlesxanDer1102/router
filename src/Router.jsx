import { useState } from "react"
import { EVENTS } from "./consts"
import { useEffect } from "react"
import { match } from "path-to-regexp"

export function Router({routes=[],defaultComponent:DefaultComponent=()=> null}) {
    const [currentPath,setCurrentPath] = useState(window.location.pathname)
  
    useEffect(()=>{
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
      window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE,onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
      }
    },[])

    let routeParams = {}
  
    const Page = routes.find(({path})=> {if(path===currentPath) true
        

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