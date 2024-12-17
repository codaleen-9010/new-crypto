import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../index';
import { Container, HStack,Image,Heading,Text,VStack ,Button} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';




const Exchanges = () => {

  const [exchanges,setExchanges] = useState([]);
  const [loading,setloading] = useState(true);
  const [error,seterror] = useState(false);
  const [page,setpage] = useState(1);

  const changepage=(page)=>{
    setpage(page);
    setloading(true);
  }

  const btns= new Array(9).fill(1);

  useEffect(()=>{
    const fetchExchanges = async()=>{

      try{
        const {data} = await axios.get(`${server}/exchanges?page=${page}`);
        setExchanges(data);
        setloading(false);
      }
      catch(error){
        setloading(false);
        seterror(true);
      }
      
    };
    fetchExchanges();

  },[page])

  if(error)
    return <ErrorComponent message={'error while fetching Exchanges'}/>
  return <Container maxW={'container.xl'}>

    {loading? <Loader/>: <>
    
    <HStack wrap={'wrap'} justifyContent={'space-evenly'}>

      {exchanges.map((i) =>(
        <Exchangecard 
        key={i.id}
        name={i.name} 
        img={i.image} 
        rank={i.trust_score_rank} 
        url={i.url} 
        />
      ))}



    </HStack>

    <HStack w={'full'} overflow={'auto'} p={'8'}>
      {
        btns.map((item,index)=>(
          <Button 
            key={index}
            bgColor={"blackAlpha.900"} 
            onClick={()=>changepage(index+1)}
            color={'white'}
          >{index+1}
          </Button>
        ))
      }
    </HStack>
    
    
    
    </>}

  </Container>
}

const Exchangecard = ({id,name,img,rank,url}) =>(
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>

)

export default Exchanges
