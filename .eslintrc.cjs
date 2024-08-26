const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.node(),
    presets.effector(),
    presets.typescript({
      enforceUsingType: true,
      tsconfig: 'tsconfig.app.json',
    }),
    presets.react(),
  ],
})
