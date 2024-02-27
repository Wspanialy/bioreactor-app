"use client"

import ParametersView from "@components/ParametersView"
import ExportButton from '@components/ExportButton';
import { useFetchAndMemoizeData } from "@Hooks/fetchData";

const Home = () => {

  const data = useFetchAndMemoizeData('http://localhost:5000/get_data');

  return (
    <>
      <main className="flex flex-wrap pt-4 justify-center">
        {data ? (
          Object.keys(data).map((channel, index) => {
            const channels = data[channel].split(',');
            console.log(channels)
            return (
              <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                <ParametersView
                mode = {channels[6]}
                parametr1 = {channels[7]}
                parametr2= {channels[8]}
                parametr3= {channels[9]}
                parametr4= {channels[10]}
                parametr5= {channels[11]}
                parametr6= {channels[12]}
                parametr7= {channels[13]}
                parametr8= {channels[14]}
                parametr9= {channels[15]}
                parametr10= {channels[16]}
                parametr11= {channels[17]}
                parametr12= {channels[18]}
                parametr13= {channels[18]}
                parametr14= {channels[19]}
                parametr15= {channels[20]}
                parametr16= {channels[21]}
                  
                />
                
              </div>
            
            );
            
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
