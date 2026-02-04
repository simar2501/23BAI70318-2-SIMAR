import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function Navbar(){
const scrollTo=id=>{
const el=document.getElementById(id)
const y=el.getBoundingClientRect().top+window.pageYOffset-90
window.scrollTo({top:y,behavior:'smooth'})
}

return(
<AppBar
position="fixed"
sx={{
top:0,
left:0,
right:0,
zIndex:1400,
background:'rgba(15,42,29,.95)',
backdropFilter:'blur(10px)'
}}
>
<Toolbar sx={{maxWidth:1200,width:'100%',mx:'auto'}}>
<Typography sx={{flexGrow:1,fontWeight:700,color:'#f8f9f5'}}>
Simar.dev
</Typography>

<Box sx={{display:'flex',gap:2}}>
<Button sx={{color:'#f8f9f5'}} onClick={()=>scrollTo('about')}>
About
</Button>
<Button sx={{color:'#f8f9f5'}} onClick={()=>scrollTo('projects')}>
Projects
</Button>
<Button
variant="contained"
sx={{background:'#f8f9f5',color:'#1f3a2a'}}
onClick={()=>scrollTo('contact')}
>
Contact
</Button>
</Box>
</Toolbar>
</AppBar>
)
}

export default Navbar
