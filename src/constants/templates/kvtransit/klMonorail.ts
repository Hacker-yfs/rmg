const params = {
    style: 'gzmtr',
    svg_height: 340,
    padding: 7.19,
    y_pc: 36.99,
    branch_spacing: 56.63,
    theme: ['klangvalley', 'kl8', '#8DBB3B', '#fff'],
    direction: 'l',
    current_stn_idx: 'iwf6',
    platform_num: '8',
    stn_list: {
        linestart: {
            parents: [],
            children: ['rygs'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            num: '00',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            num: '12',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['ujti'],
            children: ['iwf6'],
            name: ['秋杰 ', 'Chow Kit'],
            branch: { left: [], right: [] },
            num: '10',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['蒂蒂旺沙 ', 'Titiwangsa'],
            branch: { left: [], right: [] },
            num: '11',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['klangvalley', 'kl3', '#ED8B2D', '#fff', '安邦线', 'Ampang Line'],
                        ['klangvalley', 'kl4', '#802A1B', '#fff', '大城堡线', 'Sri Pataling Line'],
                        ['klangvalley', 'kl12', '#F9C823', '#fff', '布城线', 'Putrajaya Line'],
                        ['klangvalley', 'kl13', '#818181', '#fff', '环状线', 'Circle Line'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        ujti: {
            parents: ['3ok9'],
            children: ['l1mz'],
            name: ['美丹端姑 ', 'Medan Tuanku'],
            branch: { left: [], right: [] },
            num: '09',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '3ok9': {
            parents: ['wgb3'],
            children: ['ujti'],
            name: ['咖啡山 ', 'Bukit Nanas'],
            branch: { left: [], right: [] },
            num: '08',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        wgb3: {
            parents: ['rul5'],
            children: ['3ok9'],
            name: ['拉惹朱兰 ', 'Raja Chulan'],
            branch: { left: [], right: [] },
            num: '07',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        rul5: {
            parents: ['s0vw'],
            children: ['wgb3'],
            name: ['武吉免登 ', 'Bukit Bintang'],
            branch: { left: [], right: [] },
            num: '06',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['klangvalley', 'kl9', '#007737', '#fff', '加影线', 'Kajang Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        s0vw: {
            parents: ['tu3q'],
            children: ['rul5'],
            name: ['燕美 ', 'Imbi'],
            branch: { left: [], right: [] },
            num: '05',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        tu3q: {
            parents: ['tgzu'],
            children: ['s0vw'],
            name: ['汉都亚 ', 'Hang Tuah'],
            branch: { left: [], right: [] },
            num: '04',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['klangvalley', 'kl3', '#ED8B2D', '#fff', '安邦线', 'Ampang Line'],
                        ['klangvalley', 'kl4', '#802A1B', '#fff', '大城堡线', 'Sri Pataling Line'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        tgzu: {
            parents: ['kf85'],
            children: ['tu3q'],
            name: ['马哈拉惹里拉 ', 'Maharajalela'],
            branch: { left: [], right: [] },
            num: '03',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        kf85: {
            parents: ['rygs'],
            children: ['tgzu'],
            name: ['敦善班丹 ', 'Tun Sambathan'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        rygs: {
            parents: ['linestart'],
            children: ['kf85'],
            name: ['吉隆坡中央车站 ', 'KL Sentral'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['klangvalley', 'kl1', '#3A5F9B', '#fff', '芙蓉线', 'Seremban Line'],
                        ['klangvalley', 'kl2', '#E13B21', '#fff', '巴生港线', 'Port Klang Line'],
                        ['klangvalley', 'kl10', '#836F1A', '#fff', '天空花园线', 'Skypark Line'],
                        ['klangvalley', 'kl5', '#E32D4A', '#fff', '格拉那再也线', 'Kelana Jaya Line'],
                        ['klangvalley', 'kl6', '#813B83', '#fff', '机场快线', 'KLIA Express Line'],
                        ['klangvalley', 'kl7', '#009B93', '#fff', '机场支线', 'KLIA Transit Line'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
    },
    line_name: ['吉隆坡单轨', 'KL Monorail'],
    psd_num: '10',
    line_num: 'MR',
    info_panel_type: 'gz1421',
    direction_gz_x: 45.32,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 1100, runin: 1100, railmap: 900, indoor: 900 },
    notesGZMTR: [['布城线、环状线未开通', 'Putrajaya Line and Circle Line are under construction.', 16, 80, true]],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
