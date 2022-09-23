const menu = document.querySelector('.menu');         
const header = document.querySelector('.header');
const icon = document.querySelectorAll('.icon img');  
const closeM = document.querySelectorAll('.close img');  


icon.forEach(img => {    
img.addEventListener("click", function(){        
    
    
        menu.classList.remove('hidden');
        header.classList.add('hidden');
    
})})

closeM.forEach(img => {    
    img.addEventListener("click", function(){        
        
        
            menu.classList.add('hidden');
            header.classList.remove('hidden');
        
    })})



