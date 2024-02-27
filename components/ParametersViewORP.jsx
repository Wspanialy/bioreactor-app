const ParametersViewORP = ({ mode, parametr1 ='', parametr2, parametr3, parametr4, parametr5, parametr6
   }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{mode}</div>
      <div className="m-2 text-sm">
        <p>Wartość ORP: {parametr1} {parametr2}</p>
        <p>Wartość mV surowa: {parametr3} {parametr4}</p>
        <p>Temperatura: {parametr5} {parametr6}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
    </div>
  );
};

export default ParametersViewORP;
