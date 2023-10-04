export interface EventModel {
    id: string,
    name: string,
    description: string,
    private: boolean,
    maxParticipants: number,
    participants: number,
    ageRestriction: number | null
}

export const events: EventModel[] = [
    {
        id: '1',
        name: 'Yoga Matutino',
        description: 'Clase gratuita de Yoga en el Retiro, ningún material es necesario ya que se proporcionará en el punto acordado dentro del parque. ¡Ven a probar sin compromiso!',
        private: true,
        maxParticipants: 14,
        participants: 7,
        ageRestriction: null
    },
    {
        id: '2',
        name: 'Torneo Pádel',
        description: 'Torneo de padel en nuevos ministerios. Las parejas se adjudicarán en el chat! (Hay que traer las palas de casa). Tras el partido echaremos unas cervezas en el bar Antonio.',
        private: false,
        maxParticipants: 14,
        participants: 7,
        ageRestriction: null
    },
    {
        id: '3',
        name: 'Fútbol Sala',
        description: 'Fútbol sala en conquistadores mañana a las 8. No hay que pagar pista, los equipos se harán allí. Imprescindible vestimenta deportiva, hablaremos previamente el color de la misma.',
        private: false,
        maxParticipants: 14,
        participants: 3,
        ageRestriction: null
    },
    {
        id: '4',
        name: 'Cenita Bienvenida',
        description: 'Cenita de piso por la llegada de una nueva compañera eramus. Imprescindible buen rollo y acatar las normas de la casa. Será en la terraza ',
        private: true,
        maxParticipants: 14,
        participants: 12,
        ageRestriction: null
    },
    {
        id: '5',
        name: 'Exposición Fotografía Callejera',
        description: 'Exposición de fotografía callejera en la filmoteca el próximo jueves, si quieres participar apúntate antes del miércoles! La temática principal será fotografía callejera y el formato será libre. Ya no necesitarás ser profesional para poder exponer tus propias creaciones!! Animate',
        private: true,
        maxParticipants: 14,
        participants: 8,
        ageRestriction: null
    },
    {
        id: '6',
        name: 'Micro Abierto Sala Trajano',
        description: 'Micro abierto y concierto de jazz en la sala trajano, entrada libre, gratuita y para todos los publicos.. no te lo pierdas!!',
        private: true,
        maxParticipants: 14,
        participants: 5,
        ageRestriction: null
    },
    {
        id: '7',
        name: 'Cervecitas Playa',
        description: 'Quien se apunta a unas Cervecitas en la playa de lanzada?? Llevamos neveras, altavoz y muy buen rollo!! si tienes perro no dudes en traerlo!! :))',
        private: true,
        maxParticipants: 14,
        participants: 2,
        ageRestriction: 20
    }
]