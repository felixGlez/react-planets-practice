// export const MENU_TABS = ['Overview', 'Internal Structure', 'Surface Geology'];

import { v4 } from 'uuid';

export const MENU_TABS = [
	{
		id: v4(),
		name: '01 OVERVIEW'
	},
	{
		id: v4(),
		name: '02 INTERNAL STRUCTURE'
	},
	{
		id: v4(),
		name: '03 SURFACE GEOLOGY'
	}
];
