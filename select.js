document.addEventListener("DOMContentLoaded", function() {
    const disciplinas = ["Biologia", "Artes", "Geografia", "Sociologia"];
    const bimestres = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"];
    const valoresBimestres = [1, 2, 3, 4]; 

   







    let p =  document.querySelector("p")
    let p2 =  document.querySelector("#p2")
    let p3 =  document.querySelector("#p3")
    let p4 =  document.querySelector("#p4")
   //
    let g1 =  document.querySelector("#g1")
    let g2 =  document.querySelector("#g2")
    let g3 =  document.querySelector("#g3")
    let g4 =  document.querySelector("#g4")
 //
 let b1 =  document.querySelector("#b1")
 let b2 =  document.querySelector("#b2")
 let b3 =  document.querySelector("#b3")
 let b4 =  document.querySelector("#b4")
 
 //
 let s1 =  document.querySelector("#s1")
 let s2 =  document.querySelector("#s2")
 let s3 =  document.querySelector("#s3")
 let s4 =  document.querySelector("#s4")
 
 
 
     function fetchAndFillCards(disciplina, bimestre) {
         fetch(`http://localhost:3000/resultados/${disciplina}/${bimestre}`)
             .then(response => response.json())
             .then(data => {
                 data.forEach(item => {
                     switch (item.disciplina) {
                         case 'Artes':
                             if (bimestre === 'PRIMEIRO') {
                                 if(item.nota>7.9){
                                     p.innerHTML = `<div class  = text-success preto  id= "artesNota1"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('artesNota1').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 p.innerHTML = `<div class  = text-warning preto id= "artesNota1"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('artesNota1').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             p.innerHTML = `<div class  = text-warning preto id= "artesNota1" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('artesNota1').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         p.innerHTML = `<div class  = text-danger preto id= "artesNota1" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('artesNota1').textContent = item.nota}</div>`
                   
                 }
                  
                                 document.getElementById('dataartes1').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                             else if (bimestre === 'SEGUNDO') {
                                 if(item.nota>7.9){
                                     p2.innerHTML = `<div class  = text-success preto  id= "artesNota2"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('artesNota2').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 p2.innerHTML = `<div class  = text-warning preto id= "artesNota2"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('artesNota2').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             p2.innerHTML = `<div class  = text-warning preto id= "artesNota2" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('artesNota2').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         p2.innerHTML = `<div class  = text-danger preto id= "artesNota2" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('artesNota2').textContent = item.nota}</div>`
                   
                 }
                                 
                                 
                                 document.getElementById('dataartes2').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
 
                             else if (bimestre === 'TERCEIRO') {
                                 if(item.nota>7.9){
                                     p3.innerHTML = `<div class  = text-success preto  id= "artesNota3"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('artesNota3').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 p3.innerHTML = `<div class  = text-warning preto id= "artesNota3"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('artesNota3').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             p3.innerHTML = `<div class  = text-warning preto id= "artesNota3" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('artesNota3').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         p3.innerHTML = `<div class  = text-danger preto id= "artesNota3" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('artesNota3').textContent = item.nota}</div>`
                   
                 }
                    
                                 document.getElementById('dataartes3').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                         
                             else if (bimestre === 'QUARTO') {
                                 if(item.nota>7.9){
                                     p4.innerHTML = `<div class  = text-success preto  id= "artesNota4"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('artesNota4').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 p4.innerHTML = `<div class  = text-warning preto id= "artesNota4"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('artesNota4').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             p4.innerHTML = `<div class  = text-warning preto id= "artesNota4" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('artesNota4').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         p4.innerHTML = `<div class  = text-danger preto id= "artesNota4" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('artesNota4').textContent = item.nota}</div>`
                   
                 }
                   
                                 document.getElementById('dataartes4').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                         
                            
                            
                             break;
     
                         case 'Geografia':
                             if (bimestre === 'PRIMEIRO') {
                                 if(item.nota>7.9){
                                     g1.innerHTML = `<div class  = text-success preto  id= "geoNota1"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('geoNota1').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 g1.innerHTML = `<div class  = text-warning preto id= "geoNota1"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('geoNota1').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             g1.innerHTML = `<div class  = text-warning preto id= "geoNota1" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('geoNota1').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         g1.innerHTML = `<div class  = text-danger preto id= "geoNota1" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('geoNota1').textContent = item.nota}</div>`
                   
                 }
                                 document.getElementById('datageo1').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                             else if (bimestre === 'SEGUNDO') {
                                 if(item.nota>7.9){
                                     g2.innerHTML = `<div class  = text-success preto  id= "geoNota2"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('geoNota2').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 g2.innerHTML = `<div class  = text-warning preto id= "geoNota2"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('geoNota2').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             g2.innerHTML = `<div class  = text-warning preto id= "geoNota2" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('geoNota2').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         g2.innerHTML = `<div class  = text-danger preto id= "geoNota2" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('geoNota2').textContent = item.nota}</div>`
                   
                 }
                                 document.getElementById('datageo2').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
 
                             else if (bimestre === 'TERCEIRO') {
                                 if(item.nota>7.9){
                                     g3.innerHTML = `<div class  = text-success preto  id= "geoNota3"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('geoNota3').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 g3.innerHTML = `<div class  = text-warning preto id= "geoNota3"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('geoNota3').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             g3.innerHTML = `<div class  = text-warning preto id= "geoNota3" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('geoNota3').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         g3.innerHTML = `<div class  = text-danger preto id= "geoNota3" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('geoNota3').textContent = item.nota}</div>`
                   
                 }
                                 document.getElementById('datageo3').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                         
                             else if (bimestre === 'QUARTO') {
                                 if(item.nota>7.9){
                                     g4.innerHTML = `<div class  = text-success preto  id= "geoNota4"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('geoNota4').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 g4.innerHTML = `<div class  = text-warning preto id= "geoNota4"> 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('geoNota4').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<8 && item.nota>=6){
                             g4.innerHTML = `<div class  = text-warning preto id= "geoNota4" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('geoNota4').textContent = item.nota}</div>`
                       
                     }
                     else  if(item.nota<6){
                         g4.innerHTML = `<div class  = text-danger preto id= "geoNota4" > 
                         <i class="fas fa-chart-bar"></i>  
                         Nota: ${document.getElementById('geoNota4').textContent = item.nota}</div>`
                   
                 }
                                 document.getElementById('datageo4').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                             }
                         
                         
 
 
 
                             break;
     
                             case 'Sociologia':
                                 if (bimestre === 'PRIMEIRO') {
                                     if(item.nota>7.9){
                                         s1.innerHTML = `<div class  = text-success preto  id= "socNota1"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('socNota1').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     s1.innerHTML = `<div class  = text-warning preto id= "socNota1"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('socNota1').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 s1.innerHTML = `<div class  = text-warning preto id= "socNota1" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('socNota1').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             s1.innerHTML = `<div class  = text-danger preto id= "socNota1" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('socNota1').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('datasoc1').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                                 else if (bimestre === 'SEGUNDO') {
                                     if(item.nota>7.9){
                                         s2.innerHTML = `<div class  = text-success preto  id= "socNota2"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('socNota2').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     s2.innerHTML = `<div class  = text-warning preto id= "socNota2"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('socNota2').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 s2.innerHTML = `<div class  = text-warning preto id= "socNota2" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('socNota2').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             s2.innerHTML = `<div class  = text-danger preto id= "socNota2" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('socNota2').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('datasoc2').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
     
                                 else if (bimestre === 'TERCEIRO') {
                                     if(item.nota>7.9){
                                         s3.innerHTML = `<div class  = text-success preto  id= "socNota3"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('socNota3').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     s3.innerHTML = `<div class  = text-warning preto id= "socNota3"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('socNota3').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 s3.innerHTML = `<div class  = text-warning preto id= "socNota3" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('socNota3').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             s3.innerHTML = `<div class  = text-danger preto id= "socNota3" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('socNota3').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('datasoc3').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                             
                                 else if (bimestre === 'QUARTO') {
                                     if(item.nota>7.9){
                                         s4.innerHTML = `<div class  = text-success preto  id= "socNota3"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('socNota3').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     s4.innerHTML = `<div class  = text-warning preto id= "socNota4"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('socNota4').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 s4.innerHTML = `<div class  = text-warning preto id= "socNota4" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('socNota4').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             s4.innerHTML = `<div class  = text-danger preto id= "socNota4" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('socNota4').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('datasoc4').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                             
                         
                             break;
                             
                             case 'Biologia':
                                 if (bimestre === 'PRIMEIRO') {
                                     if(item.nota>7.9){
                                         b1.innerHTML = `<div class  = text-success preto  id= "bioNota1"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('bioNota1').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     b1.innerHTML = `<div class  = text-warning preto id= "bioNota1"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('bioNota1').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 b1.innerHTML = `<div class  = text-warning preto id= "bioNota1" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('bioNota1').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             b1.innerHTML = `<div class  = text-danger preto id= "bioNota1" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('bioNota1').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('databio1').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
 
 //segundo bimestre
 
                                 else if (bimestre === 'SEGUNDO') {
                                     if(item.nota>7.9){
                                         b2.innerHTML = `<div class  = text-success preto  id= "bioNota2"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('bioNota2').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     b2.innerHTML = `<div class  = text-warning preto id= "bioNota2"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('bioNota2').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 b2.innerHTML = `<div class  = text-warning preto id= "bioNota2" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('bioNota2').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             b2.innerHTML = `<div class  = text-danger preto id= "bioNota2" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('bioNota2').textContent = item.nota}</div>`
                       
                     }
                             
                                     document.getElementById('databio2').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                                 //
     
                                 else if (bimestre === 'TERCEIRO') {
                                     if(item.nota>7.9){
                                         b3.innerHTML = `<div class  = text-success preto  id= "bioNota3"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('bioNota3').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     b3.innerHTML = `<div class  = text-warning preto id= "bioNota3"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('bioNota3').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 b3.innerHTML = `<div class  = text-warning preto id= "bioNota3" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('bioNota3').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             b3.innerHTML = `<div class  = text-danger preto id= "bioNota3" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('bioNota3').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('databio3').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                             
                                 else if (bimestre === 'QUARTO') {
                                     if(item.nota>7.9){
                                         b4.innerHTML = `<div class  = text-success preto  id= "bioNota4"> 
                                         <i class="fas fa-chart-bar"></i>  
                                         Nota: ${document.getElementById('bioNota4').textContent = item.nota}</div>`
                                   
                                 }
                                 else  if(item.nota<8 && item.nota>=6){
                                     b4.innerHTML = `<div class  = text-warning preto id= "bioNota4"> 
                                     <i class="fas fa-chart-bar"></i>  
                                     Nota: ${document.getElementById('bioNota4').textContent = item.nota}</div>`
                               
                             }
                             else  if(item.nota<8 && item.nota>=6){
                                 b4.innerHTML = `<div class  = text-warning preto id= "bioNota4" > 
                                 <i class="fas fa-chart-bar"></i>  
                                 Nota: ${document.getElementById('bioNota4').textContent = item.nota}</div>`
                           
                         }
                         else  if(item.nota<6){
                             b4.innerHTML = `<div class  = text-danger preto id= "bioNota4" > 
                             <i class="fas fa-chart-bar"></i>  
                             Nota: ${document.getElementById('bioNota4').textContent = item.nota}</div>`
                       
                     }
                                     document.getElementById('databio4').textContent = new Date(item.atualizadoEm).toLocaleDateString();
                                 }
                             
                             default:
                     
                         }
                 });
             })
           
             
             .catch(error => {
                 console.error('Erro ao buscar resultados', error);
             });
     }
 
 
   
    ['Artes', 'Geografia', 'Biologia', 'Sociologia'].forEach(disciplina => {
        ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'].forEach(bimestre => {
            fetchAndFillCards(disciplina, bimestre);
        });
    });
    

    disciplinas.forEach(function(disciplina) {
        for (let i = 1; i <= 4; i++) {
            let btnDisciplina = document.getElementById(`${disciplina.toLowerCase()}${i}`);
            if (btnDisciplina) {
                btnDisciplina.addEventListener("click", function(e) {
                    document.getElementById("disciplina").value = disciplina;
                    document.getElementById("bimestre").value = i;
                });
            }
        }
    });

    
    bimestres.forEach(function(bimestre, index) {
        let btnBimestre = document.getElementById(`${bimestre.toLowerCase()}`);
        if (btnBimestre) {
            btnBimestre.addEventListener("click", function(e) {
                document.getElementById("bimestre").value = valoresBimestres[index];
            });
        }
    });

    for (let i = 1; i <= 4; i++) {
        let btnConfirmar = document.getElementById(`Confirmar${i}`);
        if (btnConfirmar) {
            btnConfirmar.addEventListener("click", function(e) {
               
                let disciplinaSelecionada = document.getElementById("disciplina").value;
                let bimestreSelecionado = document.getElementById("bimestre").value;
                let nota = document.getElementById(`notaInput${i}`).value;

              
                console.log("Disciplina:", disciplinaSelecionada);
                console.log("Bimestre:", bimestreSelecionado);
                console.log("Nota:", nota);

              
                document.getElementById(`notaInput${i}`).value = '';
                document.getElementById("disciplina").value = '';
                document.getElementById("bimestre").value = '';
            });
          };
    
        };
    
        })





