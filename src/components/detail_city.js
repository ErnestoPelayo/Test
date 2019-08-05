import React from 'react'
import {Link} from 'react-router-dom'

class DetailCity extends React.Component{
    
    render(){
        const detail = this.props
        return(
            
            <div className="card w-50  ">
                        <div className="card-header">
                        {detail.location.state.monitorId} .- {detail.location.state.city}
                        </div>
                        <div className="card-body bg-primary text-white">
                                  Value of Monitor ID: {detail.location.state.value_monitorId}{<br/>}
                                  Address:{detail.location.state.address}{<br/>}
                                  Latitude:{detail.location.state.latitude}{<br/>}
                                  Longitude:{detail.location.state.longitude}{<br/>}{<br/>}
                                  <Link to="/"><p className="btn btn-light ">Return</p></Link> 
                        </div>  
            </div>
        );
    }
}

export default DetailCity