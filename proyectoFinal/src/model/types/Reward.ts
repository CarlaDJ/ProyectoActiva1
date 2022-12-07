export interface Reward {
    idUserSender: number,
    idUserRewarded: number,
    xpPoints: number,
    date: string,
    description: string,
}

export interface ExtendedReward extends Reward{
    name: string;
    first_surname: string;
}

export interface RewardTotalEntry{
    id_user_rewarded: number;
    all_xp_points: number;
    name: string;
    first_surname: string;
}

export interface RankingPositionResult{
    id_user_rewarded: number;
    all_xp_points: number;
    name: string;
    first_surname: string;
<<<<<<< HEAD
    position: number;
=======
    position: number;
}

export interface SocialHistoryReward{
    xpPoints: number,
    date: string,
    description: string,
    rewarded_name: string;
    rewarded_first_surname: string;
    sender_name: string;
    sender_first_surname: string;
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
}