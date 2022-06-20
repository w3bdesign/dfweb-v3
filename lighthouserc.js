module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "npm run build"
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
