const params = {
    "style": "shmetro",
    "svg_height": 720,
    "padding": 10,
    "y_pc": 50.45,
    "branch_spacing": 0,
    "theme": [
        "zhengzhou",
        "zz5",
        "#25AC74",
        "#fff"
    ],
    "direction": "l",
    "current_stn_idx": "b396",
    "platform_num": false,
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "iwf6"
            ],
            "name": [
                "路綫右端",
                "RIGHT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "00",
            "secondaryName": false,
            "loop_pivot": false
        },
        "lineend": {
            "parents": [
                "s63g"
            ],
            "children": [],
            "name": [
                "路綫左端",
                "LEFT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "34",
            "secondaryName": false,
            "loop_pivot": false
        },
        "l1mz": {
            "parents": [
                "iwf6"
            ],
            "children": [
                "p6zw"
            ],
            "name": [
                "沙口路",
                "Shakou Road"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "02",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false,
            "loop_pivot": true
        },
        "iwf6": {
            "children": [
                "l1mz"
            ],
            "parents": [
                "linestart"
            ],
            "name": [
                "月季公园",
                "Yueji Park"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "01",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [
                    [
                        "",
                        ""
                    ]
                ],
                "info": [
                    [
                        [
                            "zhengzhou",
                            "zz9",
                            "#828C47",
                            "#fff",
                            "9号线",
                            "Line 9"
                        ]
                    ],
                    []
                ]
            },
            "services": [
                "direct"
            ],
            "facility": "",
            "secondaryName": false,
            "loop_pivot": true
        },
        "s63g": {
            "name": [
                "五一公园",
                "Wuyi Park"
            ],
            "secondaryName": false,
            "num": "32",
            "services": [
                "local"
            ],
            "parents": [
                "ztx8"
            ],
            "children": [
                "lineend"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#D20200",
                            "#fff",
                            "1号线",
                            "Line 1"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "ztx8": {
            "name": [
                "市中心医院",
                "Zhengzhou Central Hospital"
            ],
            "secondaryName": false,
            "num": "31",
            "services": [
                "local"
            ],
            "parents": [
                "d1zf"
            ],
            "children": [
                "s63g"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#B15F56",
                            "#fff",
                            "10号线",
                            "Line 10"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "d1zf": {
            "name": [
                "陇海西路",
                "Longhai Road (W)"
            ],
            "secondaryName": false,
            "num": "30",
            "services": [
                "local"
            ],
            "parents": [
                "l32f"
            ],
            "children": [
                "ztx8"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "l32f": {
            "name": [
                "桐淮",
                "Tong Huai"
            ],
            "secondaryName": false,
            "num": "29",
            "services": [
                "local"
            ],
            "parents": [
                "90e9"
            ],
            "children": [
                "d1zf"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#852081",
                            "#fff",
                            "6号线",
                            "Line 6"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "90e9": {
            "name": [
                "后河芦",
                "Hou He Lu"
            ],
            "secondaryName": false,
            "num": "28",
            "services": [
                "local"
            ],
            "parents": [
                "k8rf"
            ],
            "children": [
                "l32f"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "k8rf": {
            "name": [
                "齐礼阎",
                "Qi Li Yan"
            ],
            "secondaryName": false,
            "num": "27",
            "services": [
                "local"
            ],
            "parents": [
                "ezrf"
            ],
            "children": [
                "90e9"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "zhengzhou",
                            "zz9",
                            "#828C47",
                            "#fff",
                            "9号线",
                            "Line 9"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "ezrf": {
            "name": [
                "市第二人民医院",
                "Zhengzhou Second People's Hospital"
            ],
            "secondaryName": false,
            "num": "26",
            "services": [
                "local"
            ],
            "parents": [
                "xgi4"
            ],
            "children": [
                "k8rf"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#C0955A",
                            "#fff",
                            "7号线",
                            "Line 7"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "xgi4": {
            "name": [
                "京广南路",
                "Jingguang Road (S)"
            ],
            "secondaryName": false,
            "num": "25",
            "services": [
                "local"
            ],
            "parents": [
                "q9ns"
            ],
            "children": [
                "ezrf"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "q9ns": {
            "name": [
                "冯庄",
                "Feng Zhuang"
            ],
            "secondaryName": false,
            "num": "24",
            "services": [
                "local"
            ],
            "parents": [
                "vx84"
            ],
            "children": [
                "xgi4"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "vx84": {
            "name": [
                "南五里堡",
                "Nan Wu Li Bao"
            ],
            "secondaryName": false,
            "num": "23",
            "services": [
                "local"
            ],
            "parents": [
                "rl9o"
            ],
            "children": [
                "q9ns"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#D28F00",
                            "#fff",
                            "2号线",
                            "Line 2"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "rl9o": {
            "name": [
                "城东南路",
                "Chengdong Road (S)"
            ],
            "secondaryName": false,
            "num": "22",
            "services": [
                "local"
            ],
            "parents": [
                "znrv"
            ],
            "children": [
                "vx84"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "znrv": {
            "name": [
                "航海广场",
                "Hang Hai Square"
            ],
            "secondaryName": false,
            "num": "21",
            "services": [
                "local"
            ],
            "parents": [
                "6uyz"
            ],
            "children": [
                "rl9o"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "6uyz": {
            "name": [
                "七里河",
                "Qili River"
            ],
            "secondaryName": false,
            "num": "20",
            "services": [
                "local"
            ],
            "parents": [
                "kmpm"
            ],
            "children": [
                "znrv"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#3792D6",
                            "#fff",
                            "4号线",
                            "Line 4"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "kmpm": {
            "name": [
                "中原福塔",
                "Zhongyuan Tower"
            ],
            "secondaryName": false,
            "num": "19",
            "services": [
                "local"
            ],
            "parents": [
                "quhd"
            ],
            "children": [
                "6uyz"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "quhd": {
            "name": [
                "福塔东",
                "Zhongyuan Tower (E)"
            ],
            "secondaryName": false,
            "num": "18",
            "services": [
                "local"
            ],
            "parents": [
                "9qf4"
            ],
            "children": [
                "kmpm"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#295e9e",
                            "#fff",
                            "12号线",
                            "Line 12"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "9qf4": {
            "name": [
                "经开中心广场",
                "Zhengzhou Economic and Technological \\Development Zone Central Square"
            ],
            "secondaryName": false,
            "num": "17",
            "services": [
                "local"
            ],
            "parents": [
                "t8h0"
            ],
            "children": [
                "quhd"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "t8h0": {
            "name": [
                "经北二路",
                "Jingbeier Road"
            ],
            "secondaryName": false,
            "num": "16",
            "services": [
                "local"
            ],
            "parents": [
                "blfv"
            ],
            "children": [
                "9qf4"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "blfv": {
            "name": [
                "省骨科医院",
                "Henan  Orthopaedic Hospital"
            ],
            "secondaryName": false,
            "num": "15",
            "services": [
                "local"
            ],
            "parents": [
                "58gp"
            ],
            "children": [
                "t8h0"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#CB5100",
                            "#fff",
                            "3号线",
                            "Line 3"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "58gp": {
            "name": [
                "康宁街",
                "Kangning Street"
            ],
            "secondaryName": false,
            "num": "14",
            "services": [
                "local"
            ],
            "parents": [
                "qmau"
            ],
            "children": [
                "blfv"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "qmau": {
            "name": [
                "郑州东站",
                "Zhengzhou East Railway station"
            ],
            "secondaryName": false,
            "num": "13",
            "services": [
                "local"
            ],
            "parents": [
                "6bzb"
            ],
            "children": [
                "58gp"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#D20200",
                            "#fff",
                            "1号线",
                            "Line 1"
                        ],
                        [
                            "other",
                            "other",
                            "#E6E394",
                            "#fff",
                            "8号线",
                            "Line 8"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "6bzb": {
            "name": [
                "金水东路",
                "Jinshui Road (E)"
            ],
            "secondaryName": false,
            "num": "12",
            "services": [
                "local"
            ],
            "parents": [
                "y5bx"
            ],
            "children": [
                "qmau"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "y5bx": {
            "name": [
                "祭城",
                "Zha Cheng"
            ],
            "secondaryName": false,
            "num": "11",
            "services": [
                "local"
            ],
            "parents": [
                "vni5"
            ],
            "children": [
                "6bzb"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "vni5": {
            "name": [
                "儿童医院",
                "Zhengzhou Children's Hospital"
            ],
            "secondaryName": false,
            "num": "10",
            "services": [
                "local"
            ],
            "parents": [
                "8ofj"
            ],
            "children": [
                "y5bx"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#295e9e",
                            "#fff",
                            "12号线",
                            "Line 12"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "8ofj": {
            "name": [
                "中央商务区",
                "Central Business District"
            ],
            "secondaryName": false,
            "num": "09",
            "services": [
                "local"
            ],
            "parents": [
                "scjp"
            ],
            "children": [
                "vni5"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#3792D6",
                            "#fff",
                            "4号线",
                            "Line 4"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "scjp": {
            "name": [
                "众意西路",
                "Zhongyi Road (W)"
            ],
            "secondaryName": false,
            "num": "08",
            "services": [
                "local"
            ],
            "parents": [
                "1ve4"
            ],
            "children": [
                "8ofj"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "1ve4": {
            "name": [
                "姚砦",
                "Yao Zhai"
            ],
            "secondaryName": false,
            "num": "07",
            "services": [
                "local"
            ],
            "parents": [
                "b396"
            ],
            "children": [
                "scjp"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#852081",
                            "#fff",
                            "6号线",
                            "Line 6"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "b396": {
            "name": [
                "省人民医院",
                "Henan Provincial People's Hospital"
            ],
            "secondaryName": false,
            "num": "06",
            "services": [
                "local"
            ],
            "parents": [
                "kuko"
            ],
            "children": [
                "1ve4"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "cx5z": {
            "name": [
                "郑州人民医院",
                "Zhengzhou People's Hospital"
            ],
            "secondaryName": false,
            "num": "04",
            "services": [
                "local"
            ],
            "parents": [
                "p6zw"
            ],
            "children": [
                "kuko"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#C0955A",
                            "#fff",
                            "7号线",
                            "Line 7"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "p6zw": {
            "name": [
                "海滩寺",
                "Hai Tan Si"
            ],
            "secondaryName": false,
            "num": "03",
            "services": [
                "local"
            ],
            "parents": [
                "l1mz"
            ],
            "children": [
                "cx5z"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#CB5100",
                            "#fff",
                            "3号线",
                            "Line 3"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        },
        "kuko": {
            "name": [
                "黄河路",
                "Huanghe Road"
            ],
            "secondaryName": false,
            "num": "05",
            "services": [
                "local"
            ],
            "parents": [
                "cx5z"
            ],
            "children": [
                "b396"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "other",
                            "other",
                            "#D28F00",
                            "#fff",
                            "2号线",
                            "Line 2"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": "",
            "loop_pivot": true
        }
    },
    "line_name": [
        "5号线",
        "Line 5"
    ],
    "psd_num": "1",
    "line_num": "5",
    "info_panel_type": "sh",
    "direction_gz_x": 50.45,
    "direction_gz_y": 76.04,
    "customiseMTRDest": {
        "isLegacy": false,
        "terminal": false
    },
    "svgWidth": {
        "destination": 1700,
        "runin": 1800,
        "railmap": 3000,
        "indoor": 2650
    },
    "notesGZMTR": [
        [
            "6号线、7号线、8号线、10号线暂缓开通",
            "Line 6, Line 7, Line 8 and Line 10 have been suspended",
            0,
            3,
            false
        ]
    ],
    "namePosMTR": {
        "isStagger": true,
        "isFlip": false
    },
    "coline": [],
    "loop": true,
    "loop_info": {
        "bank": true,
        "left_and_right_factor": 4,
        "bottom_factor": 13
    }
};

export default params;
