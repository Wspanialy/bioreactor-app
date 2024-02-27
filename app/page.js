"use client";

import ParametersViewISE from "@components/ParametersViewISE";
import ParametersViewPH from "@components/ParametersViewPH";
import ParametersViewMV from "@components/ParametersViewMV";
import ParametersViewRMV from "@components/ParametersViewRMV";
import ExportButton from "@components/ExportButton";
import { useFetchAndMemoizeData } from "@Hooks/fetchData";
import ParametersViewORP from "@components/ParametersViewORP";
import ParametersViewConductivity from "@components/ParametersViewConductivity";
import ParametersViewTDS from "@components/ParametersViewTDS";
import ParametersViewSalinity from "@components/ParametersViewSalnity";
import ParametersViewResistivity from "@components/ParametersViewSalnity";
import ParametersViewDO from "@components/ParametersViewDO";

const Home = () => {
  const data = useFetchAndMemoizeData("http://localhost:5000/get_data");

  return (
    <>
      <main className="flex flex-wrap pt-4 justify-center">
        {data ? (
          Object.keys(data).map((channel, index) => {
            const channels = data[channel].split(",");
            const channelMode = channels[6];
            const mode = `${channelMode}`; // Initialize mode to a default value

            switch (channelMode) {
              case "ISE":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewISE
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                      parametr9={channels[15]}
                      parametr10={channels[16]}
                    />
                  </div>
                );
              case "PH":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewPH
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                    />
                  </div>
                );
              case "MV":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewMV
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                    />
                  </div>
                );
              case "RMV":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewRMV
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                    />
                  </div>
                );
              case "ORP":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewORP
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                    />
                  </div>
                );
              case "Conductivity":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewConductivity
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[14]}
                      parametr8={channels[15]}
                      parametr9={channels[16]}
                      parametr10={channels[17]}
                      parametr11={channels[18]}
                      parametr12={channels[19]}
                    />
                  </div>
                );
              case "TDS":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewTDS
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[14]}
                      parametr8={channels[15]}
                      parametr9={channels[16]}
                      parametr10={channels[17]}
                      parametr11={channels[18]}
                      parametr12={channels[19]}
                      parametr13={channels[20]}
                    />
                  </div>
                );
              case "Salinity":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewSalinity
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                      parametr9={channels[15]}
                      parametr10={channels[16]}
                    />
                  </div>
                );
              case "Resistivity":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewResistivity
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                      parametr9={channels[15]}
                      parametr10={channels[16]}
                    />
                  </div>
                );
              case "DO":
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersViewDO
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                      parametr9={channels[15]}
                      parametr10={channels[16]}
                      parametr11={channels[17]}
                      parametr12={channels[18]}
                      parametr13={channels[19]}
                      parametr14={channels[20]}
                      parametr15={channels[21]}
                      parametr16={channels[22]}
                    />
                  </div>
                );
              default:
                return (
                  <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                    <ParametersView
                      mode={mode}
                      parametr1={channels[7]}
                      parametr2={channels[8]}
                      parametr3={channels[9]}
                      parametr4={channels[10]}
                      parametr5={channels[11]}
                      parametr6={channels[12]}
                      parametr7={channels[13]}
                      parametr8={channels[14]}
                      parametr9={channels[15]}
                      parametr10={channels[16]}
                      parametr11={channels[17]}
                      parametr12={channels[18]}
                      parametr13={channels[19]}
                      parametr14={channels[20]}
                      parametr15={channels[21]}
                      parametr16={channels[22]}
                    />
                  </div>
                );
            }
          })
        ) : (
          <p className="text-xl justify-center">Loading...</p>
        )}
        {data && <ExportButton />}
      </main>
    </>
  );
};

export default Home;
