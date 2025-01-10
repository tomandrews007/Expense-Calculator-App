import React from 'react'
import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import ExpenseSplitter from './components/ExpenseSplitter'

function App() {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Heading color="blue.600">Expense Splitter</Heading>
          <Box w="100%" bg="white" p={6} borderRadius="lg" shadow="md">
            <ExpenseSplitter />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
