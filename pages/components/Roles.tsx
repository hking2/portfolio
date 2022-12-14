import Link from 'next/link';
import { HStack, VStack, Flex, Spacer, Text } from '@chakra-ui/layout';

const Roles = () => {
  return (
    <Flex position="absolute" bottom="0" left="0" pb="20" pl="3%">
      <VStack alignItems="start">
        <Text fontWeight="extrabold" className="neonYy">
          Smart Contract Engineering
        </Text>
        <Text fontWeight="extrabold" className="neonYy">
          Fullstack Development
        </Text>
      </VStack>
    </Flex>
  );
};

export default Roles;
