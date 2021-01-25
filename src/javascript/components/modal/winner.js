import { showModal } from '../../modal/modal.js';

export function showWinnerModal(fighter) {
  showModal(`${fighter}`, fighter);
}
