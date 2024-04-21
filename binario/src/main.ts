const textNerea = document.querySelectorAll("textarea");
const button = document.querySelectorAll("button");

const converterValores = (): void => {
  textNerea[0].value === "" ? alert("vazio") : conversaoBinario();
};

const conversaoBinario = (): void => {
  const transformarEmArray: string[] = Array.from(textNerea[0].value);
  const armazenarBinario: string[] = [];
  for (const pos in transformarEmArray) {
    const ascTabela: number = transformarEmArray[pos].charCodeAt(0);
    const transformarEmBinarioInput: string = ascTabela.toString(2);
    armazenarBinario.push(transformarEmBinarioInput);
  }
  mostrarBinario(armazenarBinario)
};

const mostrarBinario = (binario: string): void => {
  textNerea[1].innerHTML = binario;
};




button[0].addEventListener("click", () => {
  converterValores();
});
