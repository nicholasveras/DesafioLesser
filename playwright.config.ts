
// import { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig = {
//   webServer: {
//     command: 'pnpm run build && pnpm run preview',
//     port: 5173,
//   },
//   testDir: 'tests',
//   testMatch: /(.+\.)?(test|spec)\.[jt]s/,
//   use: {
//     headless: false,
//   },
// };

// export default config;


import type { PlaywrightTestConfig } from '@playwright/test'; 
const config: PlaywrightTestConfig = { 
  webServer: { command: 'npm run build && npm run preview', 
  port: 5173 
}, 
  testDir: 'tests', testMatch: /(.+.)?(test|spec).[jt]s/, 
  use: { 
  headless: false } 
}; 
  
  export default config;
