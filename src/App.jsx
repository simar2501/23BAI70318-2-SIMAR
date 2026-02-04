import { Container, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/contact'

function App(){
return(
<>
<Navbar/>

<Box sx={{pt:10,pb:6}}>
<Container
maxWidth="lg"
sx={{
background:'#f8f9f5',
borderRadius:6,
boxShadow:'0 30px 80px rgba(0,0,0,.35)',
display:'flex',
flexDirection:'column',
gap:14,
p:{xs:4,md:6}
}}
>
<Hero/>
<About/>
<Projects/>
<Contact/>
</Container>
</Box>
</>
)
}

export default App