let btn = document.getElementById("Confirmar");
let btn2 = document.getElementById("Confirmar2");
let btn3 = document.getElementById("Confirmar3");
let btn4 = document.getElementById("Confirmar4")






function cadastrar() {
    const disciplina = document.getElementById("disciplina").value;
    const bimestre = document.getElementById("bimestre").value;
    const notaInput = document.getElementById(`notaInput`);
    let nota = notaInput.value;

    
    if (nota <= 0 || nota > 10) {
        alert('Por favor, insira uma nota entre 0 e 10.');
        return; 
    }

    const materias = { disciplina, bimestre, nota };

    axios.post('http://localhost:3000/cadastrar', materias)
        .then(response => {
            console.log(`Nova matéria cadastrada com ID: ${response.data.insertId}`);
            alert('Nota cadastrada com sucesso!');
            notaInput.value = '';
            document.getElementById("disciplina").value = '';
            document.getElementById("bimestre").value = '';
        })
        .catch(error => {
            console.error('Erro ao cadastrar', error);
            alert('Ocorreu um erro ao cadastrar a nota. Tente novamente.');
        });
}
function cadastrar2() {
    const disciplina = document.getElementById("disciplina").value;
    const bimestre = document.getElementById("bimestre").value;
    const nota = document.getElementById("notaInput2").value;

    
      
    if (nota <= 0 || nota > 10) {
        alert('Por favor, insira uma nota entre 0 e 10.');
        return; 
    }

    
    
    
    
    const materias = { disciplina, bimestre, nota };

    axios.post('http://localhost:3000/cadastrar', materias)
        .then(response => {
            console.log(`Nova matéria cadastrada com ID: ${response.data.insertId}`);
            alert('Nota cadastrada com sucesso!');
            notaInput.value = '';
            document.getElementById("disciplina").value = '';
            document.getElementById("bimestre").value = '';
        
        })
        .catch(error => {
            console.error('Erro ao cadastrar', error);
            alert('Ocorreu um erro ao cadastrar a nota. Tente novamente.');
        });
}
function cadastrar3() {
    const disciplina = document.getElementById("disciplina").value;
    const bimestre = document.getElementById("bimestre").value;
    const nota = document.getElementById("notaInput3").value;

    
      
    if (nota <= 0 || nota > 10) {
        alert('Por favor, insira uma nota entre 0 e 10.');
        return; 
    }

    
    
    
    const materias = { disciplina, bimestre, nota };

    axios.post('http://localhost:3000/cadastrar', materias)
        .then(response => {
            console.log(`Nova matéria cadastrada com ID: ${response.data.insertId}`);
            alert('Nota cadastrada com sucesso!');
            notaInput.value = '';
            document.getElementById("disciplina").value = '';
            document.getElementById("bimestre").value = '';
       
       
        })
        .catch(error => {
            console.error('Erro ao cadastrar', error);
            alert('Ocorreu um erro ao cadastrar a nota. Tente novamente.');
        
        });
}







