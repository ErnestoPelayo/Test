import React from 'react'
import List from '../components/list'


class ListCities extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          values : [],
          isFetch : true,
          
        }
      }

      fetch (){
        fetch('https://api.ivanonline.org/v1/air/data/')
              .then(response => response.json())
              .then(response => this.setState({ values: response.data.data, isFetch : false }))
      }

      componentDidMount(){
          this.fetch()
          setInterval(() => {
                this.fetch()
                }, 300000);
      };
      render(){
        if (this.state.isFetch){
          return "loading.."
        }
        return (
          <div>
          <List data = {this.state.values}/>  
          </div>
        );
      }

}

export default ListCities