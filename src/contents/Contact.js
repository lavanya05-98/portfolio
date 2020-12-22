import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
class Contact extends Component {
    render() {
        const store=observable({
            email:'lavanyavk98@gmail.com',
            Phoneno     :8870554012,
            Instagram   :'Lavanyapriya05'
        });
        const Counter = observer(props => (
            
                 <div className="condiv">
               
               <h1 className="subtopic">Contact Me</h1>
            
              <h3>email:{props.store.email}</h3>
              <br></br>
              <h3>Phoneno:{props.store.Phoneno}</h3>
              <br></br>
              <h3>Instagram:{props.store.Instagram}</h3>
              <br></br>
              </div>
             
              
        ));
        ReactDOM.render(
            <Counter store={store} />,
            document.getElementById("root")
          );

        return (
            <div></div>
            )
        
        }
    }
    
    export default Contact