function cadastrar4() {
    const disciplina = document.getElementById("disciplina").value;
    const bimestre = document.getElementById("bimestre").value;
    const nota = document.getElementById("notaInput4").value;

    
      
    if (nota <= 0 || nota > 10) {
        alert('Por favor, insira uma nota entre 0 e 10.');
        return; 
    }

    
    
    
    
    const materias = { disciplina, bimestre, nota };

    axios.post('http://localhost:3000/cadastrar', materias)
        .then(response => {
            console.log(`Nova matéria cadastrada com ID: ${response.data.insertId}`);
            alert('Nota cadastrada com sucesso!');
            notaInput.value = '';
            document.getElementById("disciplina").value = '';
            document.getElementById("bimestre").value = '';
        
        
        
        })
        .catch(error => {
            console.error('Erro ao cadastrar', error);
            alert('Ocorreu um erro ao cadastrar a nota. Tente novamente.');
        
        });
}


btn.addEventListener('click', cadastrar);
btn2.addEventListener('click', cadastrar2);
btn3.addEventListener('click', cadastrar3);
btn4.addEventListener('click', cadastrar4);

function excluirDados1(disciplina, notaId, dataId) {
    // Excluir do HTML
    document.getElementById(notaId).textContent = ''; // Limpa o texto da nota
    document.getElementById(dataId).textContent = ''; // Limpa o texto da data

    // Excluir do Backend
    const bimestre = 'PRIMEIRO';
    const nota = `${disciplina}Nota1`;

    // Faça uma solicitação DELETE para o backend para excluir os dados correspondentes no banco de dados
    axios.delete(`http://localhost:3000/excluir/${disciplina}/${bimestre}/${nota}`)
        .then(response => {
            console.log('Dados excluídos com sucesso do banco de dados:', response);
            alert('Dados excluídos com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao excluir dados do banco de dados:', error);
            alert('Ocorreu um erro ao excluir os dados.');
        });
}

