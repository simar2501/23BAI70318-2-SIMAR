import { Typography } from '@mui/material'
import { useEffect, useRef } from 'react'

function Contact(){
const ref=useRef()

useEffect(()=>{
const obs=new IntersectionObserver(([e])=>{
if(e.isIntersecting)e.target.classList.add('visible')
},{threshold:.25})
obs.observe(ref.current)
},[])

return(
<section id="contact" ref={ref} className="section">
<Typography variant="h4" sx={{mb:2,color:'#1f3a2a'}}>
Contact
</Typography>

<Typography>
Reach out via email or LinkedIn for collaboration or opportunities.
</Typography>
</section>
)
}

export default Contact
