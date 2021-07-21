/* eslint-disable array-callback-return */

import React, { useEffect, useState } from 'react';
import ListData from "./ListData";
import ToggleButton from "./ToggleButton";
import TableData from "./TableData";
require('dotenv').config()

function App() {
   const [data,setData]=useState([]);
   //integrating and fetching data from an open API to show in components 
   console.log(process.env.REACT_APP_API_KEY);
    useEffect(()=>{
      var axios = require("axios").default;
      var options = {
              method: 'GET',
              url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
              params: {pageNumber: '1', pageSize: '10', withThumbnails: 'false', location: 'us'},
              headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY, //this is private API key in env file, for testing use your own API key
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
              }
            };
            axios.request(options).then(function (response) {
              setData(response.data.value);
            }).catch(function (error) {
            	console.error(error);
            });
      },[]);
      // condition; setting the visiblity of table data or list data on clicking the toggle button
      const [visible, setVisible] = useState(true);
      function handleClick(flag1){
       if(flag1===true){
         setVisible(true)
       }
       else
       {
         setVisible(false)
       }
      }
  return (
    <div>
         {/* a toggle component */}
       <ToggleButton onClick={handleClick}/>  
        {/* sending the fetched data to ListData  */}
      {data.map((item)=>{
        return( 
          visible&&
          <ListData 
          key ={item.id}
          provider={item.provider.name}
          datePublished={item.datePublished}
          image={item.image.url}
          id={item.id}
          title={item.title}
          keywords={item.keywords}
          snippet={item.snippet}   
        ></ListData>);  
      })}
       {/* sending the fetched data to TableData  */}
       {
         data.map((item)=>{
        return( 
          !visible&&
          <TableData 
          key ={item.id}
          provider={item.provider.name}
          datePublished={item.datePublished}
          image={item.image.url}
          id={item.id}
          title={item.title}
          keywords={item.keywords}
          snippet={item.snippet}   
        ></TableData>);  
      })
      } 
       
      
  
 
   </div> 
  );
 }
export default App;

