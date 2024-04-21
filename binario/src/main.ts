const textNerea = document.querySelectorAll("textarea") 
const button = document.querySelectorAll("button")

const converterValores = (): void => {
  textNerea[0].value === "" ? alert("vazio") : conversaoBinario()
}


const conversaoBinario = () : void => {
  const transformarEmArray: string[] =  Array.from(textNerea[0].value)
  const armazenarBi
  console.log(transformarEmArray);
  
}


button[0].addEventListener("click", () =>{
  converterValores()
})