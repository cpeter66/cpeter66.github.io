document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('intro-form');
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result-container');
    const addCourseBtn = document.getElementById('add-course');
    const courseInputs = document.getElementById('course-inputs');
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('image-preview');
    
    // Image preview functionality
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
    
    // Add course functionality
    addCourseBtn.addEventListener('click', function() {
        const courseCount = document.querySelectorAll('.course-entry').length + 1;
        const courseEntry = document.createElement('div');
        courseEntry.className = 'course-entry';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'course';
        input.name = 'course' + courseCount;
        input.required = true;
        input.placeholder = 'Course name and code';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-course';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            courseEntry.remove();
        });
        
        courseEntry.appendChild(input);
        courseEntry.appendChild(deleteBtn);
        courseInputs.appendChild(courseEntry);
    });
    
    // Delete course buttons for initial courses
    document.querySelectorAll('.delete-course').forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentElement.remove();
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            mascot: document.getElementById('mascot').value,
            imageCaption: document.getElementById('image-caption').value,
            personalBg: document.getElementById('personal-bg').value,
            professionalBg: document.getElementById('professional-bg').value,
            academicBg: document.getElementById('academic-bg').value,
            webBg: document.getElementById('web-bg').value,
            platform: document.getElementById('platform').value,
            courses: Array.from(document.querySelectorAll('.course')).map(c => c.value),
            funnyThing: document.getElementById('funny-thing').value,
            anythingElse: document.getElementById('anything-else').value,
            imageSrc: imagePreview.src
        };
        
        // Display the results
        displayResults(formData);
    });
    
    // Function to display results
    function displayResults(data) {
        let coursesHtml = '<ul>';
        data.courses.forEach(course => {
            coursesHtml += `<li>${course}</li>`;
        });
        coursesHtml += '</ul>';
        
        resultContainer.innerHTML = `
            <h1>Introduction</h1>
            <h2>${data.name} || ${data.mascot}</h2>
            <hr>
            <h3>Presenting my computer science research</h3>
            
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div>
                    <img src="${data.imageSrc}" alt="${data.imageCaption}" style="max-width: 200px; max-height: 200px;">
                    <p><em>${data.imageCaption}</em></p>
                </div>
            </div>
            
            <p><strong>Personal Background:</strong> ${data.personalBg}</p>
            <p><strong>Professional Background:</strong> ${data.professionalBg}</p>
            <p><strong>Academic Background:</strong> ${data.academicBg}</p>
            <p><strong>Background in this subject:</strong> ${data.webBg}</p>
            <p><strong>Primary Computer Platform:</strong> ${data.platform}</p>
            <p><strong>Courses I'm taking and Why</strong></p>
            ${coursesHtml}
            <p><strong>Funny/Interesting Item to Remember me by:</strong> ${data.funnyThing}</p>
            ${data.anythingElse ? `<p><strong>Anything else:</strong> ${data.anythingElse}</p>` : ''}
            
            <a href="#" id="reset-link">Reset Form</a>
        `;
        
        formContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Reattach reset link event listener
        document.getElementById('reset-link').addEventListener('click', function(e) {
            e.preventDefault();
            resultContainer.style.display = 'none';
            formContainer.style.display = 'block';
            form.reset();
            imagePreview.style.display = 'none';
            imagePreview.src = '';
        });
    }
    
    // Initial reset link setup
    document.getElementById('reset-link').addEventListener('click', function(e) {
        e.preventDefault();
        resultContainer.style.display = 'none';
        formContainer.style.display = 'block';
        form.reset();
        imagePreview.style.display = 'none';
        imagePreview.src = '';
    });
});