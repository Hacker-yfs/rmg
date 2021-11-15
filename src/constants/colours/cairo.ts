import { PaletteEntry } from '../constants';

/**
 * Wikipedia: https://en.wikipedia.org/wiki/Cairo_Metro
 * Offical website: https://cairometro.gov.eg/ar
*/
const Cairo: PaletteEntry[] = [
    {
        id: 'cr1',
        name: {
            en: 'Line 1',
            ar: 'خط 1',
            'zh-Hans': '1号线',
            'zh-Hant': '1號線',
        },
        colour: '#144996',
    },
    {
        id: 'spg2',
        name: {
           en: 'Line 2',
            ar: 'خط 2',
           'zh-Hans': '2号线',
           'zh-Hant': '2號線',
        },
        colour: '#B22530',
    },
    {
        id: 'spg3',
        name: {
            en: 'Line 3',
            ar: 'خط 3 ',
            'zh-Hans': '3号线',
            'zh-Hant': '3號線',
        },
        colour: '#315F0A',
    },
];

export default Cairo;