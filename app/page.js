import ParametersView from "@components/ParametersView"


export default function Home() {
  return (
    <main className="flex flex-wrap pt-4 justify-center">
      <div className="w-1/3 mr-2 p-2">
        <ParametersView value="6.231" name="pH" channel="2" channelName="2" dateStamp="2023-11-03" />
      </div>
      <div className="w-1/3 mr-2 p-2">
      <ParametersView value="6.231" name="pH" channel="2" channelName="2" dateStamp="2023-11-03" />
      </div>
      <div className="w-1/3 mr-2 p-2">
      <ParametersView value="6.231" name="pH" channel="2" channelName="2" dateStamp="2023-11-03" />
      </div>
      <div className="w-1/3 mr-2 p-2">
      <ParametersView value="6.231" name="pH" channel="2" channelName="2" dateStamp="2023-11-03" />
      </div>
    </main>
  );
}
