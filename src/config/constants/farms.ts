import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x27a522c1762f166c3bb8898cb1f592552da71f18',
      56: '0x27a522c1762f166c3bb8898cb1f592552da71f18',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x27a522c1762f166c3bb8898cb1f592552da71f18',
      56: '0x27a522c1762f166c3bb8898cb1f592552da71f18',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  
 
  
]

export default farms
