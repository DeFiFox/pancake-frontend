import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x51765e3277a5B227471B784CC912345587094F8E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1000',
    sortOrder: 1,
    isFinished: false,
  },
  
  {
    sousId: 20,
    stakingToken: tokens.cake,
    earningToken: tokens.tkf,
    contractAddress: {
      97: '',
      56: '0x5db85cafD3AABA39F20e502d28b93be0bd2b14F0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '100',
    sortOrder: 20,
  },
 
]

export default pools