// Adicionando os event listeners para cada disciplina
document.getElementById('excluirArtes1').addEventListener('click', function() {
    excluirDados1('Artes', 'artesNota1', 'dataartes1');
});

document.getElementById('excluirGeo1').addEventListener('click', function() {
    excluirDados1('Geografia', 'geoNota1', 'datageo1');
});

document.getElementById('excluirBio1').addEventListener('click', function() {
    excluirDados1('Biologia', 'bioNota1', 'databio1');
});

document.getElementById('excluirSoc1').addEventListener('click', function() {
    excluirDados1('Sociologia', 'socNota1', 'databio1'); // Corrigindo os IDs usados
});

function excluirDados2(disciplina, notaId, dataId) {
    // Excluir do HTML
    document.getElementById(notaId).textContent = ''; // Limpa o texto da nota
    document.getElementById(dataId).textContent = ''; // Limpa o texto da data

    // Excluir do Backend
    const bimestre = 'SEGUNDO';
    const nota = `${disciplina}Nota2`;

    // Faça uma solicitação DELETE para o backend para excluir os dados correspondentes no banco de dados
    axios.delete(`http://localhost:3000/excluir/${disciplina}/${bimestre}/${nota}`)
        .then(response => {
            console.log('Dados excluídos com sucesso do banco de dados:', response);
            alert('Dados excluídos com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao excluir dados do banco de dados:', error);
            alert('Ocorreu um erro ao excluir os dados.');
        });
}

