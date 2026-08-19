export interface JourneyStep {
    id: number;
    number: string;
    title: string;
    description: string;
    image: string;
    duration?: string;
    story: string;
    importance: string;
    curiosity?: string;
    reflection: string;
    discoveries: string[];
}

export const steps: JourneyStep[] = [
    {
        id: 1,
        number: "01",
        title: "Recolección",
        description:
            "Cada cereza madura se recoge manualmente en el momento preciso, respetando el ritmo natural del cafeto.",
        image: "/journey/01-harvest.jpg",
        duration: "Durante varias semanas",
        story:
            "La cosecha comienza mucho antes de que la primera cereza sea retirada de la rama. Durante meses el cafetal cambia lentamente hasta alcanzar el punto donde dulzor, acidez y madurez encuentran equilibrio. El productor recorre la misma planta varias veces porque ninguna rama madura al mismo ritmo.",
        importance:
            "Una sola cereza inmadura puede modificar el perfil sensorial del lote. Por eso la recolección manual continúa siendo una de las labores más determinantes del café de especialidad.",
        curiosity:
            "En una misma rama pueden convivir frutos verdes, pintones y completamente maduros a la vez.",
        reflection: "La naturaleza nunca madura al mismo ritmo.",
        discoveries: ["Selección manual", "Cerezas maduras", "Paciencia", "Primera decisión"]
    },
    {
        id: 2,
        number: "02",
        title: "Selección",
        description:
            "Solo las mejores cerezas continúan el recorrido. Agua, color y experiencia revelan cuáles conservan todo su potencial.",
        image: "/journey/02-selection.jpg",
        duration: "Pocas horas tras cosecha",
        story:
            "Cada cereza pasa por una segunda revisión minuciosa. Solo aquellas que cumplen con los más altos criterios de densidad, madurez uniforme y sanidad continúan el camino hacia la taza.",
        importance:
            "Eliminar frutos imperfectos previene defectos sensoriales y asegura la máxima pureza del perfil en taza.",
        curiosity:
            "La flotación en agua limpia permite separar cerezas vanas antes de cualquier intervención mecánica.",
        reflection: "La calidad siempre comienza descartando lo innecesario.",
        discoveries: ["Clasificación por densidad", "Calidad física", "Uniformidad"]
    },
    {
        id: 3,
        number: "03",
        title: "Despulpado",
        description:
            "La pulpa se separa cuidadosamente para proteger el grano e iniciar la siguiente etapa del proceso.",
        image: "/journey/03-pulping.jpg",
        duration: "El mismo día de cosecha",
        story:
            "La pulpa que protegió la semilla durante meses se retira con extrema delicadeza. El objetivo es liberar el grano recubierto de su mucílago sin generar fricción excesiva ni fracturas.",
        importance:
            "Una calibración milimétrica de la despulpadora evita fisuras en el pergamino y protege el embrión del grano.",
        curiosity:
            "Cada variedad botánica requiere un ajuste específico debido a las variaciones naturales en el tamaño del fruto.",
        reflection: "Cada detalle invisible deja una huella en la taza.",
        discoveries: ["Despulpadora calibrada", "Precisión mecánica", "Protección del grano"]
    },
    {
        id: 4,
        number: "04",
        title: "Fermentación",
        description:
            "El tiempo y los microorganismos transforman lentamente el café, construyendo aromas y complejidad.",
        image: "/journey/04-fermentation.jpg",
        duration: "12 a 48 horas controladas",
        story:
            "Mientras el café descansa en tanques, levaduras y bacterias benéficas transforman los azúcares naturales del mucílago en precursores aromáticos únicos que definirán su complejidad sensorial.",
        importance:
            "El control riguroso de temperatura y tiempo permite esculpir notas florales, frutales y una acidez brillante.",
        curiosity:
            "Diferencias de pocas horas en el tanque pueden transformar totalmente la percepción de dulzor y cuerpo.",
        reflection: "El tiempo también cultiva el café.",
        discoveries: ["Microorganismos benéficos", "Azúcares del mucílago", "Transformación aromática"]
    },
    {
        id: 5,
        number: "05",
        title: "Lavado",
        description:
            "El agua limpia el grano y detiene la fermentación, preservando la pureza del perfil obtenido.",
        image: "/journey/05-washing.jpg",
        duration: "Minutos de precisión",
        story:
            "Aguas puras de vertientes del Macizo Colombiano limpian los granos, retirando los restos de mucílago y deteniendo la actividad fermentativa en el punto exacto de equilibrio.",
        importance:
            "La pureza y frescura del agua de montaña garantiza un perfil límpido, transparente y fiel al terruño.",
        curiosity:
            "El agua utilizada proviene directamente de nacimientos protegidos en las microcuencas de San Agustín.",
        reflection: "El agua guarda memoria del territorio.",
        discoveries: ["Agua de vertiente", "Pureza sensorial", "Punto de corte exacto"]
    },
    {
        id: 6,
        number: "06",
        title: "Secado",
        description:
            "El café descansa durante días hasta alcanzar la humedad ideal para conservar toda su calidad.",
        image: "/journey/06-drying.jpg",
        duration: "10 a 20 días al sol",
        story:
            "Bajo marquesinas solares y corrientes de aire de montaña, el café pierde humedad gradualmente hasta alcanzar entre el 10% y 11.5%, sellando su estabilidad para el reposo.",
        importance:
            "Un secado lento y homogéneo preserva la longevidad del grano y evita el envejecimiento prematuro.",
        curiosity:
            "El café se rastrilla manualmente varias veces al día para que cada grano reciba luz y ventilación homogéneas.",
        reflection: "La paciencia también tiene aroma.",
        discoveries: ["Control de humedad (10-11%)", "Luz solar indirecta", "Movimiento constante"]
    },
    {
        id: 7,
        number: "07",
        title: "Tueste",
        description:
            "El calor revela el carácter de cada origen, desarrollando dulzor, cuerpo y notas aromáticas únicas.",
        image: "/journey/07-roasting.jpg",
        duration: "10 a 14 minutos por bache",
        story:
            "A través de curvas térmicas personalizadas, el calor transforma los compuestos químicos del grano verde, desencadenando la reacción de Maillard y caramelizaciones que despiertan notas de cacao, panela y frutas.",
        importance:
            "El tueste de especialidad busca exaltar las virtudes intrínsecas del origen sin encubrirlas con sobretueste.",
        curiosity:
            "El primer 'crack' auditivo marca la expansión celular del grano y el inicio del desarrollo del sabor.",
        reflection: "El fuego no crea el café: revela su historia.",
        discoveries: ["Reacción de Maillard", "Curvas termodinámicas", "Desarrollo aromático"]
    },
    {
        id: 8,
        number: "08",
        title: "Catación",
        description:
            "Cada lote se evalúa cuidadosamente para comprender su identidad y asegurar que exprese fielmente su origen.",
        image: "/journey/08-cupping.jpg",
        duration: "Evaluación sensorial rigurosa",
        story:
            "Bajo protocolos internacionales de la SCA, catadores certificados analizan fragancia, aroma, acidez, cuerpo, dulzor y balance para certificar el puntaje de especialidad de cada microlote.",
        importance:
            "La catación garantiza trazabilidad sensorial y ofrece retroalimentación directa a las familias productoras.",
        curiosity:
            "La evaluación se realiza en silencio absoluto para calibrar la percepción de cada nota olfativa y gustativa.",
        reflection: "Cada taza conserva la memoria del territorio.",
        discoveries: ["Protocolo SCA", "Puntaje de especialidad", "Análisis sensorial"]
    },
    {
        id: 9,
        number: "09",
        title: "La taza",
        description:
            "El recorrido termina donde comenzó la historia: en una taza que conserva la memoria del territorio y de quienes lo cultivan.",
        image: "/journey/09-cup.jpg",
        duration: "El momento del encuentro",
        story:
            "En el vertido final confluyen la geografía del Macizo Colombiano, el clima del bosque altoandino, meses de trabajo paciente y el conocimiento artesanal de San Agustín. Una experiencia viva lista para ser disfrutada.",
        importance:
            "La preparación consciente completa el círculo virtuoso, transmitiendo el valor y respeto por el origen.",
        curiosity:
            "Una sola taza de café contiene cientos de compuestos aromáticos derivados del suelo y la altura volcánica.",
        reflection: "La taza no es el final: es el puente entre el origen y quien lo comparte.",
        discoveries: ["Extracción consciente", "Memoria viva", "Encuentro con el origen"]
    }
];