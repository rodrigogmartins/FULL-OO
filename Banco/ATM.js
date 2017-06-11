function ATM(){
	this.nota5 = this.nota10 = this.nota20 = this.nota50 = this.nota100 = 0;
	this.abastecer = function(n, c){
		if((c == 5) && ((this.nota5+n) <= 100))return this.nota5+=n;
		else if((c == 10) && ((this.nota10+n) <= 100))return this.nota10+=n;
		else if((c == 20) && ((this.nota20+n) <= 100))return this.nota20+=n;
		else if((c == 50) && ((this.nota50+n) <= 100))return this.nota50+=n;
		else if((c == 100) && ((this.nota100+n) <= 100))return this.nota100+=n;
		else return 0;
	}
	this.consultarQuantidade = function(c){
		if(c === 5)return this.nota5;
		else if(c === 10)return this.nota10;
		else if(c === 20)return this.nota20;
		else if(c === 50)return this.nota50;
		else if(c === 100)return this.nota100;
		else return 0;
	}
	this.consultarValor = function(){
		return ((this.nota5 * 5) + (this.nota10 * 10) + (this.nota20 * 20) + (this.nota50 * 50) + (this.nota100 * 100));
	}
	this.retirar = function(v){
		if(v <= ((this.nota5 * 5) + (this.nota10 * 10) + (this.nota20 * 20) + (this.nota50 * 50) + (this.nota100 * 100))){

			if(v > 0 && (v%100 == 0) && this.nota100 >= Math.floor(v/100)){
				this.nota100-=Math.floor(v/100);
				console.log(Math.floor(v/100)+' notas de 100.');
				v-=(Math.floor(v/100)*100);
			}
			if(v > 0 && (v%50 == 0 || Math.floor(v/50) > 0) && this.nota50 >= Math.floor(v/50)){
				this.nota50-=Math.floor(v/50);
				console.log(Math.floor(v/50)+' notas de 50.');
				v-=(Math.floor(v/50)*50);
			}
			if(v > 0 && (v%20 == 0  || Math.floor(v/20) > 0) && this.nota20 >= Math.floor(v/20)){
				this.nota20-=Math.floor(v/20);
				console.log(Math.floor(v/20)+' notas de 20.');
				v-=(Math.floor(v/20)*20);
			}
			if(v > 0 && (v%10 == 0 || Math.floor(v/10) > 0) && this.nota10 >= Math.floor(v/10)){
				this.nota10-=Math.floor(v/10);
				console.log(Math.floor(v/10)+' notas de 10.');
				v-=(Math.floor(v/10)*10);
			}
			if(v > 0 && (v%5 == 0 || Math.floor(v/5) > 0) && this.nota5 >= Math.floor(v/5)){
				this.nota5-=Math.floor(v/5);
				console.log(Math.floor(v/5)+' notas de 5.');
				v-=(Math.floor(v/5)*5);
			}
		}
		else console.log('não há cédulas suficientes');
	}
}

const atm = new ATM();
atm.abastecer(33, 100);
console.log(atm.consultarQuantidade(100));
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarQuantidade(5));
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50));
console.log(atm.consultarQuantidade(50) === 0);
console.log(atm.consultarQuantidade(3));
console.log(atm.consultarQuantidade(3) === 0);
atm.abastecer(8, 3);
console.log(atm.consultarQuantidade(3) === 0);
console.log(atm.consultarValor());
console.log(atm.consultarValor() === 3300);
atm.retirar(350);
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarValor() === 3300); 
atm.retirar(300); 
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
atm.retirar(3100);
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
atm.retirar(3000);
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor() === 0);
atm.abastecer(10, 10); 
atm.abastecer(10, 50); 
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarValor() === 600);
atm.retirar(100);
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 8);
console.log(atm.consultarValor() === 500); 
atm.retirar(90);
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(50) === 7);
console.log(atm.consultarValor() === 410); 

atm.abastecer(5, 5);
atm.abastecer(5, 20);
atm.abastecer(5, 100);

atm.retirar(285);
console.log(atm.consultarQuantidade(5) === 4);
console.log(atm.consultarQuantidade(10) === 5);
console.log(atm.consultarQuantidade(20) === 4);
console.log(atm.consultarQuantidade(50) === 2);
console.log(atm.consultarValor() === 750);

atm.retirar(85);
console.log(atm.consultarQuantidade(5) === 3);
console.log(atm.consultarQuantidade(10) === 4);
console.log(atm.consultarQuantidade(20) === 3);
console.log(atm.consultarQuantidade(50) === 1);
console.log(atm.consultarValor() === 665);