// Adicionando os event listeners para cada disciplina
document.getElementById('excluirArtes2').addEventListener('click', function() {
    excluirDados2('Artes', 'artesNota2', 'dataartes2');
});

document.getElementById('excluirGeo2').addEventListener('click', function() {
    excluirDados2('Geografia', 'geoNota2', 'datageo2');
});

document.getElementById('excluirBio2').addEventListener('click', function() {
    excluirDados2('Biologia', 'bioNota2', 'databio2');
});

document.getElementById('excluirSoc2').addEventListener('click', function() {
    excluirDados2('Sociologia', 'socNota2', 'databio2'); 
});

function excluirDados3(disciplina, notaId, dataId) {
   
    document.getElementById(notaId).textContent = ''; 
    document.getElementById(dataId).textContent = ''; 

    
    const bimestre = 'TERCEIRO';
    const nota = `${disciplina}Nota3`;

   
    axios.delete(`http://localhost:3000/excluir/${disciplina}/${bimestre}/${nota}`)
        .then(response => {
            console.log('Dados excluídos com sucesso do banco de dados:', response);
            alert('Dados excluídos com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao excluir dados do banco de dados:', error);
            alert('Ocorreu um erro ao excluir os dados.');
        });
}


document.getElementById('excluirArtes3').addEventListener('click', function() {
    excluirDados3('Artes', 'artesNota3', 'dataartes3');
});

