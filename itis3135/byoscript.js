let courseCount = 1;
        
function addCourse() {
    courseCount++;
    const container = document.getElementById('coursesContainer');
    const div = document.createElement('div');
    div.className = 'course-container';
    div.innerHTML = `
        <input type="text" class="course">
        <button type="button" onclick="this.parentElement.remove()">-</button>
    `;
    container.appendChild(div);
}

document.getElementById('introForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate required fields
    const required = document.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
        if (!field.value) {
            valid = false;
            field.style.border = '1px solid red';
        } else {
            field.style.border = '';
        }
    });
    
    if (!valid) {
        alert('Please fill all required fields!');
        return;
    }
    
    // Build result page
    const result = document.getElementById('result');
    result.innerHTML = `
        <h2>${document.getElementById('name').value}'s Introduction</h2>
        <p><strong>Mascot:</strong> ${document.getElementById('mascot').value}</p>
        <p><strong>Personal Background:</strong> ${document.getElementById('personalBg').value}</p>
        <p><strong>Professional Background:</strong> ${document.getElementById('professionalBg').value}</p>
        <p><strong>Academic Background:</strong> ${document.getElementById('academicBg').value}</p>
        <p><strong>Web Development Background:</strong> ${document.getElementById('webBg').value}</p>
        <p><strong>Computer Platform:</strong> ${document.getElementById('platform').value}</p>
        <p><strong>Courses:</strong></p>
        <ul>
            ${Array.from(document.querySelectorAll('.course'))
                .map(course => `<li>${course.value}</li>`)
                .join('')}
        </ul>
        <p><strong>Funny Thing:</strong> ${document.getElementById('funny').value}</p>
        <p><strong>Anything Else:</strong> ${document.getElementById('anything').value}</p>
        <p><a href="#" onclick="resetForm()">Create Another Intro</a></p>
    `;
    
    document.getElementById('introForm').style.display = 'none';
    result.style.display = 'block';
});

function resetForm() {
    document.getElementById('introForm').style.display = 'grid';
    document.getElementById('result').style.display = 'none';
    document.getElementById('introForm').reset();
}