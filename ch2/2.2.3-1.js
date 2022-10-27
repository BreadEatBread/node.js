const axios = require("axios");

(async () => {
  try {
    const result = await axios.get(
      `https://www.zerocho.com/api/search/${encodeURIComponent("출간")}`
    );
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
