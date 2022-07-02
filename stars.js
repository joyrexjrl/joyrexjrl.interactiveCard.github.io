const button = document.querySelector('.button');
const selectionPage = document.querySelector('.selection');
const thanksPage = document.querySelector('.thanks-page');
const starTab = document.querySelectorAll('.star-tab');
const starSpotSelection = document.querySelectorAll('.star-spot');
const rating = document.querySelector('.rating');
let starsScore = 3;

button.addEventListener('click', onSubmit);
starTab.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function handleRatingBtnClick(){    
    starSpotSelection.forEach(btn => {
        btn.classList.remove('star-selection');
    });

    if(event.target.classList.contains('star-spot')){
        event.target.classList.add('star-selection')
    }else{
        event.target.parentElement.classList.add('active');
    }       

    starsScore = event.target.textContent;
}

function onSubmit(){
    thanksPage.classList.remove('hide');
    selectionPage.classList.add('hide');
    rating.textContent = starsScore;
}