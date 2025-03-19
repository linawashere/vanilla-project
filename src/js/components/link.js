import { handleComponentStates } from './handleStates.js';

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.links-container', '.link', 'link--hover', 'link--pressed');
});