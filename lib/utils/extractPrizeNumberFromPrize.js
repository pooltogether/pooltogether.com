export const extractPrizeNumberFromPrize = (prize) => {
  return parseInt(prize.id.split('-')[1], 10)
}