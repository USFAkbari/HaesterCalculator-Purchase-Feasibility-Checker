const totalAddedCoin = 1430;
const miningRate = 5380;
const totalCost = 119200;

function checkPurchaseFeasibility(totalAddedCoin, miningRate, totalCost) {
  const totalMinedCoin = 120 * totalAddedCoin;
  const totalMinedCoinK = totalMinedCoin * 1000;
  
  const canAfford = totalMinedCoin >= totalCost || totalMinedCoinK >= totalCost;
  
  const miningPercentage = ((miningRate - totalAddedCoin) / totalCost) * 100;
  const buyPercentage = Math.min(miningPercentage, 100);
  
  return { canAfford, buyPercentage };
}

const { canAfford, buyPercentage } = checkPurchaseFeasibility(totalAddedCoin, miningRate, totalCost);

console.log(`Can I buy? ${canAfford ? 'Yes' : 'No'}`);
console.log(`${buyPercentage}% You Can Buy`);