const form = document.querySelector('#image-form');
const prompt = document.querySelector('#prompt');
const sizeSelector = document.querySelector('#size');
const spinner = document.querySelector('.spinner');
const image = document.querySelector('#image');
const message = document.querySelector('.msg');

const showSpinner = () => spinner.classList.add('visible');
const hideSpinner = () => spinner.classList.remove('visible');

const generateImageRequest = async (prompt, size) => {
    try {
        showSpinner();
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        if (!response.ok) {
            hideSpinner();
            throw new Error('That image could not be generated');
        }

        const data = await response.json();
        const imageUrl = data.data;
        image.src = imageUrl;

        hideSpinner();
    } catch (error) {
        message.textContent = error;
    }
};

const handleSubmit = (e) => {
    e.preventDefault();

    message.textContent = '';
    image.src = '';
    const description = prompt.value; 
    const imageSize = sizeSelector.value;

    if (description === '') {
        alert('Please describe the image you want generated');
        return;
    }

    generateImageRequest(description, imageSize);
};

form.addEventListener('submit', handleSubmit);