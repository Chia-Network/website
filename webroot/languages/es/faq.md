### Chia FAQ

+ <b>P: Qué es Chia?</b>

R: Chia Network usa espacio en discos duros sin usar para "cosechas semillas". La cosecha (farming) de Chia usa prueba de espacio (PoSpace), coordinada con otro algoritmo de consenso, prueba de tiempo (PoT). El objetivo de ésto es prevenir el derroche de cantidades inmensas de energía para securizar la red, y la centralización originada por el minado mediante ASIC. Un disco duro rellenará su espacio vacío con pruebas generadas aleatoriamente.


+ <b>P: Qué significa la cosecha?</b>

R: La cosecha de chia es un poco como el minado en el sentido en el que es como se generan los bloques. Los bloques se cosechan generando un snapshot del espacio (seeding) del almacenamiento disponible en tu(s) disco(s) duro(s). En proporción a dicho almacenamiento, recibirás pagas al estilo de una lotería por la cantidad  por la que estés dispuesto a cosechar para Chia. Contra más boletos "compres" más posibilidad de ganar tendrás. No habrá incentivo para comprar discos duros para la cosecha, ya que ésta funciona gracias al almacenamiento sin uso que se tenga en el momento, sin costo alguno para los granjeros. Gracias a que existe una cantidad inmensa de almacenamiento disponible en el mundo, la posibilidad de ganar una recompensa es extremadamente baja para el usuario común, pero considerando no hace uso de una cantidad significativa de energía, no es un problema si la recompensa es pequeña e infrecuente. Chia implicará no pools, mineros, ASICs y desperdiciar energía.

+ <b>P: Cuál es la principal diferencia entre Chia y Bitcoin?</b>

R: Chia se cosecha con discos duros en vez de minar con poder computacional, permitiendo así un acceso más fácil a los usuarios, y reduciendo drásticamente el coste/derroche de securizar la red (electricidad perdida). Chia es resistence a la centralizacion de los granjeros. Chia provee una serie de mejoras básicas: Todo son BLS signatures para permitir mejores smart transactions, y una serie de arreglos como timewarp. El propósito es hacer que los hard forks sean efectivamente imposibles, por lo que la gobernanza vendrá por la decisión del usuario y por incentivos descentralizados estilo bitcoin

+ <b>P: Qué es la "Prueba de Espacio"?</b>

A: "Prueba de espacio" no es realmente almacenamiento. El almacenamiento es algo directamente útil y requiere mucho ancho de banda.
Las pruebas de espacio son de datos inútiles para cualquier otra cosa, y generarlos no requiere prácticamente ancho de banda. Prueba de espacio actual requiere una cantidad ridícula de ancho de banda por lo que no se usará en Chia


+ <b>P: Qué significa el semillaje (seeding) en Chia?</b>

R: El semillaje es un proceso que requiere leer y escribir todo sector más de una vez; pero una vez que un disco esta "seedeado", se podrá cosecha con él siempre y cuando las pruebas sigan en él. Los discos se leerán usando APIs de accesso de bajo nivel. El cliente soportará "seedear" multiples discos. La única razón para re-seedear un disco es si demasiadas pruebas han sido ya reescritas. Re-seedear no proporciona ninguna ventaja. El proceso de "seedeo" tardará un tiempo significativo sólo una vez por disco.


+ <b>P: Cuando se lanzará Chia?</b>

R: Chia planea vender in Q2 y lanzar a finales de 2018, pero ésto no es definitivo y depende del desarrollo


+ <b>P: Cómo podré comprar Chia?</b>

R: Planeamos hacer una especia de venta al público. Estamos barajandolo con abogados en estos momentos. Necesitamos recaudar algo de fondos ya que todavía hay bastante trabajo por hacer. Estamos por ahora dejandolo funcionar y estaría bien financiar el desarrollo y las mejoras futuras (muchas de las cuales se compartirán con Bitcoin). Habrá una pre-cosecha de la moneda la cual se reservará para financiar desarrollo futuro y para el equipo. El mecanismo de financiación será transparente y disponible públicamente antes de que la venta comience.


+ <b>P: En qué fase se encuentra el desarrollo de Chia?</b>

R: No se ha escrito código todavía. Se han realizado una seria de primitivas matemáticas, y están en proceso de publicación. Estamos contratando a programadores en estos momentos y la programación comenzará pronto.

+ <b>P: Cuándo podré cosechar Chia?</b>

R: Habrá una venta pública el próximo año, y podrás cosechar una vez que la red se lance.


+ <b>P: Qué significa la Prueba de Tiempo?</b>

R: Técnicamente las Pruebas de Tiempo son también parte de la cosecha, pero estas tienden a estar hechas por unos pocos actores que no obtienen nada a cambio directamente


+ <b>P: Por qué el nombre Chia?</b>

