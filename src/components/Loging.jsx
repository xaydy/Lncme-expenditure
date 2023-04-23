import React from 'react'
import {Box, Button,Container,Typography, } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import background from './images/images3.jpg'


export default function Loging(props) {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/Incme') 
}
const handleLogin1 = () => {
  navigate('/Expenditure')
}
  if (props.isLoggedIn) {
    return (
      <div>loging</div>
    )
    }else{
  return (
    <Container style={{ backgroundImage: `url(${background})`,
    width:'1000vh',height:'100vh' }}>
      <Box>
        <Typography style={{marginTop:100}} variant='h4' align='center'>ການບັກທຶກລາຍຮັບ-ລາຍຈ່າຍ</Typography>
      </Box>
       <Container style={{backgroundColor: '#635D69',width:'200vh', height:'70vh',marginTop:150,borderRadius:100 }}>
      
       <Box>
      <Button style={{width:300,height:100,background:'green',marginLeft:50,marginTop:200}} variant='outlined' onClick={handleLogin}>
        <h1 style={{color:'while'}}>ລາຍຮັບ</h1></Button>
        <Button style={{width:300,height:100,background:'red',marginLeft:400,marginTop:200}} variant='outlined' onClick={handleLogin1}>
        <h1 style={{color:'while'}}>ລາຍຈາ່ຍ</h1></Button>
    </Box>

    </Container>
    </Container>
  )
}
}
