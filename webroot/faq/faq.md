### Chia FAQ

+ <b>Q: What is Chia?</b>

A: Chia is a pre-launch digital currency and blockchain that relies upon proofs of space and proofs of time instead of traditional proofs of work. Chia "farms" via unused storage space that is allocated by "farmers" who will receive Chia coins for solving a block challenge as a consensus mechanism. Chia "farming" uses proof of space, co-ordinated with another consensus algorithm, proof of time, to mitigate known attacks on previous proof of space based blockchains. Our goal is to to prevent wasting massive amounts of electricity to secure a blockchain and lessen (e.g. ASIC-powered mining) centralisation. A hard disk will have its empty space filled with randomly generated proofs when "seeding."



+ <b>Q: What does farming mean?</b>

A: Chia farming is a bit like mining in that it's how blocks are securely created. Farming works by carrying out a snapshot (seeding) of the unused storage available on your hard drive(s). Based on the storage a farmer farms as a percentage of all farmed storage on the network you should receive lottery type payouts for the amount of storage you are willing to allocate to farm Chia. The more unused space you allocate to farming the more likely you are to win. There will be little incentive to buy hard drives to farm Chia, as Chia expects that there is a very large amount of idle space sitting around at the moment not incrementally costing owners anything. Chia utilizes this idle space. As there is so much storage existing in the world the chance of winning a reward is extremely low for the average user, but considering it uses insignificant energy, bandwidth and the space is idle anyway, it's not a big deal if your reward is small and infrequent. Pools, miners, ASICs and burning wasted energy are not Chia.



+ <b>Q: Main difference between Chia and Bitcoin?</b>

