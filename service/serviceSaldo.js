const {getSaldos} = require('../repository/saldo');

module.exports.sortDate = (forma) => {
    const fechas = getSaldos();
    if(forma === "asc"){
        return fechas.sort((a, b) => a.fecha - b.fecha);
    }else{
        return fechas.sort((a, b) => b.fecha - a.fecha);
    }
}


module.exports.Suma = () => {
    const fechas = getSaldos();
    const sumWithInitial = fechas.reduce(
        (previousValue, currentValue) => previousValue + (currentValue.saldoAntiguo? currentValue.saldoAntiguo : 0) + (currentValue.saldoNuevo? currentValue.saldoNuevo : 0),
        0
      );
      return {saldoTotal: sumWithInitial};
}

