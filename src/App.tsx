/** @jsxImportSource @emotion/react */ //include this in all jsx files

import * as React from 'react';
import {css} from "@emotion/react";
import {colors} from './colors';
import {Blind, BLINDS, STAGE_LENGTH, STARTING_STACK} from './config';
import BlindPill from './BlindPill';
import {useCallback, useState} from 'react';
import {equals} from 'ramda';
import {ColorFormat, CountdownCircleTimer} from 'react-countdown-circle-timer'
import CountdownCircleContents from './CountdownCircleContents';

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
      margin-bottom: 8px;
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

const App: React.FC = () => {
    const [selectedBlindId, setSelectedBlindId] = useState<number>(0);
    const [timerKey, setTimerKey] = useState<number>(new Date().getTime());
    const [timerPaused, setTimerPaused] = useState<boolean>(true);

    const handleSelected = useCallback(
        (blind: Blind) => () => {
            setSelectedBlindId(blind.id);
            setTimerKey(new Date().getTime());
            setTimerPaused(true);
        },
        [],
    );

    const onNext = useCallback(
        () => {
            if (selectedBlindId === BLINDS.length - 1) {
                return;
            }

            setSelectedBlindId(prev => prev + 1);
            setTimerKey(new Date().getTime());
        },
        [selectedBlindId],
    );

    const onPauseToggle = useCallback(() => setTimerPaused(prev => !prev), []);

    return <div css={styles.root}>
        <div css={styles.panel}>


            <div css={styles.blindSchedule}>
                <div css={styles.blindScheduleLabel}>BLIND SCHEDULE</div>

                <div css={styles.blinds}>
                    {
                        BLINDS.map((blind) => <BlindPill
                            active={blind.id === selectedBlindId}
                            blind={blind}
                            onClick={handleSelected(blind)}
                        />)
                    }
                </div>

            </div>


            <div css={styles.startingStackLabel}>STARTING STACK:&nbsp;
                <span css={css`color: ${colors.green0};`}>{STARTING_STACK}</span>
            </div>


        </div>
        <div css={[styles.panel, css`justify-content: center;`]}>
            <CountdownCircleTimer
                key={timerKey}
                duration={STAGE_LENGTH}
                isPlaying={!timerPaused}
                // @ts-ignore
                colors={[colors.green0, colors.yellow0, colors.red0, colors.red1]}
                colorsTime={[12 * 60, 10 * 60, 4 * 60, 0]}
                strokeWidth={20}
                size={700}
                // @ts-ignore
                trailColor={colors.black8}
            >
                {({ remainingTime }) => <CountdownCircleContents
                    time={remainingTime}
                    onNext={onNext}
                    isPaused={timerPaused}
                    onPauseToggle={onPauseToggle}
                /> }
            </CountdownCircleTimer>
        </div>
    </div>;
}

export default App;
