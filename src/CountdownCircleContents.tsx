/** @jsxImportSource @emotion/react */ //include this in all jsx files

import * as React from 'react';
import {css} from "@emotion/react";
import {colors} from './colors';
import playIcon from './assets/play-svg1.svg';
import pauseIcon from './assets/pause-svg.svg';

const styles = {
    timerTextContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    timerText: css`
      font-size: 120px;
    `,
    nextButton: css`
      font-size: 200px;
      height: 300px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${colors.green0};
      background-color: transparent;
      border-radius: 150px;
      cursor: pointer;
      color: ${colors.green0};
      transition: background-color .3s linear, color .2s linear;

      :hover {
        background-color: ${colors.black9};
      }
    `,
    playPauseButton: css`
      margin-top: 120px;
      font-size: 72px;
      height: 120px;
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      //border: 1px solid ${colors.green0};
      background-color: transparent;
      //border-radius: 150px;
      cursor: pointer;
    `,
}

interface Props {
    time: number;
    onNext: () => void;
    isPaused: boolean;
    onPauseToggle: () => void;
}

const CountdownCircleContents: React.FC<Props> =({time, onNext, isPaused, onPauseToggle}) => {
    return <div css={styles.timerTextContainer}>
        {
            !time && <div css={styles.nextButton} onClick={onNext}>{'>>'}</div>
        }
        {
            time > 0 && <span css={styles.timerText}>
                {time/ 60 < 1 ? '' : Math.floor(time/ 60)}
                :
                {time% 60 < 10 ? `0${time% 60}` : time % 60}
            </span>
        }
        {
            time > 0 && <img
                css={styles.playPauseButton}
                onClick={onPauseToggle}
                src={isPaused ? playIcon : pauseIcon}
            />
        }
    </div>;
}

export default CountdownCircleContents