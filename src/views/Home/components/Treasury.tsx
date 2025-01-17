import React from 'react'

import numeral from 'numeral'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardTitle,
  Spacer,
} from 'react-neu'

import FancyValue from 'components/FancyValue'
import Split from 'components/Split'

import useTreasury from 'hooks/useTreasury'

const Treasury: React.FC = () => {
  const { totalYUsdValue, yamBalance, yUsdBalance } = useTreasury()
  
  const treasuryValue = typeof totalYUsdValue !== 'undefined' && totalYUsdValue !== 0
    ? '$'+numeral(totalYUsdValue * 1.15).format('0.00a')
    : '--'

  const yamValue = typeof yamBalance !== 'undefined'
    ? numeral(yamBalance).format('0.00a')
    : '--'

  const yUsdValue = typeof yUsdBalance !== 'undefined'
    ? numeral(yUsdBalance).format('0.00a')
    : '--'

  return (
    <Card>
      <CardTitle text="Treasury Overview" />
      <Spacer size="sm" />
      <CardContent>
        <Split>
          <FancyValue
            icon="💰"
            label="Treasury value"
            value={treasuryValue}
          />
          <FancyValue
            icon="💸"
            label="YFGAMA in reserves"
            value={yUsdValue}
          />
          <FancyValue
            icon="🍠"
            label="UNIF in reserves"
            value={yamValue}
          />
        </Split>
        <Spacer />
      </CardContent>
      <CardActions>
        <Box row justifyContent="center">
          <Button
            href="https://etherscan.io/address/0x17e87D71236B0911577bFa3B57Cb2D75c016D386"
            text="View on Etherscan"
            variant="secondary"
          />
        </Box>
      </CardActions>
    </Card>
  )
}

export default Treasury