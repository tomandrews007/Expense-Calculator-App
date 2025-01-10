import React from 'react'
import {
  VStack,
  HStack,
  Input,
  IconButton,
  Text,
  Box
} from '@chakra-ui/react'
import { FaPlus, FaTrash } from 'react-icons/fa'

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
      <Text fontSize="lg" fontWeight="bold">Participants</Text>
      {participants.map((participant) => (
        <HStack key={participant.id} w="100%" spacing={4}>
          <Input
            placeholder="Name"
            value={participant.name}
            onChange={(e) => updateParticipant(participant.id, 'name', e.target.value)}
          />
          <Input
            placeholder="Amount"
            type="number"
            value={participant.amount}
            onChange={(e) => updateParticipant(participant.id, 'amount', e.target.value)}
          />
          {participants.length > 1 && (
            <IconButton
              aria-label="Remove participant"
              icon={<FaTrash />}
              onClick={() => removeParticipant(participant.id)}
              colorScheme="red"
            />
          )}
        </HStack>
      ))}
      <Box textAlign="center">
        <IconButton
          aria-label="Add participant"
          icon={<FaPlus />}
          onClick={addParticipant}
          colorScheme="green"
        />
      </Box>
    </VStack>
  )
}

export default ParticipantList
