import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0xa2bf1b4fa6ce164432cde049e75f1bd4b8a2c0f0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '100',
    sortOrder: 1,
    isFinished: false,
  },

]

export default pools
