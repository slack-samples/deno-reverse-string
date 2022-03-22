const reverse = async ({ inputs, env }: any) => {
  console.log(`reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").reverse().join("");
  return await {
    outputs: { reverseString },
  };
};

export default reverse;
