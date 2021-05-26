export function date(date: Date) {
    return date.toLocaleDateString('es-ES', {
      month: 'numeric',
      year: 'numeric',
      day: 'numeric',
    });
}

export function empty(value: string | number) {
    if (!value || value === 'null') return '-';
    return value;
}

export function ceros(value: any, numero: number, texto = "0") {  

    if (typeof value !== 'string') {
  
      return value.toString().padStart(numero, texto);
    }
  
    return value.padStart(numero, texto);
}

export function coma(value: string) {
    if (value) {
      value = value.toString();
      const separador = '.';
      const sepDecimal = ',';
      value += '';
      const splitStr = value.split('.');
      let splitLeft = splitStr[0];
      const splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
      const regx = /(\d+)(\d{3})/;
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
      }
      return splitLeft + splitRight.slice(0, 3);
  
    } else {
      return '0';
    }
}

export function imprimir(href: string) {
  const elem = document.createElement("a");
  elem.href = href;
  elem.target = "_blank";
  elem.click();  
}
  
  
  
  