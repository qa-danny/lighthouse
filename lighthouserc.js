module.exports = {
  ci: {
      collect: {
        url: ['http://www.zappos.com/cart'],
        startServerCommand: 'rails server -e production',
        staticDistDir: './',
      },
      upload: {
        target: 'temporary-public-storage',
    }
  }
};