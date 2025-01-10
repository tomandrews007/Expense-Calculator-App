import { Box, Container, Heading } from '@chakra-ui/react'
import ExpenseSplitter from './components/ExpenseSplitter'

function App() {
  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center" mb={8}>
        <Heading>Expense Splitter</Heading>
      </Box>
      <ExpenseSplitter />
    </Container>
  )
}

export default App
