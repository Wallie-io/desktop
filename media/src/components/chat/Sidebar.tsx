import { MdSettings, MdDashboard } from 'react-icons/md'
import { HiBell } from 'react-icons/hi'
import { IconButton, Tooltip, VStack } from '@chakra-ui/react'



const Sidebar = () => {
  return (
    <VStack p={6} justifyContent={"space-between"} alignItems={"center"} w="full" borderRadius={1}>
        <VStack>

            <Tooltip label="Dashboard" placement='right'>
            <IconButton color="gray.500" icon={<MdDashboard size={23}/>} aria-label={'Dashboard'} />
            </Tooltip>
            <Tooltip label="Notification" placement='right'>
            <IconButton color="gray.500" icon={<HiBell  size={23}/>} aria-label={'Notification'} />
            </Tooltip>
        </VStack>
        <Tooltip label="Setting" placement='right'>
            <IconButton color="gray.500" icon={<MdSettings  size={23}/>} aria-label={'Setting'} />
            </Tooltip>
    </VStack>
  )
}

export default Sidebar