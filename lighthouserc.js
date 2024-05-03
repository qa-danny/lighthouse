module.exports = {
  ci: {
      collect: {
        url: ['http://www.zappos.com/cart'],
        staticDistDir: './',
      },
      upload: {
        target: 'temporary-public-storage',
    }
  }
};