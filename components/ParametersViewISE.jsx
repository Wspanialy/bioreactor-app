const ParametersViewISE = ({
    mode,
    parametr1 = '',
    parametr2,
    parametr3,
    parametr4,
    parametr5,
    parametr6,
    parametr7,
    parametr8,
    parametr9,
  }) => {
    return (
      <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
        <div className="text-center text-2xl mt-2">{mode}</div>
        <div className="m-2 text-sm">
          <p>Typ elektrody: {parametr1}</p>
          <p>Wartość ISE: {parametr2} {parametr3}</p>
          <p>Wartość: {parametr4} {parametr5}</p>
          <p>Temperatura: {parametr6} {parametr7}</p>
          <p>Wartość średnia nachylenia: {parametr8} {parametr9}</p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  };

  export default ParametersViewISE
  