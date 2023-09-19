import { Button, Flex, FormControl, FormLabel, Icon, Link, Select, Switch } from '@chakra-ui/react'
import React from 'react'
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as PinIcon} from "../../assets/newIcons/pin.svg";
import {ReactComponent as ExternalIcon} from "../../assets/newIcons/external.svg";

export default function EventForm() {

    const navigate = useNavigate();

    const [dateInput, setDateInput] = React.useState(new Date());

    
    const plusIcon = <Icon boxSize={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Icon>

    const pinIcon = <Icon boxSize={6}>
                        <PinIcon />
                    </Icon>

    const externalLinkIcon = <Icon boxSize={6}>
                               <ExternalIcon/>
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
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'15px'}
            > 
                Seleccionar ubicación
            </Button>

            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    ¿Evento privado?
                </FormLabel>
                <Switch id='email-alerts' />
            </FormControl>

            <Link onClick={() => navigate('../create-event/other-configurations', {replace: true})}>
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
                    fontFamily={'ArcadeClassic'}
                    letterSpacing={2}
                    fontSize={'20px'}
                > 
                    Crear evento
                </Button>
            </Flex>
        </Flex>
    )
}
