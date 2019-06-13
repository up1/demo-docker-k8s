'use strict'

const processType = process.env.PROCESS_TYPE

switch (processType) {
  case 'web':
    // Start service
    require('./web')
    break
  case 'script':
    // Migrate data => 12factor (12. Admin processes)
    require('./migrate')
    break
  default:
    throw new Error(
      `Invalid process type: ${processType}. It should be one of: 'web', 'script'.`
    )
}