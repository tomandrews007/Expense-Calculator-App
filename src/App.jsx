import React from 'react'
import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react'
import ExpenseSplitter from './components/ExpenseSplitter'

function App() {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Box textAlign="center">
            <Heading color="blue.600" mb={2}>Expense Splitter</Heading>
            <Text color="gray.600">Split expenses fairly among friends</Text>
          </Box>
          <Box w="100%" bg="white" p={8} borderRadius="xl" shadow="xl">
            <ExpenseSplitter />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
