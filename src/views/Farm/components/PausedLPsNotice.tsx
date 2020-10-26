import React from 'react'
import {
  Box,
  Button,
  Notice,
  NoticeContent,
  NoticeIcon,
  Spacer,
} from 'react-neu'
import styled from 'styled-components'

const PausedLPsNotice: React.FC = () => (
  <Notice>
    <NoticeIcon>💧</NoticeIcon>
    <NoticeContent>
      <StyledNoticeContentInner>
        <span>LP rewards are paused for now, remove your liquidity.</span>
        <Box flex={1} />
        <Spacer size="sm" />
        <Button
          size="sm"
          text="Remove Liquidity"
          href="https://app.uniswap.org/#/remove/0x17e87D71236B0911577bFa3B57Cb2D75c016D386/0xCd7cD70C8aF51302fDF549b962fC1063fAA3447d"
          variant="secondary"
        />
      </StyledNoticeContentInner>
    </NoticeContent>
  </Notice>
)

const StyledNoticeContentInner = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`

export default PausedLPsNotice