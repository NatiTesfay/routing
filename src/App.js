import './App.css';
import{Header,Main,Footer} from './coponents/pages/index';


function Routing({root}) {
  switch (root) {
    case "Header":
      return <Header/>
      case "Main":
      return <Main/>
      case "Footer":
        return <Footer/>
    default:
      break;
  }
};
export default Routing;
        //   <Router>
        //    <div className='container'>
        //     <nav>
        //       <ul>
        //         <li>
        //           <link to='./Home'>Home</link>
        //           <link to='./About'>about</link>
        //           <link to='./ConectUs'>ContactUs</link>
        //         </li>
        //       </ul>
        //     </nav>
         
        //    <Switch>  
        //    <Route path='./ConectUs'component={ConectUs}/>
        //    <Route path='./About'component={About}/>
        //    <Route path='./ConectUs'component={Home}/>
        //    </Switch>
        //  </div>
        //  </Router>

