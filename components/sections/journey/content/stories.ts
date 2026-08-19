export interface JourneyStory {

    id:number;

    number:string;

    title:string;

    image:string;

    story:string;

    importance:string;

    curiosity:string;

    reflection:string;

    duration:string;

    discoveries:string[];

    ambient:string;

}

export const stories:JourneyStory[]=[

{

id:1,

number:"01",

title:"Recolección",

image:"/coffee/process/01.jpg",

duration:"Durante varias semanas",

ambient:"#A96D37",

story:

`La cosecha comienza mucho antes de que la primera cereza sea retirada de la rama.

Durante meses el cafetal cambia lentamente hasta alcanzar el punto donde dulzor, acidez y madurez encuentran equilibrio.

El productor recorre la misma planta varias veces porque ninguna rama madura al mismo ritmo.

Cada cereza seleccionada representa una decisión tomada con paciencia.`,

importance:

`Una sola cereza inmadura puede modificar el perfil sensorial del lote.

Por eso la recolección manual continúa siendo una de las labores más importantes del café de especialidad.`,

curiosity:

`En una misma rama pueden convivir frutos verdes, pintones y completamente maduros.

Por esa razón una finca puede recorrerse varias veces durante la misma cosecha.`,

reflection:

"La naturaleza nunca madura al mismo ritmo.",

discoveries:[

"Selección manual",

"Cerezas maduras",

"Paciencia",

"Primera decisión"

]

},

{

id:2,

number:"02",

title:"Selección",

image:"/coffee/process/02.jpg",

duration:"Pocas horas",

ambient:"#A87440",

story:

`Cada cereza pasa por una segunda revisión.

Solo aquellas que cumplen los criterios de madurez, tamaño y estado sanitario continúan el recorrido.

Aquí comienza realmente la búsqueda de la consistencia.`,

importance:

`Eliminar frutos dañados evita defectos que podrían alterar toda la taza.`,

curiosity:

`En muchos procesos esta selección todavía se realiza completamente a mano.`,

reflection:

"La calidad siempre comienza descartando lo innecesario.",

discoveries:[

"Clasificación",

"Calidad",

"Uniformidad"

]

},

{

id:3,

number:"03",

title:"Despulpado",

image:"/coffee/process/03.jpg",

duration:"El mismo día",

ambient:"#8E6443",

story:

`La pulpa que protegió la semilla durante meses se retira cuidadosamente.

El objetivo no es acelerar el proceso sino preparar el grano para la siguiente etapa sin dañarlo.`,

importance:

`Una calibración incorrecta puede fracturar el pergamino y disminuir la calidad física del café.`,

curiosity:

`Cada variedad requiere pequeños ajustes en la despulpadora debido al tamaño del fruto.`,

reflection:

"Cada detalle invisible deja una huella en la taza.",

discoveries:[

"Despulpadora",

"Precisión",

"Protección"

]

},

{

id:4,

number:"04",

title:"Fermentación",

image:"/coffee/process/04.jpg",

duration:"12 a 48 horas",

ambient:"#755644",

story:

`Mientras el café descansa, microorganismos naturales transforman lentamente los azúcares presentes en el mucílago.

Es un proceso silencioso donde el tiempo se convierte en un ingrediente más.`,

importance:

`Controlar temperatura y duración permite desarrollar perfiles limpios y complejos.`,

curiosity:

`Unas pocas horas adicionales pueden modificar completamente la percepción del dulzor y la acidez.`,

reflection:

"El tiempo también cultiva el café.",

discoveries:[

"Microorganismos",

"Azúcares",

"Transformación"

]

},

{

id:5,

number:"05",

title:"Lavado",

image:"/coffee/process/05.jpg",

duration:"Minutos",

ambient:"#68849A",

story:

`El agua detiene la fermentación y limpia cuidadosamente cada grano.

No solo elimina el mucílago; también revela la pureza del proceso realizado hasta este momento.`,

importance:

`La calidad del agua influye directamente en la limpieza sensorial del café.`,

curiosity:

`Muchas fincas utilizan agua proveniente de nacimientos naturales cercanos.`,

reflection:

"El agua guarda memoria del territorio.",

discoveries:[

"Agua",

"Pureza",

"Limpieza"

]

},

{

id:6,

number:"06",

title:"Secado",

image:"/coffee/process/06.jpg",

duration:"10 a 20 días",

ambient:"#C59A55",

story:

`El café pierde humedad lentamente bajo condiciones cuidadosamente controladas.

Cada día el grano cambia de manera casi imperceptible hasta alcanzar el punto ideal para conservar toda su calidad.`,

importance:

`Un secado demasiado rápido puede generar tensiones internas y defectos.`,

curiosity:

`El café suele moverse varias veces al día para lograr un secado uniforme.`,

reflection:

"La paciencia también tiene aroma.",

discoveries:[

"Humedad",

"Sol",

"Movimiento"

]

},

{

id:7,

number:"07",

title:"Tueste",

image:"/coffee/process/07.jpg",

duration:"10 a 15 minutos",

ambient:"#CF7B36",

story:

`El calor revela lentamente todo aquello que el territorio escribió durante meses.

El tostador acompaña el proceso segundo a segundo buscando equilibrio y expresión.`,

importance:

`Cada curva de temperatura modifica aromas, dulzor y cuerpo.`,

curiosity:

`Segundos de diferencia pueden cambiar completamente un perfil sensorial.`,

reflection:

"El fuego no crea el café. Revela su historia.",

discoveries:[

"Calor",

"Reacción de Maillard",

"Aromas"

]

},

{

id:8,

number:"08",

title:"Catación",

image:"/coffee/process/08.jpg",

duration:"Toda una vida",

ambient:"#8C5B3A",

story:

`La taza representa el final del recorrido y, al mismo tiempo, el comienzo de una nueva historia.

Todo lo vivido por el territorio, el productor y el proceso converge finalmente en un solo sorbo.`,

importance:

`La catación permite comprender y mejorar cada cosecha futura.`,

curiosity:

`Los catadores utilizan protocolos internacionales para evaluar un café de manera objetiva.`,

reflection:

"Cada taza conserva la memoria del territorio.",

discoveries:[

"Fragancia",

"Sabor",

"Origen"

]

}

];