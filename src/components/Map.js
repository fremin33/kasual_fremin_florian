import React, { Component } from "react";


class Map extends Component {
    render() {
        return (
            <div>
                <h1>Map is there</h1>
            </div>
        );
    }
}
export default Map;




// import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
// import './App.css';


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">Airports</Link></li>
//           <li><Link to="/topics">Cities</Link></li>
//         </ul>

//         <Route path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/topics" component={Topics}/>
//       </div>
//     );
//   }
// }

// export default App;

