import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state={lat:null,errorMessage:''}
    //     window.navigator.geolocation.getCurrentPosition(
    //         position=>{this.setState({lat:position.coords.latitude})},
    //         err=>{this.setState({errorMessage:err.message})}
    //     )
        
    // }
    state={lat:null,errorMessage:''} // here if you rename state it won't work
    
    componentDidMount(){// function is best suited for data loading
        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat:position.coords.latitude})},
            err=>{this.setState({errorMessage:err.message})}
        )
    }
    //const renderContent will throw some error
    renderContent=()=>{//helper function so that we do not have more than 1 return statement inside render()
        if(this.state.lat)
        return <SeasonDisplay lat={this.state.lat}/>
        else if(this.state.errorMessage)
        return <div><h1>Error:{this.state.errorMessage}</h1></div>
        return <Spinner message='Please accept the location request'/>
    }
    render(){
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
        
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'))