A: Chia is farmed with storage space like hard drives instead of mining with processing power. This allows broader access to everyday users, and vastly reduces the cost/waste of securing the network in electricity burned or custom hardware consumed. Chia is resistant to farmer centralization. Chia also will include a bunch of basic improvements to the bitcoin protocol: Everything is BLS signatures for better smart transaction support, and it will include a bunch of bug fixes to things like timewarp (https://bitcoin.stackexchange.com/questions/20597/where-exactly-is-the-off-by-one-difficulty-bug) while making those fixes available back to Bitcoin. The goal is to make hard forks effectively impossible, so governance will come from user choice and bitcoin-like decentralized incentives.



+ <b>Q: What is "proof of space?"</b>

A: "Proof of space" is not storage. Storage is of something directly useful and requires lots of bandwidth. Proofs of space are of data which is useless for anything but generating proofs of space and making it requires essentially no bandwidth. Proof of actual storage like Filecoin, MaidSafe, Sia, or Storj require ridiculous amounts of bandwidth and will not be used in the Chia protocol. A proof of space can be thought of as a precommitment to keeping storage unused. However, client software is likely to make this process easy for farmers as they will likely have options to automatically shrink the size of their farm to make room for their own files as needed and implement their farm at different levels of storage from the file level to the unused space on a storage device below a filesystem.



+ <b>Q: What does Chia seeding mean?</b>

A: Seeding is a process that requires reading and writing every sector of the allocated farming space more than once; but once a drive is seeded you will be able to farm it for as long as the proofs remain on disk. Drives will be read using low-level direct access APIs. The client will support seeding multiple drives. The only reason to reseed a drive is if too many of the existing proofs have been overwritten. Re-seeding gives no advantage normally. Seeding a disk will take significant amounts of time once per drive but the goal is that an average farmer can seed their farmed space in 24 to 48 hours upon initial set up.



+ <b>Q: When will Chia launch?</b>

A: Chia plans a coin sale in Q2 and launch by end of 2018, but these timeframes are not set in stone and are dependent on further development.



+ <b>Q: How will I be able to buy Chia?</b>

A: Chia plans on doing some kind of sale to the public and we are working with lawyers at the moment. The goal of our sale is to be as widely available to investors as possible. We need to do some amount of additional fundraising because there's quite a bit of work still to be done. We're just getting Chia up and running and it would be nice to fund ongoing development and enhancements in the future (many of which will be shared with Bitcoin). There will be a pre-farm of currency whose allocation will be split between being earmarked to fund future development and the team. The funding mechanism and pre-farm amounts will be transparent and available publicly before coin sales commence.



+ <b>Q: Where is Chia development now?</b>

A: No code has been written yet. A bunch of mathematical primitives have been worked out and are working their way towards publication. We're hiring programmers right now and coding will begin soon. An existing and highly technical white paper regarding proofs of space and avoiding Hellman's time-memory trade-off is available on our homepage.



+ <b>Q: When can I farm Chia?</b>

A: We hope to have a public sale in Q2 2018, and you'll be able to farm once the network launches which is estimated as the end of 2018. All dates remain subject to change based on ongoing development.



+ <b>Q: What does proof of time mean?</b>

A: Proofs of time are the second step of farming. Chia expects there to be a limited number of proof of time nodes as those nodes are not rewarded for coming up with the current block's proof of time. Only the farmer who won the lottery from his farm will be rewarded with Chia coin at each block.



+ <b>Q: Why the name Chia?</b>

A: "Chia" is the name of a grain you might have heard of before. It's green. It goes with the "farming" theme.



+ <b>Q: Does more hard disk space mean more Chia?</b>

A: Your chances of farming the next block are directly proportional to the amount of storage space you allocate to Chia farming.



+ <b>Q: Is it worth buying hard drives to farm Chia?</b>

A: Chia believes that it will be unprofitable to buy hard drives just for the purposes of farming, as everyone will be able to get rewards from unused storage - which there is a lot of. Farming rewards will likely be small, but it isn't costing a farmer anything extra if you already have the storage for some other reason. People have already paid for a lot of unused storage capacity - there's ridiculous excess resources available - so it will be unprofitable to buy storage just for the sake of farming. This is directly related to storage being useful for other things, although it isn't "useful" farming in the sense that the calculation itself isn't productive, but it is leveraging a useful resource. To the extent that Chia unexpectedly drives developments that decrease the cost of storage, we think that's a benefit for society - especially when compared to wasting electricity on custom ASIC mining hardware.



+ <b>Q: How is Chia any different from other storage coins such as Burst?</b>

A: Burstcoin doesn't have the proof of time component therefore there are attacks that make it unsuitable as a mining algorithm. Additionally, Chia simplifies and makes the math used to prove space more efficient. Chia also inherits the real world deployment experience of the Bitcoin protocol.



+ <b>Q: How is Chia going to be funded?</b>

A: Chia has raised a seed round of funding but we have enough development work to do that raising funds in the future is necessary to make it happen. We're going to try to do so in a way which is as transparent and open to the public as possible.



+ <b>Q: How fast will Chia transactions be?</b>

A: Chia will support lightning Network out of the box in addition to its blockchain, so payment speed will depend on whether there is an available lightning path. Lightning transactions take less than a few seconds on reasonable network latencies. Our block times for on-chain transactions will be similar to Bitcoin.



+ <b>Q: Any other Chia developments in the works?</b>

A: After the initial release our focus will be on supporting lightning as it is today, adding in off-chain channels, supporting MAST and probably simplicity and covenants to support vaults. Chia is going to support atomic swaps out of the gate. We're starting with Bitcoin script using BLS signatures instead of DSA. The plan is to roll releases out in conjunction with Bitcoin rollouts because it's based on the same codebase.



+ <b>Q: What scripting language will Chia use?</b>

A: We will be going with minimally modified Bitcoin script for starters (with a switch to BLS signatures) and longer term probably going with Simplicity. We're building on the Bitcoin codebase, so core development will be in C/C++.



+ <b>Q: How will Chia farming difficulty adjust?</b>

A: Like Bitcoin, difficulty will dynamically adjust to keep block times regular. As a result, as farming competition goes up, you can expect rewards from a particular amount of storage to go down. We do not expect farming to have a high enough expected value to be worth purchasing drives in order to farm.



+ <b>Q: How large will a hard drive have to be?</b>

A: There will likely be a minimum allocation size of 100 GB or 1 TB. It isn't so much to enforce a minimum as to require a minimum amount of wall clock time to pass before an allocation can be done so attackers can't repeatedly generate and try new allocations instead of doing a single lookup.



+ <b>Q: Would I be able to farm Chia on my desktop?</b>

A: There will still be some rewards for desktop farmers and the cost will still be effectively zero for some nonzero rewards. It isn't like Bitcoin mining where a desktop loses money mining because of the electricity it's burning. Bandwidth requirements are also expected to be very low.



+ <b>Q: Will Chia have a similar supply to that of Bitcoin?</b>

A: There will be fixed farming rewards and they won't have halving so the amount in circulation increases without bound at the rate of annual mining but the proportion of coins (grains?) minted (grown?) each year perpetually goes down as a fraction of the total coins in existence.



+ <b>Q: How is chia resistant to miner centralization?</b>

A: Chia uses empty storage (like hard disk drives) to farm seeds. As there is so much empty storage space available and anyone with unused storage space will be able to farm, this should lead to farming decentralization. A Bitcoin ASIC centralized mining system drives the formation of blocks toward a centralization because ASIC mining and electricity costs are beyond most people's affordability due to high up front specialized hardware costs and expensive electricity where they live. Manufacturers of storage could optimize storage hardware to farm faster or cheaper, but the cost of doing so is not worth the reward and would otherwise have the benefit of generally decreasing the cost of fast storage for everyone. Thus Chia should become the most decentralized cryptocurrency on the market.



+ <b>Q: Will Chia be open source?</b>

A: Chia will release academic papers about the building blocks of the protocol, and all implementation code will be open source. We're going to use the Apache License (https://www.apache.org/licenses/LICENSE-2.0). There's some chance we'll keep our source code a bit more proprietary when testnet is out but mainnet isn't up yet, but we will definitely license all our source code under the Apache License once mainnet is up.



+ <b>Q: Do you have white papers where I can read more?</b>

A: Instead of just one white paper like most projects, we're going to have academic papers in journals. So far we have our first one which was accepted by Asiacrypt (https://eprint.iacr.org/2017/893). There will be at least two more white papers going over proofs of time and how to hook the whole thing together into a blockchain.



+ <b>Q: Where can I find out more?</b>

A: You can sign up for the announcements list to get info as it comes out. Also we're available to discuss announcements on Keybase. Check out our homepage for links.