document.getElementById('excluirGeo3').addEventListener('click', function() {
    excluirDados3('Geografia', 'geoNota3', 'datageo3');
});

document.getElementById('excluirBio3').addEventListener('click', function() {
    excluirDados3('Biologia', 'bioNota3', 'databio3');
});

document.getElementById('excluirSoc3').addEventListener('click', function() {
    excluirDados3('Sociologia', 'socNota3', 'databio3'); 
});


function excluirDados4(disciplina, notaId, dataId) {
   
    document.getElementById(notaId).textContent = ''; 
    document.getElementById(dataId).textContent = ''; 

    // Excluir do Backend
    const bimestre = 'QUARTO';
    const nota = `${disciplina}Nota4`;

    // Faça uma solicitação DELETE para o backend para excluir os dados correspondentes no banco de dados
    axios.delete(`http://localhost:3000/excluir/${disciplina}/${bimestre}/${nota}`)
        .then(response => {
            console.log('Dados excluídos com sucesso do banco de dados:', response);
            alert('Dados excluídos com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao excluir dados do banco de dados:', error);
            alert('Ocorreu um erro ao excluir os dados.');
        });
}

// Adicionando os event listeners para cada disciplina
document.getElementById('excluirArtes4').addEventListener('click', function() {
    excluirDados4('Artes', 'artesNota4', 'dataartes4');
});

document.getElementById('excluirGeo4').addEventListener('click', function() {
    excluirDados4('Geografia', 'geoNota4', 'datageo4');
});

document.getElementById('excluirBio4').addEventListener('click', function() {
    excluirDados4('Biologia', 'bioNota4', 'databio4');
});

document.getElementById('excluirSoc4').addEventListener('click', function() {
    excluirDados4('Sociologia', 'socNota4', 'databio4'); // Corrigindo os IDs usados
});

btn.addEventListener('click',  excluirDados1);
btn2.addEventListener('click', excluirDados2);
btn3.addEventListener('click', excluirDados3);
btn4.addEventListener('click', excluirDados4);


