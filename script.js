const CALCULAR = document.getElementById('btn-calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const VOL = document.getElementById('vol');
const MAN = document.getElementById('man');
const SC1 = document.getElementById('sc1');
const SC2 = document.getElementById('sc2');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none';
        let volDiario = calcVolumenDiario(DATO);
       
        // metodo Holliday segar
        if(DATO <= 30) {
            let mantenimiento = volDiario/24;
            VOL.innerHTML = 'Volumen Diario ' + volDiario;
            FLU.innerHTML = 'm + m/2 ' + mantenimiento*1.5 + ' cc/hr';
            MAN.innerHTML = 'Mantenimiento ' + mantenimiento + ' cc/hr';

            FLU.style.display = 'block';
            VOL.style.display = 'block';
            MAN.style.display = 'block';

            SC1.style.display = 'none';
            SC2.style.display = 'none';

        }else { // metodo superficie corporal
            let datoInt = parseInt(DATO);
            let sc = ((datoInt * 4) + 7) / (datoInt + 90);
            SC1.innerHTML = 'SC * 1500 ' + sc*1500;
            SC2.innerHTML = 'SC * 2000 ' + sc*2000;

            SC1.style.display = 'block';
            SC2.style.display = 'block';

            FLU.style.display = 'none';
            VOL.style.display = 'none';
            MAN.style.display = 'none';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        VOL.style.display = 'none';
        MAN.style.display = 'none';
        SC1.style.display = 'none';
        SC2.style.display = 'none';
    }
})

function calcVolumenDiario(peso){
    let resultado = 0;
    if(peso<=10){
        resultado = peso*100;
    }else if(peso > 10 && peso <= 20){
        resultado = 1000 + ((peso-10) * 50);
    }else if(peso> 20 && peso <= 30){
        resultado = 1500 + ((peso -20) * 20);
    }
    return resultado;
}

