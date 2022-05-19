/*  Conhecendo do javascript
    superficialmente...
    break case catch class
    const continue debugger default delete
    do else export extends finally for function
    if import in instanceof new return super
    switch this throw try typeof var void
    while with yield
*/

//console.log() formatação
//%s - string %i - integer %d - integer
//%f - float %o - object %b - binary 
//%x hexadecimal %e - exponent
var a1 = "cadeia de caracteres";
var a2 = 10;
console.log("string: %s \nnúmero: %i \n", a1, a2);

var valor = 1;
console.log( valor == "1" );
console.log( valor === "1" );
console.log( valor != "1" );
console.log( valor !== "1" );

var nada = null;
var indefinido = undefined;
var dicionario = {ouro:25, prata:"valioso"};
var matriz = ["a", 3, true, 3.14];
matriz[0] = "b";

function soma(a, b)
{
	return a+b;
}

console.log(soma(2,2));

/*demostração de orientação a objetos
  com a palavra reservada class*/
//dados não são modificados dentro da classe
class Retangulo
{

	constructor(altura, largura)
	{
		this.altura = altura;
		this.largura = largura;
		this.nome = "idefinido";
	}

	get area(){return this.calcularArea}
	get identidade(){return this.identidade}
	get idverboso(){return this.idverboso}

	calcularArea()
	{
		return this.altura * this.largura;
	}

	identidade(entrada)
	{
		return entrada;
	}
	
	idverboso()
	{
		console.log("\n%s",this.nome);
	}
}
	
var objeto = new Retangulo(10,20);
objeto.nome = objeto.identidade("ret01");
console.log("\nidentidade: %s area: %s", objeto.idverboso(), objeto.area());

