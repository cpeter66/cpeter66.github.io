function showSection(sectionID){
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionID);
    if(sectionToShow){
        sectionToShow.style.display='block'
    }
}

function vote(photoId){
    const feedback = document.getElementById('feedback');
    let voteMessage = '';
    switch(photoId){
        case 'photo1':
            voteMessage = "You have voted for Photo 1!";
            break;
        case 'photo2':
            voteMessage = "You have voted for Photo 2!";
            break;
        case 'photo3':
            voteMessage = "You have voted for Photo 1!";
            break;
        default:
            voteMessage = 'invalid'

    }
    feddback.textContent = voteMessage;
}