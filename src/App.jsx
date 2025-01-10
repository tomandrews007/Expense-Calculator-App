import React from 'react'
import { Box, Container, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import ExpenseSplitter from './components/ExpenseSplitter'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const bgColor = useColorModeValue('white', 'gray.700')
  const headingColor = useColorModeValue('blue.600', 'blue.200')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.800')} py={8}>
      <ThemeToggle />
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Box textAlign="center">
            <Heading color={headingColor} mb={2}>Expense Splitter</Heading>
            <Text color={textColor}>Split expenses fairly among friends</Text>
          </Box>
          <Box w="100%" bg={bgColor} p={8} borderRadius="xl" shadow="xl">
            <ExpenseSplitter />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
