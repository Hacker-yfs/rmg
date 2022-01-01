const param = {
    svg_height: 400,
    padding: 4.96,
    y_pc: 40,
    branch_spacing: 39.68,
    theme: ['shanghai', 'sh18', '#D6A461', '#000'],
    direction: 'r',
    current_stn_idx: 'm5es',
    platform_num: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['b029'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['qmhe'],
            name: ['航 头', 'Hangtou'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        qmhe: {
            name: ['下 沙', 'Xiasha'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['s9zd'],
            children: ['iwf6'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        s9zd: {
            name: ['鹤涛路', 'Hetao Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['nsup'],
            children: ['qmhe'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        nsup: {
            name: ['沈梅路', 'Shenmei Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['ya17'],
            children: ['s9zd'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        ya17: {
            name: ['繁荣路', 'Fanrong Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['zeh0'],
            children: ['nsup'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        zeh0: {
            name: ['周 浦', 'Zhoupu'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['orn7'],
            children: ['ya17'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        orn7: {
            name: ['康 桥', 'Kangqiao'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['m5es'],
            children: ['zeh0'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        m5es: {
            name: ['御 桥', 'Yuqiao'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['3ibs'],
            children: ['orn7'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh11', '#76232F', '#fff', '11号线', 'Line 11']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '3ibs': {
            name: ['莲溪路', 'Lianxi Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['ljgf'],
            children: ['m5es'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh13', '#EF95CF', '#000', '13号线', 'Line 13']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ljgf: {
            name: ['北中路', 'Beizhong Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['cktp'],
            children: ['3ibs'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        cktp: {
            name: ['芳芯路', 'Fangxin Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['pc7q'],
            children: ['ljgf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        pc7q: {
            name: ['龙阳路', 'Longyang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['wr6q'],
            children: ['cktp'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['shanghai', 'sh2', '#97D700', '#000', '2号线', 'Line 2'],
                        ['shanghai', 'sh7', '#FF6900', '#000', '7号线', 'Line 7'],
                        ['shanghai', 'sh16', '#2CD5C4', '#000', '16号线', 'Line 16'],
                    ],
                    [],
                    [['shanghai', 'maglev', '#009090', '#fff', '磁浮线', 'Maglev Line']],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        wr6q: {
            name: ['迎春路', 'Yingchun Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['0kp1'],
            children: ['pc7q'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '0kp1': {
            name: ['杨高中路', 'Middle Yanggao Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['xlu4'],
            children: ['wr6q'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh9', '#71C5E8', '#000', '9号线', 'Line 9']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        xlu4: {
            name: ['民生路', 'Minsheng Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['xrko'],
            children: ['0kp1'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh6', '#D9027D', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        xrko: {
            name: ['昌邑路', 'Changyi Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['5hux'],
            children: ['xlu4'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh14', '#827A04', '#fff', '14号线', 'Line 14']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '5hux': {
            name: ['丹阳路', 'Danyang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['239w'],
            children: ['xrko'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '239w': {
            name: ['平凉路', 'Pingliang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['uh76'],
            children: ['5hux'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        uh76: {
            name: ['江浦公园', 'Jiangpu Park'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['omd0'],
            children: ['239w'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh12', '#007B5F', '#fff', '12号线', 'Line 12']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        omd0: {
            name: ['江浦路', 'Jiangpu Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['rjrf'],
            children: ['uh76'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh8', '#00A3E0', '#fff', '8号线', 'Line 8']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        rjrf: {
            name: ['抚顺路', 'Fushun Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['tsku'],
            children: ['omd0'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        tsku: {
            name: ['国权路', 'Guoquan Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['8vx6'],
            children: ['rjrf'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh10', '#C1A7E2', '#000', '10号线', 'Line 10']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '8vx6': {
            name: ['复旦大学', 'Fudan University'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['nv5d'],
            children: ['tsku'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        nv5d: {
            name: ['上海财经大学', 'Shanghai University of Finance and Economics'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['xf3w'],
            children: ['8vx6'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        xf3w: {
            name: ['殷高路', 'Yingao Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['b029'],
            children: ['nv5d'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        b029: {
            name: ['长江南路', 'South Changjiang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['linestart'],
            children: ['xf3w'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['shanghai', 'sh3', '#FFD100', '#000', '3号线', 'Line 3']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['18号线', 'Line 18'],
    psd_num: '1',
    line_num: 'TW',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 1500, runin: 1500, railmap: 2200, indoor: 2200 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
    style: 'shmetro',
};

export default param;
