module.exports = {
  async headers() {
    // const value =
    //   (await fetch("https://random-data-api.com/api/number/random_number").then(
    //     (r) => r.json()
    //   )) || 0;
    // const strValue = JSON.stringify(value);
    // console.log(strValue);
    return [
      {
        source: "/:path*",
        headers: [
          //   {
          //     key: "Content-Security-Policy",
          //     value: "frame-ancestors *.w3schools.com",
          //   },
          //   {
          //     key: "X-Frame-Options",
          //     value: "ALLOW_FROM *.w3schools.com",
          //   },
          {
            key: "from-config",
            value: "some value",
          },
        ],
      },
    ];
  },
};
