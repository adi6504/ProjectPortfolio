document.addEventListener("DOMContentLoaded",function(){const welcomeText="Welcome to My Portfolio";const welcomeElement=document.getElementById("welcome-text");let index=0;function typeEffect(){if(index<welcomeText.length){welcomeElement.textContent+=welcomeText[index];index++;setTimeout(typeEffect,100);}}
typeEffect();function showAllProjects(event){event.preventDefault();const projectItems=Array.from(document.querySelectorAll('.projects-grid .project')).slice(2);const showAllButton=document.querySelector('.btn-show-all');projectItems.forEach(item=>{item.style.display='block';});showAllButton.style.display='none';}
const projectItems=Array.from(document.querySelectorAll('.projects-grid .project')).slice(2);projectItems.forEach(item=>{item.style.display='none';});const showAllButton=document.querySelector('.btn-show-all');if(projectItems.length>0){showAllButton.style.display='block';showAllButton.addEventListener('click',showAllProjects);}else{showAllButton.style.display='none';}});const introductionText=`🎓 Recent Computer Science graduate with a strong foundation in programming languages such as Java,Python,and C++.\n
📱 Knowledgeable in:-Android app development
-iOS app development
-Web development
-React Native cross-platform development.\n
💻 Proficient in:-Software engineering principles
-Data structures
-Algorithms\n
🚀 Committed to crafting impactful software experiences and eager to contribute expertise in a collaborative team environment.\n
🔍 Open to compelling opportunities in the tech industry to learn,innovate,and drive software technology forward.`;const introductionElement=document.getElementById("introduction-text");let paragraphs=introductionText.split('\n\n');let currentParagraphIndex=0;let currentCharIndex=0;function typeIntroduction(){if(currentParagraphIndex<paragraphs.length){const currentParagraph=paragraphs[currentParagraphIndex];if(currentCharIndex<currentParagraph.length){introductionElement.innerHTML+=currentParagraph.charAt(currentCharIndex);currentCharIndex++;setTimeout(typeIntroduction,20);}else{introductionElement.innerHTML+='<br><br>';currentParagraphIndex++;currentCharIndex=0;setTimeout(typeIntroduction,0);}}}
window.addEventListener("load",typeIntroduction);document.addEventListener('contextmenu', event => event.preventDefault());





