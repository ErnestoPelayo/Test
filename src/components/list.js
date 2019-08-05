import React from 'react';
import {Link} from 'react-router-dom'


class List extends React.Component {
   render(){
      const{data} = this.props
      return(
         <div>
            <h1>List of Cities</h1>
            {data.map((response) => (
               <div className="card w-50 mb-2"  key={response.monitorId}>
                  <Link to={{ pathname:`detail/${response.monitorId}`, 
                              state:{
                                 monitorId:response.monitorId,
                                 city:response.city,
                                 address:response.address,
                                 latitude:response.location.latitude,
                                 longitude:response.location.longitude,
                                 place: response.place,
                                 value_monitorId:response.caql.current&&response.caql.current.value,
                              } 
                  }}>
                     
                     <div className="card" style={{backgroundColor:response.caql.current && response.caql.current.color}}>
                        <div className="card-body">
                           <h5 className="card-title text-black-50">{response.monitorId} .- {response.city}</h5>
                           <p className="card-text ">{response.address}</p>
                        </div>
                     </div>
                  </Link>      
               </div>
               
           ))
           }
         </div>

      );
   }
}

export default List