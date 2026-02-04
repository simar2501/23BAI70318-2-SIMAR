import { Grid, Typography, Stack, Button, Box } from '@mui/material'

function Hero({ setSection }){
return(
<Box sx={{display:'flex',alignItems:'center',pt:6,pb:6}}>
<Grid container spacing={6} alignItems="center">
<Grid item xs={12} md={5}>
<Box
sx={{
width:'100%',
aspectRatio:'1/1',
backgroundImage:'url(/developer.jpg)',
backgroundSize:'cover',
backgroundPosition:'center',
clipPath:'ellipse(48% 55% at 50% 50%)'
}}
/>
</Grid>

<Grid item xs={12} md={7}>
<Stack spacing={3}>
<Typography variant="h2" sx={{color:'#1f3a2a'}}>
Hello, I’m Simar
</Typography>

<Typography>
Final year CSE student specializing in AI/ML, focused on clean UI systems and modern web development.
</Typography>

<Button
variant="contained"
sx={{background:'#1f3a2a',color:'#f8f9f5',width:'fit-content'}}
onClick={()=>setSection('projects')}
>
View My Work
</Button>
</Stack>
</Grid>
</Grid>
</Box>
)
}

export default Hero
