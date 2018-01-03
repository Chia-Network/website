### Chia FAQ FRENCH TEST

+ <b>Q: What is Chia?</b>

A: Chia Network uses vacant disk space on hard drives to farm seeds. Chia farming uses proof of space (PoSpace), co-ordinated with another consensus algorithm, proof of time (PoT). The goal is to to prevent wasting massive amounts of energy securing the network and prevent ASIC-powered centralisation. A hard disk will have its empty space filled with randomly generated proofs.



+ <b>Q: What does farming mean?</b>

A: Chia farming is a bit like mining in that it's how blocks are made. Farming works by carrying out a snapshot (seeding) of the storage available on your hard drive(s). Based on the storage as a percentage you will receive lottery type payouts for the amount you are willing to farm to Chia. The more tickets you buy the more likely you are to win. There will be no incentive to buy hard drives to farm Chia, as Chia works because of the amount of idle space sitting around at the moment not costing owners anything. What it does is make use of this idle space. As there is so much storage existing in the world the chance of winning a reward is extremely low for the average user, but considering it uses insignificant energy, bandwidth and the space is idle anyway, it's not a big deal if your reward is small and infrequent. Pools, miners, ASICs and burning wasted energy are not Chia.



+ <b>Q: Main difference between Chia and Bitcoin?</b>

A: Chia is farmed with hard drives instead of mining with processing power, allowing easier access to users, and vastly reducing the cost/waste of securing the network (electricity burned). Chia is resistant to farmer centralization. Chia has a bunch of basic improvements: Everything is BLS signatures for better smart transaction support, and a bunch of bug fixes like timewarp. The goal is to make hard forks effectively impossible, so governance will come from user choice and bitcoin-like decentralized incentives.



+ <b>Q: What is "proof of space?"</b>

A: "Proof of space" is not actually storage. Storage is of something directly useful and requires lots of bandwidth. Proofs of space are of data which is useless for anything but generating proofs of space and making it requires essentially no bandwidth. Proof of actual storage requires ridiculous amounts of bandwidth so it will not be used in Chia.



+ <b>Q: What does Chia seeding mean?</b>

A: Seeding is a process that requires reading and writing every sector more than once; but once a drive is seeded you will be able to farm it for as long as the proofs remain on disk. Drives will be read using low-level direct access APIs. The client will support seeding multiple drives. The only reason to re-seed a drive is if too many of the existing proofs have been overwritten. Re-seeding gives no advantage normally. Seeding a disk will take significant amounts of time once per drive.



+ <b>Q: When will Chia launch?</b>

A: Chia plans to sale in Q2 and launch by end of 2018, but this is not set in stone and is dependent on development.



+ <b>Q: How will I be able to buy Chia?</b>

A: We're planning on doing some kind of sale to the public, working over that with lawyers at the moment. We need to do some amount of fund-raising because there's quite a bit of work still to be done. We're just getting the thing up and running and it would be nice to fund ongoing development and enhancements in the future (many of which will be shared with Bitcoin). There will be a pre-farm of currency whose allocation will be split between being earmarked to fund future development and going to the team. The funding mechanism will be transparent and available publicly before sales commence.



+ <b>Q: Where is Chia development now?</b>

A: No code has been written yet. A bunch of mathematical primitives have been worked out and are working their way towards publication. I'm hiring programmers right now and coding will begin soon.



+ <b>Q: When can I farm Chia?</b>

A: There will be a public sale in Q2 of 2018, and you'll be able to farm once the network launches.



+ <b>Q: What does proof of time mean?</b>

A: Technically proofs of time are also part of the farming, but those tend to be done by a few actors who don't get anything out of it directly.



+ <b>Q: Why the name Chia?</b>

A: "Chia" is the name of a grain. It goes with the "farming" theme.



+ <b>Q: Does more hard disk space mean more Chia?</b>

A: Your chances of farming the next block are directly proportional to your amount of disk space.



+ <b>Q: Is it worth buying hard drives to farm Chia?</b>

A: The likely outcome is that it rapidly becomes unprofitable to buy hard drives just for the purposes of farming, so you'll always be able to get rewards off your unused storage. They'll likely be small, but it isn't costing you anything extra if you already have the storage for some other reason. People have already paid for a lot of unused storage capacity, there's ridiculous excess resources available, so it will be unprofitable to buy storage just for the sake of farming. This is directly related to storage being useful for other things, although it isn't "useful" farming in the sense that the calculation itself isn't productive, but it is leveraging a useful resource.



+ <b>Q: How is Chia any different from other storage coins such as Burst?</b>

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

