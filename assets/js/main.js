





// =========== SKILLS TABS ========= 
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)  
        
        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills-active")
        })

        target.classList.add('skills-active')

         tabs.forEach((tab) => {
           tab.classList.remove('skills-active');
         });

         tab.classList.add('skills-active');
        })
})
    
// ========= MIXITUP FILTER PORTFOLIO ========== 
let mixerPortfolio = mixitup('.work-container', {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

// === Link Active Work === 
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))