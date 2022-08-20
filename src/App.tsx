/** @jsxImportSource @emotion/react */ //include this in all jsx files

import * as React from 'react';
import {css} from "@emotion/react";
import {colors} from './colors';
import {BLINDS, STARTING_STACK} from './config';
import BlindPill from './BlindPill';

const styles = {
    root: css`
      height: 100vh;
      width: 100vw;
      background-color: ${colors.black2};
      display: flex;
      gap: 2rem;
      
      padding: 2rem;
    `,
    panel: css`
      flex-grow: 1;
      border-radius: 20px;
      background-color: ${colors.black3};
      padding: 1rem;
      line-height: unset;
      min-width: 36vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      
      color: ${colors.grey3};
      font-size: 44px;
      font-family: 'Fjalla One', sans-serif;
    `,
    blindSchedule: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    blindScheduleLabel: css`
      font-size: 82px;
      margin-bottom: 20px;
    `,
    blinds: css`
      display: flex;
      flex-direction: column;
      align-items: center;

    `,
    startingStackLabel: css`
      font-size: 72px;
    `,
}

const App: React.FC = () => <div css={styles.root}>
    <div css={styles.panel}>


        <div css={styles.blindSchedule}>
            <div css={styles.blindScheduleLabel}>BLIND SCHEDULE</div>

            <div css={styles.blinds}>
                {
                    BLINDS.map((blind, i) => <BlindPill active={i === 6} blind={blind} />)
                }
            </div>

        </div>


        <div css={styles.startingStackLabel}>STARTING STACK:&nbsp;
            <span css={css`color: ${colors.green0};`}>{STARTING_STACK}</span>
        </div>


    </div>
    <div css={styles.panel}>
        When you have some text, how can you choose a typeface? Many people—professional designers included—go through an app’s font menu until we find one we like. But the aim of this module is to show that there are many considerations that can improve our type choices. By setting some useful constraints to aid our type selection, we can also develop a critical eye for analyzing type along the way.


        A checklist for choosing type


        Emotive considerations for choosing typefaces


    </div>
</div>;

export default App;
