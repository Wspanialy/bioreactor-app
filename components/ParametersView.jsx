const ParametersView = ({ value, name, channel, channelName, dateStamp }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{value} {name}</div>
      <div className="m-2 text-sm">
        <p>Channel: {channel}</p>
        <p>Name: {channelName}</p>
        <p>Date: {dateStamp}</p>
      </div>
    </div>
  );
};

export default ParametersView;
