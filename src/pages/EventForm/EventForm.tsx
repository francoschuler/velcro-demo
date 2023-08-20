import { Button, Flex, FormControl, FormLabel, Icon, Link, Select, Switch } from '@chakra-ui/react'
import React from 'react'
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';

export default function EventForm() {

    const navigate = useNavigate();

    const [categorySelected, setCategorySelected] = React.useState('');
    const [dateInput, setDateInput] = React.useState(new Date());

    
    const plusIcon = <Icon boxSize={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Icon>

    const pinIcon = <Icon boxSize={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </Icon>

    const externalLinkIcon = <Icon boxSize={6}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>

                            </Icon>


    return (
        <Flex flexDirection={'column'} gap={'1rem'}>
            <Select placeholder='Selecciona una categoría'>
                <option value='option1'> Deportes y torneos </option>
                <option value='option2'> Comida </option>
                <option value='option3'> Cines y teatros </option>
                <option value='option3'> Museos y galerías </option>
            </Select>
            <SingleDatepicker
                name="date-input"
                date={dateInput}
                onDateChange={setDateInput}
                propsConfigs={{
                    dayOfMonthBtnProps: {
                      selectedBtnProps: {
                        background: theme.main,
                        color: "white",
                      },
                      todayBtnProps: {
                        background: theme.lightGrey,
                        color: "black"
                      }
                    },
                
                }}
            />

            <Button
                width={'fit-content'} 
                leftIcon={pinIcon} 
                backgroundColor={theme.main} 
                color={"white"}
                onClick={() => navigate('/map')}
            > 
                Seleccionar ubicación
            </Button>

            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    ¿Evento privado?
                </FormLabel>
                <Switch id='email-alerts' />
            </FormControl>

            <Link href='/home'>
                Otras configuraciones {externalLinkIcon}
            </Link>

            <Flex alignItems={'center'} justifyContent={'center'} mt={'2rem'}>
                <Button
                    variant='outline'
                    width={'fit-content'} 
                    leftIcon={plusIcon} 
                    backgroundColor={'white'} 
                    color={theme.main}
                    border={`2px solid ${theme.main}`}
                > 
                    Crear evento
                </Button>
            </Flex>
        </Flex>
    )
}
