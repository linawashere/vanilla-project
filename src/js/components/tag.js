import { handleComponentStates } from "../handleComponentStates";

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.tags', '.tag', 'tag--hover', 'tag--pressed');
});