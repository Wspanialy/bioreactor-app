const ParametersViewMV = ({ mode, parametr1 ='', parametr2, parametr3, parametr4
   }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{mode}</div>
      <div className="m-2 text-sm">
        <p>Wartość mV: {parametr1} {parametr2}</p>
        <p>Temperatura: {parametr3} {parametr4}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ParametersViewMV;
