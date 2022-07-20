import { useState } from 'react'
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import  Logo from '../assets/logo_primary.svg';

import { Input } from "../components/input";
import { Button } from "../components/Button";

export default function SingIn(){

    const [name, setName] = useState('Caio');
    const [password, setPassword] = useState('');
    const { colors } = useTheme();

    function handleSingIn(){
        console.log(name, password);      
    }

    return(
       <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
          <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={8}>
                Acesse sua conta
            </Heading>

            <Input 
                placeholder='E-mail'
                mb={3}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
           />
            <Input
                mb={8} 
                placeholder='Senha'
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button 
                tittle='Entrar'
                w="full"
                onPress={handleSingIn}
            />
       </VStack>
    );
}