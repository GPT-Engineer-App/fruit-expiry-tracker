import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Text,
  Heading,
  Container
} from '@chakra-ui/react';

const fruitShelfLife = {
  bananas: 7,
  apples: 30,
  strawberries: 5
};

const Index = () => {
  const [fruitType, setFruitType] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const calculateExpirationDate = () => {
    const shelfLife = fruitShelfLife[fruitType];
    const purchase = new Date(purchaseDate);
    const expiration = new Date(purchase.setDate(purchase.getDate() + shelfLife));
    setExpirationDate(expiration.toDateString());
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading>Track Fruit Expiration</Heading>
        <FormControl>
          <FormLabel htmlFor='fruit-type'>Fruit Type</FormLabel>
          <Select id='fruit-type' placeholder='Select fruit' onChange={(e) => setFruitType(e.target.value)}>
            <option value='bananas'>Bananas</option>
            <option value='apples'>Apples</option>
            <option value='strawberries'>Strawberries</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='purchase-date'>Purchase Date</FormLabel>
          <Input id='purchase-date' type='date' onChange={(e) => setPurchaseDate(e.target.value)} />
        </FormControl>
        <Button colorScheme='blue' onClick={calculateExpirationDate}>Calculate Expiration Date</Button>
        {expirationDate && (
          <Box p={4} bg='gray.100' borderRadius='md'>
            <Text fontSize='lg'>Estimated Expiration Date: {expirationDate}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;