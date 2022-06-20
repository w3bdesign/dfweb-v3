module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "npm run dev"
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
