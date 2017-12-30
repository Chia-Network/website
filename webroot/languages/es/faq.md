### Chia FAQ

+ <b>P: Qué es Chia?</b>

R: Chia Network usa espacio en discos duros sin usar para "cosechas semillas". La cosecha (farming) de Chia usa prueba de espacio (PoSpace), coordinada con otro algoritmo de consenso, prueba de tiempo (PoT). El objetivo de ésto es prevenir el derroche de cantidades inmensas de energía para securizar la red, y la centralización originada por el minado mediante ASIC. Un disco duro rellenará su espacio vacío con pruebas generadas aleatoriamente.


+ <b>P: Qué significa la cosecha?</b>

R: La cosecha de chia es un poco como el minado en el sentido en el que es como se generan los bloques. Los bloques se cosechan generando un snapshot del espacio (seeding) del almacenamiento disponible en tu(s) disco(s) duro(s). En proporción a dicho almacenamiento, recibirás pagas al estilo de una lotería por la cantidad  por la que estés dispuesto a sembrar para Chia. Contra más boletos "compres" más posibilidad de ganar tendrás. No habrá incentivo para comprar discos duros para la cosecha, ya que ésta funciona gracias al almacenamiento sin uso que se tenga en el momento, sin costo alguno para los granjeros. Gracias a que existe una cantidad inmensa de almacenamiento disponible en el mundo, la posibilidad de ganar una recompensa es extremadamente baja para el usuario común, pero considerando no hace uso de una cantidad significativa de energía, no es un problema si la recompensa es pequeña e infrecuente. Chia implica no pools, mineros, ASICs y desperdiciar energía.

+ <b>P: Cuál es la principal diferencia entre Chia y Bitcoin?</b>

R: Chia se cosecha con discos duros en vez de minar con poder computacional, permitiendo así un acceso más fácil a los usuarios, y reduciendo drásticamente el coste/derroche de securizar la red (electricidad perdida). Chia es resistente a la centralización de los granjeros. Chia provee una serie de mejoras básicas: Todo son BLS signatures para permitir mejores smart transactions, y una serie de arreglos como timewarp. El propósito es hacer que los hard forks sean efectivamente imposibles, por lo que la gobernanza vendrá por la decisión del usuario y por incentivos descentralizados estilo bitcoin

+ <b>P: Qué es la "Prueba de Espacio"?</b>

A: "Prueba de espacio" no es realmente almacenamiento. El almacenamiento es algo directamente útil y requiere mucho ancho de banda.
Las pruebas de espacio son de datos inútiles para cualquier otra cosa, y generarlos no requiere prácticamente ancho de banda. Prueba de espacio actual requiere una cantidad ridícula de ancho de banda por lo que no se usará en Chia


+ <b>P: Qué significa el seedeo en Chia?</b>

R: El seedeo es un proceso que requiere leer y escribir todo sector más de una vez; pero una vez que un disco esta "seedeado", se podrá cosecha con él siempre y cuando las pruebas sigan en él. Los discos se leerán usando APIs de o de bajo nivel. El cliente soportará "seedear" múltiples discos. La única razón para re-seedear un disco es si demasiadas pruebas han sido ya sobreescritas. Re-seedear no proporciona ninguna ventaja. El proceso de "seedeo" tardará un tiempo significativo sólo una vez por disco.


+ <b>P: Cuando se lanzará Chia?</b>

R: Chia planea vender in Q2 y lanzar a finales de 2018, pero ésto no es definitivo y depende del desarrollo


+ <b>P: Cómo podré comprar Chia?</b>

R: Planeamos hacer una especia de venta al público. Estamos barajando con abogados en estos momentos. Necesitamos recaudar algo de fondos ya que todavía hay bastante trabajo por hacer. Estamos por ahora dejandolo funcionar y estaría bien financiar el desarrollo y las mejoras futuras (muchas de las cuales se compartirán con Bitcoin). Habrá una pre-cosecha de la moneda la cual se reservará para financiar desarrollo futuro y para el equipo. El mecanismo de financiación será transparente y disponible públicamente antes de que la venta comience.


+ <b>P: En qué fase se encuentra el desarrollo de Chia?</b>

R: No se ha escrito código todavía. Se han realizado una serie de primitivas matemáticas, y están en proceso de publicación. Estamos contratando a programadores en estos momentos y la programación comenzará pronto.

+ <b>P: Cuándo podré sembrar Chia?</b>

R: Habrá una venta pública el próximo año, y podrás sembrar una vez que la red se lance.


+ <b>P: Qué significa la Prueba de Tiempo?</b>

R: Técnicamente las Pruebas de Tiempo son también parte de la cosecha, pero estas tienden a estar hechas por unos pocos actores que no obtienen nada a cambio directamente


+ <b>P: Por qué el nombre Chia?</b>

R: "Chia" es el nombre de un grano. Va relacionado con el tema del "siembra"


+ <b>P: Más disco duro disponible significa más Chia?</b>

R: Tus posibilidades de sembrar el siguiente bloque son directamente proporcionales a la cantidad de espacio en disco disponible.

+ <b>P: Merece la pena comprar discos duros para sembrar Chia?</b>

