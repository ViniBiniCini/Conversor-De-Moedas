document.getElementById("butao").onclick = async function(){
    document.getElementById("loading").style.display = "block";
    const base = document.getElementById("moedaBase").value;
    const final = document.getElementById("moedaFinal").value;
    const quantidade = document.getElementById("quantidade").value;
 try{   
const res = await fetch(`/conversor?moedaBase=${base}&moedaFinal=${final}&quantidade=${quantidade}`);
     const data = await res.json();

     document.getElementById("resultado").textContent = `${quantidade} ${base} para a moeda requisitada é de ${data.resultado}`;
 }
 catch{
      document.getElementById("resultado").textContent = "Erro ao buscar!";

 }

 finally{
  document.getElementById("loading").style.display = "none";
 }
 };