import { Grid, Typography, Stack, Button, Box } from '@mui/material'

function Hero(){
return(
<Box
sx={{
minHeight:'100vh',
display:'flex',
alignItems:'center',
pt:10 /* offset for fixed navbar */
}}
>
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
onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})}
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
