module.exports = {
  ci: {
      collect: {
        settings: {
          preset: 'desktop'
        },
        url: ['https://www.zappos.com/cart'],
      },
      upload: {
        target: 'temporary-public-storage',
    }
  }
};