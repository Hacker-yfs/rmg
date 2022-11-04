import { CanvasType, ParamConfig, RmgStyle, SidePanelMode } from '../../constants/constants';
import { AlertStatus } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    rmgStyle: RmgStyle;
    currentParamId?: string;
    paramRegistry: ParamConfig[];
    canvasScale: number;
    canvasToShow: CanvasType[];
    sidePanelMode: SidePanelMode;
    selectedStation: string;
    selectedColine?: number;
    selectedBranch: number;
    isShareTrackEnabled?: string[]; // for main line only, store the selections
    globalAlerts: Partial<Record<AlertStatus, { message: string; url?: string; linkedApp?: string }>>;
    isLoading?: number; // undefined: not loading, -1: loading, 0-100: progress
}

const initialState: AppState = {
    rmgStyle: RmgStyle.MTR,
    currentParamId: undefined,
    paramRegistry: [],
    canvasScale: 1,
    canvasToShow: Object.values(CanvasType),
    sidePanelMode: SidePanelMode.CLOSE,
    selectedStation: 'linestart',
    selectedColine: undefined,
    selectedBranch: 0,
    isShareTrackEnabled: undefined,
    globalAlerts: {},
    isLoading: undefined,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentParamId: (state, action: PayloadAction<string>) => {
            state.currentParamId = action.payload;
        },

        setParamRegistry: (state, action: PayloadAction<ParamConfig[]>) => {
            state.paramRegistry = action.payload;
        },

        updateParamModifiedTime: (state, action: PayloadAction<string>) => {
            if (state.paramRegistry.some(config => config.id === action.payload)) {
                state.paramRegistry = state.paramRegistry.map(config => {
                    if (config.id === action.payload) {
                        return { ...config, lastModified: new Date().getTime() };
                    } else {
                        return config;
                    }
                });
            } else {
                state.paramRegistry = [
                    ...state.paramRegistry,
                    { id: action.payload, lastModified: new Date().getTime() },
                ];
            }
        },

        removeParam: (state, action: PayloadAction<string>) => {
            state.paramRegistry = state.paramRegistry.filter(config => config.id !== action.payload);
        },

        setCanvasScale: (state, action: PayloadAction<number>) => {
            state.canvasScale = action.payload;
        },

        setCanvasToShow: (state, action: PayloadAction<CanvasType[]>) => {
            state.canvasToShow = action.payload;
        },

        setSidePanelMode: (state, action: PayloadAction<SidePanelMode>) => {
            state.sidePanelMode = action.payload;
        },

        setSelectedStation: (state, action: PayloadAction<string>) => {
            state.selectedStation = action.payload;
        },

        setSelectedColine: (state, action: PayloadAction<number>) => {
            state.selectedColine = action.payload;
        },

        setSelectedBranch: (state, action: PayloadAction<number>) => {
            state.selectedBranch = action.payload;
        },

        setIsShareTrackEnabled: (state, action: PayloadAction<string[] | undefined>) => {
            state.isShareTrackEnabled = action.payload;
        },

        /**
         * If linkedApp is true, alert will try to open link in the current domain.
         * E.g. linkedApp=true, url='/rmp' will open https://railmapgen.github.io/rmp/
         * If you want to open a url outside the domain, DO NOT set or pass FALSE to linkedApp.
         */
        setGlobalAlert: (
            state,
            action: PayloadAction<{ status: AlertStatus; message: string; url?: string; linkedApp?: string }>
        ) => {
            const { status, message, url, linkedApp } = action.payload;
            state.globalAlerts[status] = { message, url, linkedApp };
        },

        closeGlobalAlert: (state, action: PayloadAction<AlertStatus>) => {
            delete state.globalAlerts[action.payload];
        },

        startLoading: state => {
            state.isLoading = -1;
        },

        setLoadingProgress: (state, action: PayloadAction<number>) => {
            state.isLoading = action.payload;
        },

        stopLoading: state => {
            state.isLoading = undefined;
        },
    },
});

export const {
    setCurrentParamId,
    setParamRegistry,
    updateParamModifiedTime,
    removeParam,
    setCanvasScale,
    setCanvasToShow,
    setSidePanelMode,
    setSelectedStation,
    setSelectedColine,
    setSelectedBranch,
    setIsShareTrackEnabled,
    setGlobalAlert,
    closeGlobalAlert,
    startLoading,
    setLoadingProgress,
    stopLoading,
} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
