import React from 'react'
import {Box, Button,Container,Typography, } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export default function Loging(props) {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/Lncme1') 
}
const handleLogin1 = () => {
  navigate('/expenditure1')
}
  if (props.isLoggedIn) {
    return (
      <div>loging</div>
    )
    }else{
  return (
    <Container>
      <Box>
        <Typography style={{marginTop:100}} variant='h4' align='center'>ສາມາດເພີ່ມລາຍຮັບໃດ້ເລີຍ</Typography>
      </Box>
       <Container style={{backgroundColor: '#635D69',width:'100vh', height:'70vh',marginTop:150,borderRadius:100}}>
      
       <Box>
      <Button style={{width:300,height:100,background:'green',marginLeft:200,marginTop:200}} variant='outlined' onClick={handleLogin}>
        <h1 style={{color:'while'}}>ລາຍຮັບມື້ນີ້</h1></Button>
    </Box>

    </Container>
    </Container> 
  )
}
}