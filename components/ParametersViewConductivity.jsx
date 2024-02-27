const ParametersViewConductivity = ({ mode, parametr1 ='', parametr2, parametr3, parametr4, parametr5, parametr6, parametr7, parametr8, parametr9, parametr10, parametr11, parametr12
   }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{mode}</div>
      <div className="m-2 text-sm">
        <p>Przewodność: {parametr1} {parametr2}</p>
        <p>Konduktacja: {parametr3} {parametr4}</p>
        <p>Temperatura: {parametr5} {parametr6}</p>
        <p>Współczynnik temperatury: {parametr7} {parametr8}</p>
        <p>Temperatura odniesienia: {parametr9} {parametr10}</p>
        <p>Stała komórka: {parametr11} {parametr12}</p>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ParametersViewConductivity;
