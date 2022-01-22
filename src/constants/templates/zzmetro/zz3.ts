const params = {
    svg_height: 400,
    padding: 3.97,
    y_pc: 50.2,
    branch_spacing: 45,
    theme: ['guangzhou', 'gz3', '#ECA154', '#000'],
    direction: 'r',
    current_stn_idx: '0zhf',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['0zhf'],
            name: ['路綫右端', 'RIGHT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            num: '26',
            secondaryName: false,
        },
        lineend: {
            parents: ['r9mx'],
            children: [],
            name: ['路綫左端', 'LEFT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['evpi'],
            children: ['pl80'],
            name: ['兴隆铺', 'Xing Long Pu'],
            branch: {
                left: [],
                right: [],
            },
            num: '03',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['q6e6'],
            parents: ['0zhf'],
            name: ['南曹城铁站', 'Nancao Railway Station'],
            branch: {
                left: [],
                right: [],
            },
            num: '24',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: 'hsr',
            secondaryName: ['暂缓开通', 'Stay Open'],
        },
        q6e6: {
            name: ['荷湖', 'He Lake'],
            secondaryName: ['暂缓开通', 'Stay Open'],
            num: '23',
            services: ['local'],
            parents: ['iwf6'],
            children: ['ggf7'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ggf7: {
            name: ['潮河桥', 'Chao River Brage'],
            secondaryName: ['暂缓开通', 'Stay Open'],
            num: '22',
            services: ['local'],
            parents: ['q6e6'],
            children: ['5hx2'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '5hx2': {
            name: ['营岗', 'Ying Gang'],
            secondaryName: false,
            num: '21',
            services: ['local'],
            parents: ['ggf7'],
            children: ['qbqn'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        qbqn: {
            name: ['圃田西', 'Pu TIan Xi'],
            secondaryName: false,
            num: '20',
            services: ['local'],
            parents: ['5hx2'],
            children: ['lu8q'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['foshan', 'fs1', '#C4D600', '#fff', '8号线', 'Line 8']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        lu8q: {
            name: ['省骨科医院', 'Henan Orthopaedic Hospital'],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['qbqn'],
            children: ['plxy'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['guangzhou', 'gz4', '#00843D', '#fff', '5号线', 'Line 5']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        plxy: {
            name: ['东周', 'Dong Zhou'],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['lu8q'],
            children: ['y1gf'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        y1gf: {
            name: ['西周', 'Xi Zhou'],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['plxy'],
            children: ['fiag'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#1CE4F2', '#fff', '12号线', 'Line 12']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        fiag: {
            name: ['通泰路', 'Tongtai Road'],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['y1gf'],
            children: ['13yo'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '13yo': {
            name: ['东十里铺', 'Dong Shi Li Pu'],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['fiag'],
            children: ['45bu'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['guangzhou', 'gz18', '#0047BA', '#fff', '4号线', 'Line 4']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '45bu': {
            name: ['凤凰台', 'FENGHUANGTAI'],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['13yo'],
            children: ['1rt3'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '1rt3': {
            name: ['博览中心', 'Zhongyuan International Expo Center'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['45bu'],
            children: ['2zpf'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['guangzhou', 'gz6', '#80225F', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '2zpf': {
            name: ['郑州文庙', 'Zhengzhou Wen Miao'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['1rt3'],
            children: ['776d'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '776d': {
            name: ['东大街', 'Dongdajie Street'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['2zpf'],
            children: ['euag'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#F3D03E', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        euag: {
            name: ['西大街', 'Xidajie Street'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['776d'],
            children: ['l988'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        l988: {
            name: ['二七广场', 'Er Qi Square'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['euag'],
            children: ['olls'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['hongkong', 'twl', '#E2231A', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        gc0z: {
            name: ['大石桥', 'Da Shi Qiao'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['olls'],
            children: ['c96g'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#F79102', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        c96g: {
            name: ['海滩寺', 'Hai Tan Si'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['gc0z'],
            children: ['76hr'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['guangzhou', 'gz4', '#00843D', '#fff', '5号线', 'Line 5']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '76hr': {
            name: ['南阳新村', 'Nan Yang Xin Cun'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['c96g'],
            children: ['evpi'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        evpi: {
            name: ['同乐', 'Tong Le'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['76hr'],
            children: ['l1mz'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['foshan', 'fs1', '#C4D600', '#fff', '8号线', 'Line 8']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        r9mx: {
            name: ['省体育中心', 'Henan Sports Center'],
            secondaryName: false,
            num: '01',
            services: ['local'],
            parents: ['pl80'],
            children: ['lineend'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['guangzhou', 'gz18', '#0047BA', '#fff', '4号线', 'Line 4']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        pl80: {
            name: ['王砦', 'Wang Zhai'],
            secondaryName: false,
            num: '02',
            services: ['local'],
            parents: ['l1mz'],
            children: ['r9mx'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        olls: {
            name: ['人民公园', 'Ren Min Park'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['l988'],
            children: ['gc0z'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '0zhf': {
            name: ['南曹耿庄', 'Nancao Geng Zhuang'],
            secondaryName: ['暂缓开通', 'Stay Open'],
            num: '25',
            services: ['local'],
            parents: ['linestart'],
            children: ['iwf6'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['3号线', 'Line 3'],
    psd_num: '1',
    line_num: '3',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 77.59,
    customiseMTRDest: {
        isLegacy: false,
        terminal: ['营岗', 'YINGGANG'],
    },
    svgWidth: {
        destination: 1500,
        runin: 1500,
        railmap: 3000,
        indoor: 1800,
    },
    notesGZMTR: [
        [
            '6号线、7号线、8号线、12号线暂缓开通',
            'Line 6, Line 7, Line 8 and Line 12 have been suspended',
            0,
            6.5,
            false,
        ],
    ],
    namePosMTR: {
        isStagger: true,
        isFlip: false,
    },
    style: 'gzmtr',
};

export default params;