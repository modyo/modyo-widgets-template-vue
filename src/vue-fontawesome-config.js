import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
// Regular icons
import { faComment } from '@fortawesome/free-regular-svg-icons';
// Solid icons
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
// Brands icons
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPencilAlt, faCcVisa, faComment);

Vue.component('font-awesome-icon', FontAwesomeIcon);
