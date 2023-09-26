const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt', event);
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
    //textHeader.textContent = 'Click the button to install!';

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;
    butInstall.setAttribute('disabled', true);
    if (!prompt) {
        return;
    }
    prompt.prompt();
    //butInstall.textContent = 'Installed!';
});
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //textHeader.textContent = 'App sucessfully Installed!';
    console.log('awesome!', 'appinstalled', event);
    window.deferredPrompt = null;
});
