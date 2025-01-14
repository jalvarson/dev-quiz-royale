export interface LeaderboardData {
    backend: LeaderboardEntry[];
    frontend: LeaderboardEntry[];
    frameworks: LeaderboardEntry[];
    designtools: LeaderboardEntry[];
  }
  
  export interface LeaderboardEntry {
    username: string;
    score: number;
  }
  