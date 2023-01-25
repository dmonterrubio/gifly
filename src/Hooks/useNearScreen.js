import { useState, useEffect, useRef } from "react";

const useNearScreen = ({distance = '100px', externalRef} = {}) => {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
 
    useEffect(function(){

      const element = externalRef ? externalRef.current : fromRef.current
 
      const onChance = (entries, observe) => {

         const el = entries[0]

         if(el.isIntersecting){
            setShow(true)
            observe.disconnect()
         }
      }
      const observer = new IntersectionObserver(onChance, {
         rootMargin: distance
      })

      if(element) observer.observe(element)
      return () => observer.disconnect()
   })

   return {isNearScreen, fromRef}
 
 }

 export default useNearScreen