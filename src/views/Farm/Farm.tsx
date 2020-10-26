import React, { useMemo } from 'react'

import {
  Box,
  Button,
  Container,
  Separator,
  Spacer,
} from 'react-neu'

import { useWallet } from 'use-wallet'

import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Split from 'components/Split'

import useFarming from 'hooks/useFarming'

import HarvestCard from './components/Harvest'
import StakeCard from './components/Stake'
import PausedLPsNotice from './components/PausedLPsNotice'

const Farm: React.FC = () => {
  const { status } = useWallet()
  const {
    isRedeeming,
    onRedeem,
  } = useFarming()

  const RedeemButton = useMemo(() => {
    if (status !== 'connected') {
      return (
        <Button
          disabled
          text="Harvest &amp; Unstake"
          variant="secondary"
        />
      )
    }
    if (!isRedeeming) {
      return (
        <Button
          onClick={onRedeem}
          text="Harvest &amp; Unstake"
          variant="secondary"
        />
      )
    }
    return (
      <Button
        disabled
        text="Redeeming..."
        variant="secondary"
      />
    )
  }, [
    isRedeeming,
    onRedeem,
  ])

  return (
    <Page>
      <PageHeader
        icon="🧑‍🌾"
        subtitle="Stake UNIF/YFGAMA LP tokens and grow UNIFs"
        title="Farm"
      />
      <Container>
        <PausedLPsNotice />
        <Spacer />
        <Split>
          <StakeCard />
          <HarvestCard />
        </Split>
        <Spacer />
        <Box row justifyContent="center">
          {RedeemButton}
        </Box>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <Split>
          <Button
            full
            text="Buy YFGAMA"
            href="https://app.uniswap.org/#/swap?inputCurrency=0xCd7cD70C8aF51302fDF549b962fC1063fAA3447d&outputCurrency=ETH"
            variant="tertiary"
          />
          <Button
            full
            text="Mint YFGAMA"
            href="https://zapper.fi/invest"
            variant="tertiary"
          />
          <Button
            full
            text="Get UNIF/YFGAMA LP tokens"
            href="https://app.uniswap.org/#/add/0x17e87D71236B0911577bFa3B57Cb2D75c016D386/0xCd7cD70C8aF51302fDF549b962fC1063fAA3447d"
            variant="tertiary"
          />
        </Split>
      </Container>
    </Page>
  )
}

export default Farm