import { controls } from '../../constants/controls';
import { getFighterInfo } from './fighterSelector';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over

  });
}

export function getDamage(attacker, defender) {
   var attackerInfo = getFighterInfo(attacker);
   var defenderInfo = getFighterInfo(attacker);

   

}

export function getHitPower(fighter) {
  // return hit power
}

export function getBlockPower(fighter) {
  // return block power
}
