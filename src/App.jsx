import { Container, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App(){
const[section,setSection]=useState(null)
const[show,setShow]=useState(false)

useEffect(()=>{
if(section){
setShow(false)
setTimeout(()=>setShow(true),120)
}
},[section])

return(
<>
<Navbar setSection={setSection}/>

<Box sx={{pt:10,pb:6}}>
<Container
maxWidth="lg"
sx={{
background:'#f8f9f5',
borderRadius:6,
boxShadow:'0 30px 80px rgba(0,0,0,.35)',
display:'flex',
flexDirection:'column',
gap:6,
p:{xs:4,md:6}
}}
>
<Hero setSection={setSection}/>

{section && (
<Box
key={section}
className={`fade ${show?'show':''}`}
>
{section==='about' && <About/>}
{section==='projects' && <Projects/>}
{section==='contact' && <Contact/>}
</Box>
)}

</Container>
</Box>
</>
)
}

export default App
