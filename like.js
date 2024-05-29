const likeButton = document.getElementById('likeButton');
        const likeIcon = document.getElementById('likeIcon');
        const likeCountSpan = document.getElementById('likeCount');

        let likeCount = localStorage.getItem('likeCount') || 0;
        likeCountSpan.textContent = likeCount;

        likeButton.addEventListener('click', function() {
            likeCount++;
            likeCountSpan.textContent = likeCount;

            if (likeButton.classList.contains('liked')) {
                likeButton.classList.remove('liked');
            } else {
                likeButton.classList.add('liked');
            }

            localStorage.setItem('likeCount', likeCount);
        });