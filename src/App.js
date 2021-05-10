import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Routes, 
  Route, Link, Outlet,
  useParams
} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Container,Box, List , ListItem, Typography }  from "@material-ui/core/"




function App() {
  return (<>
  <BrowserRouter>
    <Navbar />
    <Container maxWidth='md' >

      <Box textAlign="center" pt={5}>

      
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="launch" element={<Launch />} >
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
     </Routes>
     </Box>
    </Container>
   </BrowserRouter>

  </>
  );
}

const NotFound = ()=> {
  return <h1>Sorry your page was not found</h1>
}


const Home = ()=> {
  return <h1>Home</h1>
}

const Launch = ()=> {
  return <>
  <h1>Launch</h1>
  <Outlet />
  </>
}

const LaunchIndex = ()=> {
  return (<><List>
    {Object.entries(shoes).map(([slug,{name,img}]) => {
      return (
    
          <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h3 >{name}</h3>
            <img  alt={name} src={img} />
          </Link>
       
      </li>
   
      )
    })}
  </List></>)
  
}

const LaunchShoe = ()=> {
  const {slug} = useParams()
  const shoe = shoes[slug]

  if(!shoe){
    return <h1>Not Found!</h1>
  }

  return <>
  

  <h1>{shoe.name}</h1>
  <img alt={shoe.name} src={shoe.img} />
  <Outlet />
  </>
}



const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};

export default App;