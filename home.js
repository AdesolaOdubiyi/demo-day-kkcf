function displayMuscleEmoji() {
    const emojiContainer = document.querySelector('.emoji-container');
    
    const muscleEmoji = document.createElement('span');
    muscleEmoji.innerText = '💪';
    muscleEmoji.classList.add('muscle-emoji');

    emojiContainer.appendChild(muscleEmoji);

    // Remove the emoji element after a certain duration
    setTimeout(() => {
      muscleEmoji.remove();
    }, 3000); // Change 3000 to the desired duration in milliseconds
  }

  // Attach click event listeners to the like buttons
  document.getElementById('story-like-btn').addEventListener('click', displayMuscleEmoji);
  document.getElementById('progress-like-btn').addEventListener('click', displayMuscleEmoji);
  document.getElementById('hobbies-like-btn').addEventListener('click', displayMuscleEmoji);

