const ParametersViewDO = ({ mode, parametr1 ='', parametr2, parametr3, parametr4, parametr5, parametr6, parametr7, parametr8, parametr9, parametr10, parametr11, parametr12, parametr13, parametr14, parametr15, parametr16,
   }) => {
  return (
    <div className="border-solid border-2 border-black rounded-3xl flex flex-col">
      <div className="text-center text-2xl mt-2">{mode}</div>
      <div className="m-2 text-sm">
        <p>Nasycenie tlenu (DO): {parametr1} {parametr2}</p>
        <p>Stężenie tlenu (DO): {parametr3} {parametr4}</p>
        <p>Wartość prądu: {parametr5} {parametr6}</p>
        <p>Temperatura roztworu: {parametr7} {parametr8}</p>
        <p>Temperatura membrany: {parametr9} {parametr10}</p>
        <p>Ciśnienie atmosferyczne: {parametr11} {parametr12}</p>
        <p>Korekta zasolenia w ppt: {parametr13}</p>
        <p>Nachylenie: {parametr14} {parametr15}</p>
      </div>
    </div>
  );
};

export default ParametersViewDO;
