const ParametersViewSalinity = ({ mode, parametr1 ='', parametr2, parametr3, parametr4, parametr5, parametr6, parametr7, parametr8, parametr9, parametr10
   }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{mode}</div>
      <div className="m-2 text-sm">
        <p>Zasolenie: {parametr1} {parametr2}</p>
        <p>Konduktancja: {parametr3} {parametr4}</p>
        <p>Temperatura: {parametr5} {parametr6}</p>
        <p>Temperatura odniesienia: {parametr7} {parametr8}</p>
        <p>Typ zasolenia: {parametr9} {parametr10}</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ParametersViewSalinity;
