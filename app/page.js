import ParametersView from "@components/ParametersView"


export default function Home() {
  return (
    <main className="flex flex-wrap">
      <div className="w-1/2 p-2">
        <ParametersView />
      </div>
      <div className="w-1/2 p-2">
        <ParametersView />
      </div>
      <div className="w-1/2 p-2">
        <ParametersView />
      </div>
      <div className="w-1/2 p-2">
        <ParametersView />
      </div>
    </main>
  );
}
