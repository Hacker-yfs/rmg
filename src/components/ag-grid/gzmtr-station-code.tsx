import React from 'react';
import { ColourHex } from '../../constants/constants';
import { Flex } from '@chakra-ui/react';

interface GzmtrStationCodeProps {
    lineNumber: string;
    stationNumber: string;
    lineColour: ColourHex;
}

export default function GzmtrStationCode(props: GzmtrStationCodeProps) {
    const { lineNumber, stationNumber, lineColour } = props;

    const styles = {
        h: '24px',
        bg: 'white',
        color: 'black',
        borderRadius: '12px',
        outline: '1px solid white',

        span: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3px',
            minWidth: '24px',
            border: '2px solid',
            borderColor: lineColour,

            '&:first-of-type': {
                borderRadius: '12px 0 0 12px',
            },

            '&:last-of-type': {
                borderRadius: '0 12px 12px 0',
                marginLeft: '-2px',
            },
        },
    };

    return (
        <Flex sx={styles}>
            <span>{lineNumber}</span>
            <span>{stationNumber}</span>
        </Flex>
    );
}
