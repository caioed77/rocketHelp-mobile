import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';
export function Home() {
    const { colors } = useTheme();

    const [statusSelected, setStatusSelected] = useState<'open' | 'close'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '123',
            patrimony: '123456',
            when: '18/02/2022 as 10:30',
            status: 'open'
        }
    ]);
    const  navigation = useNavigation();
   
    function handleNewOrder(){
        navigation.navigate('new');
    }

    function handleOpenDetails(orderId: string){
        navigation.navigate('details', { orderId })

    }


    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}
            >
                <Logo />

                < IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                />
            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color="gray.100">
                        Meus chamados
                    </Heading>

                    <Text color="gray.200">
                        3
                    </Text>
                </HStack>
                <HStack space={3}>
                    <Filter
                        type="open"
                        tittle='em andamento'
                        onPress={() => setStatusSelected('open')}
                        isActive={statusSelected === 'open'}
                    />
                    <Filter
                        type="close"
                        tittle='finalizado'
                        onPress={() => setStatusSelected('close')}
                        isActive={statusSelected === 'close'}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListEmptyComponent={() => (
                        <Center>
                            <ChatTeardropText color={colors.gray[300]} size={40} />
                            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                                Você ainda não possui {'\n'}
                                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                            </Text>
                        </Center>

                    )}
                />
                <Button tittle="Nova solcitação" onPress={handleNewOrder} />
            </VStack>
        </VStack>
    );
}