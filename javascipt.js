function renderBeats() {
    beatsContainer.innerHTML = '';
    beats.forEach(beat => {
        const card = document.createElement('div');
        card.className = 'beat-card';
        card.setAttribute('tabindex', 0);
        card.innerHTML = `
            <h3>${beat.title}</h3>
            <p>${beat.desc}</p>
            <button data-id="${beat.id}" aria-label="Download ${beat.title}">Download</button>
            <button class="purchase-button" data-id="${beat.id}" aria-label="Purchase ${beat.title}">Purchase</button>
        `;
        beatsContainer.appendChild(card);
    });
    // Attach download event listeners
    const buttons = beatsContainer.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.classList.contains('purchase-button')) {
            btn.addEventListener('click', purchaseBeat);
        } else {
            btn.addEventListener('click', downloadBeat);
        }
    });
}
