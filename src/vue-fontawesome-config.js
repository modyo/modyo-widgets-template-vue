/* Config file for Fontawesome icons */
/* Import the icons you need to use. */
/* DOCUMENTATION: https://github.com/FortAwesome/vue-fontawesome#introduction */

import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

// Regular icons
import { faComment } from '@fortawesome/free-regular-svg-icons';

// Solid icons
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Brands icons
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCcVisa, faComment, faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);
