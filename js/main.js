const TIMEOUT = 10000;

let hasDeletedLoadingDodge = false;
let hasDeletedHomeDodge = false;
let hasDeletedTwitterBlue = false;

const startTime = new Date().getTime();

const dodgeDeletor = setInterval(() => {
	const loadingDodge = document.querySelector('[aria-label="Loading…"] svg');
    const homeDodge = document.querySelector('a[href$="/home"] > div > svg');
    const twitterBlue = document.querySelector('a[href$="/i/twitter_blue_sign_up');
	
    if (loadingDodge) {
        loadingDodge.remove();
        hasDeletedLoadingDodge = true;
    }

    if (homeDodge) {
        homeDodge.remove();
        hasDeletedHomeDodge = true;
    }

    if (twitterBlue) {
        twitterBlue.remove();
        hasDeletedTwitterBlue = true;
    }

    const currentTime = new Date().getTime();
    const isTimeout = currentTime - startTime > TIMEOUT;

    if ((hasDeletedLoadingDodge && hasDeletedHomeDodge && hasDeletedTwitterBlue) || isTimeout) {
        clearInterval(dodgeDeletor);
    }
}, 1 / 60);
