import React from 'react';
import StationNameWrapper, { NAME_FULL_HEIGHT } from './station-name-wrapper';
import { Facilities, StationState } from '../../../../constants/constants';
import { render } from '../../../../test-utils';

(Document.prototype as any).fonts = {
    ready: Promise.resolve([]),
};

const mockGetBBox = jest.fn();
(SVGElement.prototype as any).getBBox = mockGetBBox;

const mockBBox = {
    left: { x: 0, width: 80 },
    centre: { x: -40, width: 80 },
    right: { x: -80, width: -80 },
};

describe('Unit tests for StationNameWrapper component', () => {
    it('Can calculate position of centre-aligned component correctly', () => {
        mockGetBBox.mockReturnValue(mockBBox.centre);

        const { container } = render(
            <svg>
                <StationNameWrapper
                    stationName={['迪士尼', 'Disneyland Resort']}
                    stationState={StationState.CURRENT}
                    facility={Facilities.disney}
                />
            </svg>
        );

        const rectWidth = container.querySelector('rect')?.getAttribute('width');
        expect(Number(rectWidth)).toBe(NAME_FULL_HEIGHT + mockBBox.centre.width + 6 + 3); // 6: padding, 3: gap between icon and name
    });
});
