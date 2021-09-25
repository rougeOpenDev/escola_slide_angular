export interface Status {

  watchedHours: number,
  totalHours: number,
  attempedClasses: number,
  totalClasses: number,
  completed: boolean,

  labelAttempedClasses?: string
  labelWatchedHours?: number
}
