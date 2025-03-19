import { handleComponentStates } from '../handleComponentStates';

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.button-container', '.button', 'button--hover');
});