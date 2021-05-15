
const compte = document.getElementById("compte");
const updaterCounter = async () => {
    const data = await fetch('https://api.countapi.xyz/hit/dav-oiy-count/lancementoffcieljnow1');
    const count = await data.json()
    compte.innerHTML = count.value

};
updaterCounter();
