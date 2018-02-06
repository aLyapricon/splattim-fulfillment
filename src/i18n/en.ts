// import * as sched from '../entity/api/Schedules'
// import * as gear from '../entity/api/Gear'
// import * as coop from '../entity/api/SalmonRunSchedules'

export const dict = {
    global_error_default: 'Sad woomy. I\'ve been splatted!',
    global_error_missing_param: 'Sad woomy. More info please!',

    // api_sched_mode: (i: sched.GameMode): string => i.name,
    // api_sched_rule: (i: sched.Rule): string => i.name,
    // api_sched_stage: (i: sched.Stage): string => i.name,
    // api_gear_item: (i: gear.Gear): string => i.name,
    // api_gear_brand: (i: gear.Brand): string => i.name,
    // api_gear_skill: (i: gear.Skill): string => i.name,
    // api_grizz_stage: (i: coop.Stage): string => i.name,
    // api_grizz_weapon: (i: coop.Weapon): string => i.name,

    // stage_name: (id: number): string | undefined => {
    //     const names = [
    //         'The Reef', // 0 - The Reef
    //         'Musselforge Fitness', // 1 - Musselforge Fitness
    //         'Starfish Mainstage', // 2 - Starfish Mainstage
    //         'Sturgeon Shipyard', // 3 - Sturgeon Shipyard
    //         'Inkblot Art Academy', // 4 - Inkblot Art Academy
    //         'Humpback Pump Track', // 5 - Humpback Pump Track
    //         'Manta Maria', // 6 - Manta Maria
    //         'Port Mackerel', // 7 - Port Mackerel
    //         'Moray Towers', // 8 - Moray Towers
    //         'Snapper Canal', // 9 - Snapper Canal
    //         'Kelp Dome', // 10 - Kelp Dome
    //         'Blackbelly Skatepark', // 11 - Blackbelly Skatepark
    //         'Shellendorf Institute', // 12 - Shellendorf Institute
    //         'MakoMart', // 13 - MakoMart
    //         'Walleye Warehouse', // 14 - Walleye Warehouse
    //     ]
    //     if (id < names.length) {
    //         return names[id]
    //     }
    //     return undefined
    // },

    // [Action] Schedules

    a_sched_000_s: (url: string) => `I can't help you right now. But check out ${url}!`,
    a_sched_000_t: 'I can\'t help you squiddo. But check out this link!',
    a_sched_002_a: (rule: string, mode: string, stage1: string, stage2: string) => `You can play ${rule} in ${mode} on ${stage1} and ${stage2}.`,
    a_sched_002_s: (rule: string, mode: string, stage1: string, stage2: string) => `You can play ${rule} in ${mode} on ${stage1} and ${stage2}. Which do you like more?`,
    a_sched_002_t: (rule: string, mode: string) => `You can play ${rule} in ${mode} on these two maps. Which do you like more?`,
    a_sched_003: (mode: string) => `Active stages for ${mode}`,
    
    a_sched_004: 'Here you go, all current stages. On which one are you going to play?',

    a_sched_005_start: 'Play',
    a_sched_005_middle: (mode: string, stage1: string, stage2: string) => `${mode} on ${stage1} and ${stage2}`,
    a_sched_005_connector: ' and ',
    a_sched_005_end: '! On which one are you going to play?',

    // [Action] All Schedules

    a_asched_error_too_much: 'That\'s to much. Choose a game mode!',
    a_asched_error_empty_data: 'Meh. The schedule info is not available right now.',
    a_asched_000_a: (mode: string, rule1: string, stage1a: string, stage1b: string, rule2: string, time2: string, stage2a: string, stage2b: string) => `Here are the upcoming stages for ${mode}: play ${rule1} right now on ${stage1a} and ${stage1b}. In ${time2} play ${rule2} on ${stage2a} and ${stage2b}.`,
    a_asched_000_s: (mode: string, rule1: string, stage1a: string, stage1b: string, rule2: string, time2: string, stage2a: string, stage2b: string) => `Here are the upcoming stages for ${mode}: play ${rule1} right now on ${stage1a} and ${stage1b}. In ${time2} play ${rule2} on ${stage2a} and ${stage2b}. On which do you want to get splatted?`,
    a_asched_000_t: (mode: string) => `Here are all upcoming stages for ${mode}. On which do you want to get splatted?`,
    a_asched_001_now: 'now',
    a_asched_001_future: 'in ',

    // [Action] ETA for Rule

    a_eta_error_incomp_mode_all: 'Well, you can play now if every mode is fine!',
    a_eta_error_incomp_mode_regular: 'Always the same mode in regular. So start splatting now!',
    a_eta_error_unknown_mode: 'Sorry, I don\'t know this mode.',
    a_eta_error_incomp_rule_turf: 'You can play turf war anytime in regular battles.',
    a_eta_error_unknown_rule: 'Sorry, I don\'t know that game type.',
    a_eta_000: 'This type will not be available any time soon.',
    a_eta_001_now: 'right now',
    a_eta_001_future: 'in ',
    a_eta_002_a: (rule: string, mode: string, time: string, stage1: string, stage2: string) => `You can play ${rule} in ${mode} ${time} on ${stage1} and ${stage2}.`,
    a_eta_002_s: (rule: string, mode: string, time: string, stage1: string, stage2: string) => `You can play ${rule} in ${mode} ${time} on ${stage1} and ${stage2}. Which stage is cooler?`,
    a_eta_002_t: (rule: string, mode: string, time: string) => `You can play ${rule} in ${mode} ${time} on these stages. Which one is cooler?`,
    a_eta_003: 'Stages',

    // [Action] Stage Schedule

    a_ssched_000: (stage: string) => `${stage} doesn't seem to be coming up any time soon.`,
    a_ssched_001_t: (stage: string) => `Here are the next opportunities to play on ${stage}.`,
    a_ssched_002_start: (stage: string) => `The next opportunities to play on the stage ${stage} are:`,
    a_ssched_002_middle: (rule: string, mode: string, time: string) => `${rule} in ${mode} in ${time}`,
    a_ssched_002_middle_now: (rule: string, mode: string) => `${rule} in ${mode} right now`,
    a_ssched_002_connector: ' and ',
    a_ssched_002_end: '. When are you going to play?',
    a_ssched_004: 'now',
    
    // [Action] Salmon Run

    a_sr_000: 'Sorry, I have no information on upcoming Salmon Run shifts.',
    a_sr_002_a: (stage: string, remaining: string, weapon1: string, weapon2: string, weapon3: string, weapon4: string) => `Mr. Grizz is hiring for another ${remaining}! Fight Salmonids on ${stage} with ${weapon1}, ${weapon2}, ${weapon3} or ${weapon4}.`,
    a_sr_002_s: (stage: string, remaining: string, weapon1: string, weapon2: string, weapon3: string, weapon4: string) => `Mr. Grizz is hiring for another ${remaining}! Fight Salmonids on ${stage} with ${weapon1}, ${weapon2}, ${weapon3} or ${weapon4}. Which one can you handle best?`,
    a_sr_002_t: (stage: string, remaining: string) => `Mr. Grizz is hiring for another ${remaining} on ${stage}. Take a look a the available weapons. Which one can you handle best?`,
    a_sr_003_a: (stage: string, eta: string, weapon1: string, weapon2: string, weapon3: string, weapon4: string) => `Salmon Run will be open again in ${eta} on ${stage}. ${weapon1}, ${weapon2}, ${weapon3} and ${weapon4} will be available.`,
    a_sr_003_s: (stage: string, eta: string, weapon1: string, weapon2: string, weapon3: string, weapon4: string) => `Salmon Run will be open again in ${eta} on ${stage}. ${weapon1}, ${weapon2}, ${weapon3} and ${weapon4} will be available. Which one is your favorite?`,
    a_sr_003_t: (stage: string, eta: string) => `Salmon Run will be open again in ${eta} on ${stage}. This will be your weapons. Which one is your favorite?`,
    a_sr_004: 'Unknown',

    // [Action] Merchandise

    a_merch_000_a: (merch1: string, merch2: string, merch3: string) => `${merch1}, ${merch2}, ${merch3} and three other items are available in the shop right now.`,
    a_merch_000_s: (merch1: string, merch2: string, merch3: string) => `${merch1}, ${merch2}, ${merch3} and three other items are available in the shop right now. Like something?`,
    a_merch_000_t: 'These items are available in the shop. Like something?',
    a_merch_001: (skill: string, brand: string, eta: string) => `with ${skill} by ${brand} (${eta} remaining)`,
    a_merch_002: 'Take a look in the app, I can\'t get any info about that right now.',
    
    // [Action] Splatfest Result

    a_splres_000: (winner: string, loser: string) => `Team ${winner} won against team ${loser} in the last Splatfest.`,
    a_splres_001: 'They won all three categories',
    a_splres_002: (won1: string, won2: string, lost: string) => `They won ${won1} and ${won2} but lost ${lost}.`,
    a_splres_002_votes: 'the votes',
    a_splres_002_solo: 'solo battles',
    a_splres_002_team: 'team battles',
    a_splres_003: (alpha: string, bravo: string) => `${alpha} vs ${bravo}`,
    a_splres_004: (name: string, alphaRate: number, bravoRate: number) => `**${name}**: ${alphaRate}% - ${bravoRate}%`,
    a_splres_004_votes: 'Votes',
    a_splres_004_solo: 'Solo',
    a_splres_004_team: 'Team',
    a_splres_005: 'Splafest panel',
    a_splres_006: (winner: string) => `Winner: ${winner}`,

    // [Action] Splatfest Upcoming

    a_splup_000: 'I currently don\'t have any infos on upcoming Splatfests.',
    a_splup_001: (alpha: string, bravo: string) => `${alpha} vs ${bravo}`,
    a_splup_002: 'Splafest panel',
    a_splup_003_s: (time: string, alpha: string, bravo: string) => `It\'s Splatfest time! ${alpha} vs ${bravo}. You still got ${time} left!`,
    a_splup_003_t: (time: string) => `It's Splatfest time! Still ${time} left.`,
    a_splup_003_b: (time: string) => `${time} left`,
    a_splup_004_s: (time: string, alpha: string, bravo: string) => `The next Splatfest starts in ${time}! ${alpha} vs ${bravo}.`,
    a_splup_004_t: (time: string) => `The next Splatfest starts in ${time}.`,
    a_splup_004_b: (time: string) => `in ${time}`,

    // [Option] Schedule Stage

    o_schedstage_000: 'Fresh! Keep on inking!',
    o_schedstage_001: 'Ng-yes, let\'s get to S+50!',
    o_schedstage_002: (time: string) => `Fresh! See you in ${time}!`,
    o_schedstage_003: (stage: string) => `Woomy! ${stage} is one of my favorites!`,

    // [Option] Salmon Run Weapon

    o_srweapon_000: 'I like this one too!',
    o_srweapon_001: (weapon: string) => `${weapon} is always a good choice.`,
    o_srweapon_002: (weapon: string) => `${weapon}, for a true profreshional!`,

    // [Option] Merchandise Gear

    o_merch_000: 'Stay fresh!',
    o_merch_001: (time: string) => `This one is still available for about ${time}.`,
    o_merch_002: (skill: string) => `Cool, this one got ${skill}`,
    o_merch_003: (merch: string) => `${merch} looks fresh!`
}