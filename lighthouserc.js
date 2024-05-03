module.exports = {
  ci: {
      collect: {
        emulatedFormFactor: 'desktop',
        disableDeviceEmulation: true,
        disableCpuThrottling: true,
        disableNetworkThrottling: true,
        url: ['https://www.zappos.com/cart'],
      },
      upload: {
        target: 'temporary-public-storage',
    }
  }
};