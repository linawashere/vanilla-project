import { handleComponentStates } from '../handleComponentStates';

window.addEventListener('DOMContentLoaded', () => {
    handleComponentStates('.pager', '.pagination', 'pagination--hover', 'pagination--pressed');
});