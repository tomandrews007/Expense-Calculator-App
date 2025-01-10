import React from 'react'
import {
  VStack,
  HStack,
  Input,
  IconButton,
  Text,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { FaPlus, FaTrash, FaUser, FaDollarSign } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function ParticipantList({ participants, setParticipants }) {
  const addParticipant = () => {
    setParticipants([
      ...participants,
      { id: Date.now(), name: '', amount: '' }
    ])
  }

  const removeParticipant = (id) => {
    setParticipants(participants.filter(p => p.id !== id))
  }

  const updateParticipant = (id, field, value) => {
    setParticipants(participants.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ))
  }

  return (
    <VStack w="100%" spacing={4} align="stretch">
      <Text fontSize="xl" fontWeight="bold" color="blue.700">
        Add Participants
      </Text>
      {participants.map((participant, index) => (
        <MotionBox
          key={participant.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <HStack w="100%" spacing={4} p={2} bg="white" borderRadius="md" shadow="sm">
            <InputGroup>
              <InputLeftElement>
                <FaUser color="gray" />
              </InputLeftElement>
              <Input
                placeholder="Name"
                value={participant.name}
                onChange={(e) => updateParticipant(participant.id, 'name', e.target.value)}
                _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px blue.400" }}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <FaDollarSign color="gray" />
              </InputLeftElement>
              <Input
                placeholder="Amount"
                type="number"
                value={participant.amount}
                onChange={(e) => updateParticipant(participant.id, 'amount', e.target.value)}
                _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px blue.400" }}
              />
            </InputGroup>
            {participants.length > 1 && (
              <IconButton
                aria-label="Remove participant"
                icon={<FaTrash />}
                onClick={() => removeParticipant(participant.id)}
                colorScheme="red"
                variant="ghost"
                _hover={{ bg: 'red.50' }}
              />
            )}
          </HStack>
        </MotionBox>
      ))}
      <Box textAlign="center" py={2}>
        <IconButton
          aria-label="Add participant"
          icon={<FaPlus />}
          onClick={addParticipant}
          colorScheme="green"
          size="lg"
          isRound
          _hover={{ transform: 'scale(1.1)' }}
          transition="all 0.2s"
        />
      </Box>
    </VStack>
  )
}

export default ParticipantList
