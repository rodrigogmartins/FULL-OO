function Conta(v = 500){
	if(v >= 500){
		this.saldo = v; 
		this.historico = ['abertura: +'+v];
	}else throw('saldo inicial invalido');

	this.sacar = function(n){
		if(n <= this.saldo && n >= 5){
			this.saldo-=n;
			this.historico.push('saque: -'+n);
		}
		return (n <= this.saldo && n >= 5);
	}
	this.depositarDinheiro = function(n){
		if(n <= 1000){
			this.saldo+=n;
			this.historico.push('deposito dinheiro: +'+n);
		}
		return (n <= 1000);
	}
	this.depositarCheque = function(n){
		if(n <= 10000){
			this.saldo+=n; 
			this.historico.push('deposito cheque: +'+n);
		}
		return (n <= 10000);
	}
	this.transfere = function(n, c){
			if(n <= 5000 && this.saldo >= n){
				c.saldo+=n;
				c.historico.push('transferencia: +'+n);
				this.saldo-=n;
				this.historico.push('transferencia: -'+n);
			} 
			else if(n > 5000)throw('transferencia excede limite de 5000');
			else if(this.saldo < n)throw('saldo insuficiente para transferencia');
		return(n <= 5000 && c.saldo >= n);
	}
}

    const conta1 = new Conta();
    // saldo inicial de 500
    console.log(conta1.saldo); // 500
    console.log(conta1.saldo === 500);
    console.log(conta1.historico.length === 1);
    console.log(conta1.historico[0] === "abertura: +500");
    // não é permitido
    console.log(conta1.sacar(600) === false);
    console.log(conta1.saldo); // 500
    console.log(conta1.saldo === 500);
    console.log(conta1.historico.length === 1);
    // é permitido
    console.log(conta1.sacar(60) === true); // 500 - 60 === 440
    console.log(conta1.saldo); // 440
    console.log(conta1.saldo === 440);
    console.log(conta1.historico.length === 2);
    console.log(conta1.historico[0] === "abertura: +500");
    console.log(conta1.historico[1] === "saque: -60");
    // não é permitido
    console.log(conta1.sacar(4) === false);
    console.log(conta1.saldo); // 440
    console.log(conta1.saldo === 440);
    console.log(conta1.historico.length === 2);
     
    // até aqui 0.5 pontos <=========================================
     
    // depósito em dinheiro não permitido
    console.log(conta1.depositarDinheiro(1100) === false);
    console.log(conta1.saldo); // 440
    console.log(conta1.saldo === 440);
    console.log(conta1.historico.length === 2);
    // depósito em dinheiro permitido
    console.log(conta1.depositarDinheiro(500) === true); // 440 + 500 === 940
    console.log(conta1.saldo); // 940
    console.log(conta1.saldo === 940);
    console.log(conta1.historico.length === 3);
    console.log(conta1.historico[0] === "abertura: +500");
    console.log(conta1.historico[1] === "saque: -60");
    console.log(conta1.historico[2] === "deposito dinheiro: +500");
    // depósito em cheque não permitido
    console.log(conta1.depositarCheque(11100) === false);
    console.log(conta1.saldo); // 940
    console.log(conta1.saldo === 940);
    console.log(conta1.historico.length === 3);
    // depósito em cheque permitido
    console.log(conta1.depositarCheque(5000) === true); // 940 + 5000 === 5940
    console.log(conta1.saldo); // 5940
    console.log(conta1.saldo === 5940);
    console.log(conta1.historico.length === 4);
    console.log(conta1.historico[0] === "abertura: +500");
    console.log(conta1.historico[1] === "saque: -60");
    console.log(conta1.historico[2] === "deposito dinheiro: +500");
    console.log(conta1.historico[3] === "deposito cheque: +5000");
     
    const conta2 = new Conta(800);
    console.log(conta2.saldo === 800); // true
     
    try {
      const conta3 = new Conta(499); // throws an exception
      console.log(false); // essa linha não deve ser alcançada
    } catch(e) { // a exceção deve ser capturada
      console.log(e); // saldo inicial invalido
      console.log(e === "saldo inicial invalido"); // true
    }
     
    // transferência válida
    console.log(conta1.transfere(1000, conta2) === true);
    console.log(conta1.saldo === 4940);
    console.log(conta2.saldo === 1800);
     
    console.log(conta1.historico.length === 5);
    console.log(conta1.historico[0] === "abertura: +500");
    console.log(conta1.historico[1] === "saque: -60");
    console.log(conta1.historico[2] === "deposito dinheiro: +500");
    console.log(conta1.historico[3] === "deposito cheque: +5000");
    console.log(conta1.historico[4] === "transferencia: -1000");
     
    console.log(conta2.historico.length === 2);
    console.log(conta2.historico[0] === "abertura: +800");
    console.log(conta2.historico[1] === "transferencia: +1000");
     
    const conta4 = new Conta(2000);
     
    try {
      console.log(conta4.transfere(2001, conta2));
      console.log(false); // essa linha não deve ser alcançada
    } catch (e) {
      console.log(e === "saldo insuficiente para transferencia");
    }
     
    try {
      console.log(conta4.transfere(5001, conta2));
      console.log(false); // essa linha não deve ser alcançada
    } catch (e) {
      console.log(e === "transferencia excede limite de 5000");
    }