R: "Chia" es el nombre de un grano. Va relacionado con el tema del "cosechaje"


+ <b>P: Más disco duro disponible significa más Chia?</b>

R: Tus posibilidades de cosechar el siguiente bloque son directamente proporcionales a la cantidad de espacio en disco disponible.

+ <b>P: Merece la pena comprar discos duros para cosechar Chia?</b>

R: El resultado más probable es que muy rápidamente se haga no rentable el comprar discos duros simplemente para el propósito de la cosecha, aunque siempre podrás obtener beneficios de tu espacio sin usar. Estos beneficios serán probablemente pequeños, pero no tendrá un costo adicional si ya se dispone del espacio por alguna otra razón. La gente ha pagado ya mucho por capacidad de almacenamiento sin uso, por lo que no será rentable comprar almacenamiento por el simple propósito de cosechar. Esto está directamente relacionado con que el almacenamiento es útil para otras cosas. Aunque la cosecha en sí no es útil, ya que los cálculos en sí no son productivos, pero hacen uso de un recurso útil.


+ <b>: How is Chia any different from other storage coins such as Burst?</b>

A: Because burstcoin doesn't have the proof of time component, there are some attacks that make it unsuitable as a mining algorithm.



+ <b>Q: How is Chia going to be funded?</b>

A: We have enough development work to do that raising funds is necessary to make it happen. We're going to try to do so in a way which is as transparent and open to the public as possible.



+ <b>Q: How fast will Chia be?</b>

A: Chia will support lightning Network out of the box, so payment speed will depend on whether there is an available lightning path. Lightning transactions take less than a few seconds on reasonable Network latencies. Our block times for on-chain transactions will be similar to Bitcoin.



+ <b>Q: Any other Chia developments in the works?</b>

A: After the initial release focus will be on supporting lightning as it is today, adding in off-chain channels, supporting MAST and probably simplicity and covenants to support vaults. Chia is going to support atomic swaps out of the gate. We're starting with Bitcoin script using BLS signatures instead of DSA. The plan is to roll releases out in conjunction with Bitcoin rollouts because it's based on the same codebase.



+ <b>Q: What scripting language will Chia use?</b>

A: We will be going with minimally modified Bitcoin script for starters (switch to BLS signatures) and longer term probably going with Simplicity. We're building on the Bitcoin codebase, so C/C++.



+ <b>Q: How will Chia farming difficulty adjust?</b>

A: Like Bitcoin, difficulty will dynamically adjust to keep block time regular. As a result, as farming competition goes up, you can expect rewards from a particular disk to go down. We do not expect farming to have a high enough expected value to be worth purchasing drives in order to farm.



+ <b>Q: How large will a hard drive have to be?</b>

A: There will likely be a minimum allocation size of 100 GB or 1 TB or so. It isn't so much to enforce a minimum as to require a minimum amount of wall clock time to pass before an allocation can be done so attackers can't repeatedly generate and try new allocations instead of doing a single lookup.



+ <b>Q: Would I be able to farm Chia on my desktop?</b>

A: There will still be some rewards for desktop farmers and the cost will still be effectively zero for some nonzero rewards. It isn't like Bitcoin mining where a desktop loses money mining because of the electricity it's burning.



+ <b>Q: Will Chia have a similar supply to that of Bitcoin?</b>

A: There will be farming rewards but they won't have halving so the amount in circulation increases without bound but the proportion of coins (grains?) minted (grown?) each year goes down as a fraction of the total so far.



+ <b>Q: How is chia resistant to miner centralization?</b>

A: Chia Network uses vacant hard disk drive (HDD) space to farm seeds. As there is so much HDD space available and anyone with HDD space will be able to farm, this makes farming decentralized. A Bitcoin Asic centralized mining system makes the formation of blocks a centralized process because ASIC mining and electricity costs are beyond many people's affordability. Manufacturers of HDD could optimize to farm faster, but the cost of doing so is not worth the reward. Thus Chia will be the most decentralized cryptocurrency on the market.



+ <b>Q: Will Chia be open source?</b>

A: We'll release academic papers about the building blocks, and all implementation code will be open source. We're going to use the Apache license. There's some chance we'll keep it a bit more proprietary when testnet is out but mainnet isn't up yet, but definitely Apache once mainnet is up.



+ <b>Q: Do you have whitepapers where I can read more?</b>

A: Instead of just one whitepaper, we're going to have academic papers in journals. So far we have the one which got accepted to Asiacrypt (https://eprint.iacr.org/2017/893). There will be at least two more going over proofs of time and how to hook the whole thing together into a blockchain.



+ <b>Q: Where can I find out more?</b>

A: You can sign up for the announcements list to get info as it comes out. Also we're available to discuss announcements on Keybase. Check out our homepage for links.

