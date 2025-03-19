import { handleComponentStates } from "../handleComponentStates";

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.tabs', '.tab', 'tab--hover', 'tab--pressed');
});