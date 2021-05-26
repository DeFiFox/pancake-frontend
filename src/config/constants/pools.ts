import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0x0c03568f008000F44901d5Dc2D492B415036c928',
      56: '0x0c03568f008000F44901d5Dc2D492B415036c928',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1000',
    sortOrder: 1,
    isFinished: false,
  },
  
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.tkf,
    contractAddress: {
      97: '',
      56: '0x07936636bf725f3f524395c36acf388d9ed4c745',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '100',
    sortOrder: 2,
  },
 
]

export default pools
