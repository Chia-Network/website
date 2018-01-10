### Chia FAQ

+ <b>Q: Šta je Chia?</b>

A: Chia koristi prazan prostor na čvrstim diskovima za "Farm seeds". Proces "Chia farming" koristi dokaz o prostoru (PoS) koordiniran sa drugim konsenzusnim algoritmom, dokazom vremena (PoT). Cilj je da se spriječi gubitak ogromnih količina energije koja obezbeđuje mrežu i centralizaciju ASIC-a. Prazan prostor čvrstih diskova će se ispunjavati nasumično generisanim "dokazima".



+ <b>Q: Šta "Farming" znači?</b>

A: Farmanje (eng. "Chia Farming") je poput rudarenja Bitcoin-a, to je način na koji se prave blokovi. "Farming" koristi dostupan prostor na vašem čvrstom disku i na osnovu prostora za skladištenje, kao procenat, dobićete naknadu. Ono što "farming" radi je korišćenje slobodnog prostora. Pošto postoji mnogo skladišta u svijetu, šansa da dobijete nagradu je izuzetno niska za prosiječnog korisnika. Uzimajući u obzir da "Chia Farming" koristi zanemarivu energiju, propusni opseg i prostor, nije velika stvar ako je vaša nagrada mala.



+ <b>Q: Koja je razlika između valuta Chia i Bitcoin?</b>

A: Chia se obrađuje čvrstim diskovima umesto rudarenja sa procesnom snagom, time omogućava lakši pristup korisnicima i znatno smanjivanje troškova / gubitaka obezbijeđivanja mreže (sagorevanje električne energije). Chia je otporna na centralizaciju i ima mnogo poboljšanja: koriste se BLS potpisi za bolju podršku pametnih transakcija, ispravke grešaka poput Timevarp-a. Cilj je da se "hard fork" učiniti nemogućim, tako da će se upravljanje obavljati iz korisničkog izbora i decentralizovanih podsticaja.



+ <b>Q: Šta je "Proof of Space?"</b>

A: "Proof of Space" zapravo nije skladište. Skladište je nešto što se direktno koristi i što zahtijeva veliki propusni opseg. "Dokazi" o prostoru su podaci koji su beskorisni za sve osim za stvaranje dokaza o prostoru, čineći ga tako da u suštini ne zahtijeva propusni opseg. "Dokaz" stvarnog prostora zahteva velike količine propusnog opsega, tako da se neće koristiti u Chia mreži.



+ <b>Q: Šta "Seeding" znači?</b>

A: "Seeding" je proces koji zahtijeva čitanje i pisanje svakog sektora na disku više nego jednom; ali kada se "seeding" obavi moći ćete da vršite farmanje dokle god su dokazi na disku. Disk će se čitati pomoću API-ja za direktan Low-level pristup. Klijent će podržavati postavljanje više diskova. Jedini razlog za ponovno pokretanje "Seeding" procesa je ako ima previše istih dokaza na disku. Taj proces će trajati i do nekoliko sati.


+ <b>Q: Kada će Chia biti u prodaji?</b>

A: Planirano je da se Chia prodaje u drugom kvartalu 2018. godine.



+ <b>Q: Kako mogu kupiti Chia valutu?</b>

A: Planiramo napraviti neku vrstu prodaje za javnosti, trenutno na tome radimo sa advokatima. Moramo napraviti određeni iznos prikupljanja sredstava jer još uvijek treba raditi na izradi mreže. Jedan dio valute će se unaprijed prodati radi finansiranja projekta i budućeg razvoja. Mehanizam finansiranja će biti transparentan i javno dostupan prije nego što počne prodaja.



+ <b>Q: Koliko je projekat završen?</b>

A: Programski kod još uvijek nije napisan. Urađena je gomila matematičkih računa koji će uskoro biti objavljeni. Trenutno radimo na unajmljivanju programera tako da će kodiranje ubrzo početi.



+ <b>Q: Kada ću moći farmati Chia valutu?</b>

A: Chia valutu ćete moći farmati kada se mreža lansira krajem 2018. godine.



+ <b>Q: Šta "Proof of time" znači?</b>

A: Proces "Proof of time" će izvršavati nekoliko servera koji ne dobijaju ništa od toga.



+ <b>Q: Zašto ime Chia?</b>

A: "Chia" je naziv sjemenke, a to je vezano za temu "farmanja".



+ <b>Q: Da li više prostora na disku znači više Chia valute?</b>

A: Šanse za farmanje sledećeg bloka su direktno proporcionalne količini prostora na disku.



+ <b>Q: Isplati li se kupiti diskove za farmanje Chia?</b>

A: The likely outcome is that it rapidly becomes unprofitable to buy hard drives just for the purposes of farming, so you'll always be able to get rewards off your unused storage. They'll likely be small, but it isn't costing you anything extra if you already have the storage for some other reason. People have already paid for a lot of unused storage capacity, there's ridiculous excess resources available, so it will be unprofitable to buy storage just for the sake of farming. This is directly related to storage being useful for other things, although it isn't "useful" farming in the sense that the calculation itself isn't productive, but it is leveraging a useful resource.



+ <b>Q: Koja je razlika između Chia i BurstCoin valute?</b>

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
