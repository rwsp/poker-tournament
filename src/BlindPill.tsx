/** @jsxImportSource @emotion/react */ //include this in all jsx files

import * as React from 'react';
import {css} from "@emotion/react";
import {Blind} from './config';
import {colors} from './colors';

const styles = {
    root: (active: boolean) => css`
      font-size: ${active ? 72 : 40}px;
      line-height: ${active ? 150 : 50}px;
      color: ${active ? colors.green0 : colors.grey2 };
      cursor: ${active ? 'default ': 'pointer'};
      
      :hover {
        font-size: ${active ? 72 : 44}px;
      }
    `,
}
interface Props {
    blind: Blind;
    active: boolean;
}

const BlindPill: React.FC<Props> = ({ blind, active }) => {
    return <div css={ styles.root(active) }>{`${ blind.small }    ${ blind.big }`}</div>;
};

export default BlindPill;