import React, { useState, useEffect } from "react";
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from "components/Category";

const TrendingSearches = () => {
    const  [trends, setTrends] = useState([])
   
 
    useEffect(function(){
         getTrendingTerms().then(setTrends)
    },[])
 
    return <Category name={'Trending'}  options={trends}/>
 
}

export default TrendingSearches