R: El resultado más probable es que muy rápidamente se haga no rentable el comprar discos duros simplemente para el propósito de la cosecha, aunque siempre podrás obtener beneficios de tu espacio sin usar. Estos beneficios serán probablemente pequeños, pero no tendrá un costo adicional si ya se dispone del espacio por alguna otra razón. La gente ha pagado ya mucho por capacidad de almacenamiento sin uso, por lo que no será rentable comprar almacenamiento por el simple propósito de sembrar. Esto está directamente relacionado con que el almacenamiento es útil para otras cosas. Aunque la cosecha en sí no es útil, ya que los cálculos en sí no son productivos, pero hacen uso de un recurso útil.


+ <b>P: En qué se diferencia Chia de otras monedas de almacenamiento como Burst?</b>

R: Ya que Burstcoin no tiene el componente de prueba de tiempo, hay algunos ataque que hacen que el algoritmo de minado sea inadecuado.


+ <b>P: Cómo se financiará Chia?</b>

R: Tenemos el suficiente trabajo de desarrollo para que levantar fondos sea necesario. Vamos a intentar hacer ésto de la manera más transparente y abierta al público posible.


+ <b>P: Cómo sea Chia de rápido?</b>

R: Chia soportará "lightning Network" de primeras, por lo que la velocidad de los pagos dependerá de si hay un "lightning path" disponible. Transacciones "Lightning" no duran más de unos pocos segundos con una latencia de red razonable. Nuestros tiempos para transacciones "On-chain" serán similares a los de Bitcoin


+ <b>P: Algunos otros desarrollos de Chia en progreso?</b>

R: Después del release inicial, el foco estará en soportar lightning, añadiendo canales off-chain, soportando MAST y probablemente Simplicity y Covenants para soportar vaults. Chia va a soportar atomic swaps desde el principio. Partimos de un Bitcoin script usando firmas BLS en lugar de DSA. El plan es sacar releases en conjunto con rollouts de Bitcoin ya que se basa en el mismo código fuente.


+ <b>P: Qué lenguaje de scripting soportará Chia?</b>

R: Elegiremos un Bitcoin script mínimamente modificado para empezar (cambiando a firmas BLS), y a largo plazo probablemente nos decantemos por Simplicity. Partimos del código fuente de Bitcoin, por lo que C/C++.


+ <b>P: Cómo se ajustará la dificultad de cosechado de Chia?</b>

R: Como Bitcoin, la dificultad se ajustará dinámicamente para mantener el tiempo de bloque regular. Como resultado, conforme la competición de cosechado aumente, se podrá esperar que las recompensas de un disco en concreto disminuyan. No esperamos que el siembra tenga un volumen suficientemente algo para que compense comprar discos para el siembra.


+ <b>P: Cuanto espacio se necesitará?</b>

R: Habrá probablemente un tamaño mínimo de asignación de 100GB, o 1TB o similar. No es tanto el hacer cumplir un mínimo de espacio como el requerir que pase una mínima cantidad de tiempo para una asignación para que atacantes no puedan repetidamente generar y probar nuevas asignaciones en vez de hacer una simple búsqueda.


+ <b>P: Podré sembrar chia en mi PC de escritorio?</b>

R: Habrá algunas recompensas para cosechadores de escritorio y el coste será todavía prácticamente cero, para alguna recompensas distintas de cero. No es como en el minado de Bitcoin en el cual un PC de escritorio pierde dinero minando debido a la electricidad que está gastando.


+ <b>P: Tendrá Chia un supply similar a Bitcoin?</b>

R: Habrá recompensas de siembra pero no tendrán halving, por lo que la cantidad en circulación aumenta sin límites, aunque la proporción de monedas (granos?) acuñadas (germinados?) disminuye cada año una fracción del total.


+ <b>P: Cómo es que Chia es resistente a la centralización minera?</b>

R: La red de Chia usa espacio libre en Disco Duro para sembrar semillas. Ya que hay mucho espacio en Disco Duro disponible y cualquiera con espacio libre podrá sembrar, ésto hace que la siempre sea descentralizada. Un sistema de minado Bitcoin ASIC centralizado hace que la formación de bloques sea un proceso centralizado ya que el minado ASIC y los costes de electricidad están por encima del poder adquisitivo de mucha gente. Fabricantes de discos duros podrán optimizar para que siembre más rápido, pero el coste de hacer ésto no merece la pena. Por lo que Chia será la criptomoneda más descentralizada del mercado.


+ <b>P: Será Chia código abierto?</b>

R: Liberaremos papers académicos sobre los componentes elementales, y toda la implementación del código será código abierto. Vamos a usar la licencia Apache. Hay cierta posibilidad de que lo dejemos algo más propietario cuando todavía el testnet esté funcionando pero el mainnet no, aunque definitivamente usaremos Apache una vez que mainnet esté funcionando.


+ <b>P: Tenéis whitepapers que pueda leer?</b>

R: En lugar de simplemente un whitepaper, vamos a tener publicaciones académicas en revistas. Por ahora tenemos la que se ha aceptado en Asiacrypt (https://eprint.iacr.org/2017/893). Habrá por lo menos dos más acerca de pruebas de tiempo y cómo unir todas las piezas juntas en una Cadena de Bloques.


+ <b>P: Dónde puedo saber más?</b>

R: Puedes suscribirte a nuestra lista de noticias para tener información tal como salga. También estamos disponibles para discutir en Keybase. Visita nuestra página principal para enlaces
