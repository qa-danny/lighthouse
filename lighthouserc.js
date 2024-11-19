module.exports = {
  ci: {
    collect: {
      settings: {
        preset: 'desktop'
      },
      url: ['https://www.zappos.com/cart', 'https://www.zappos.com/red-shoes'],
    },
    upload: {
      target: 'temporary-public-storage',
    }
  }
};