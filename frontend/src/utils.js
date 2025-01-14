const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImRiYWJmNWY4LTM5OGMtNDhjNi05ZGJmLWM0MDQ0YmViNDljYiIsIm9yZ0lkIjoiMzkxNzEwIiwidXNlcklkIjoiNDAyNDk0IiwidHlwZUlkIjoiMTBiNmNlZDEtNWJkMC00ZmZiLWJmNTktMmEyY2UzODI2YjA4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTUzMTAwNzgsImV4cCI6NDg3MTA3MDA3OH0.N3EQIVWJQvg8g6JdvlBiC7x9Ov3uz5-2W4mAWMnUq6s";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenID) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenID}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
