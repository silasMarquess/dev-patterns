type bolet = {
    url: string,
    value_bolet: number
}

interface BoletEmitProtocol{
    emit(value: number):bolet;
}

class BradescoEmitBoletService implements BoletEmitProtocol{
    private emitBoletBradesco(value: number){
     console.log("emitindo um boleto pelo Servico do Bradesco");
     return {
        url_link : 'urlApiBradesco',
        value: value
     }
    }
    
    emit(value: number): bolet {
        const objBradesco = this.emitBoletBradesco(value);
        return {
            url:objBradesco.url_link,
            value_bolet: objBradesco.value
        }
    }
}

class ItauEmitBoletService implements BoletEmitProtocol{
    private emitBoletItau(value: number){
     console.log(`Emitindo boleto no valor de ${value} pelo servico do itau`);
        return {
            link:'LINK DO BOLETO',
            value:value
        }
    }

    emit(value: number): bolet {
     const objItau = this.emitBoletItau(value);
     return {
        url:objItau.link,
        value_bolet:objItau.value
     }
    }
}

class EmitBolet{ 
    const =';'
    static EmitBoleto (service: BoletEmitProtocol, valor: number) {
     const obj = service.emit(valor);
     console.log(obj);
    }
}

//EmitBolet.EmitBoleto(new ItauEmitBoletService(),240);