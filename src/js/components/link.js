import { handleComponentStates } from '../handleComponentStates.js';

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.links-container', '.link', 'link--hover', 'link--pressed');
});