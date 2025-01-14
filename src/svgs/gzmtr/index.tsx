import { ReactNode } from 'react';
import { CanvasType } from '../../constants/constants';
import RailMapGZMTR from '../railmap/railmap-gzmtr';
import RunInGZMTR from './runin-gzmtr';

const gzmtrSvgs: Partial<Record<CanvasType, ReactNode>> = {
    runin: <RunInGZMTR />,
    railmap: <RailMapGZMTR />,
};

export default gzmtrSvgs;
