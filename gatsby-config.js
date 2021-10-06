module.exports = {
  siteMetadata: {
    siteUrl: "https://in-info-web4.informatics.iupui.edu/~ebules/n322/list-app",
    title: "List App",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        short_name: "Todo List",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
  pathPrefix: "/~ebules/n322/list-app",
};
