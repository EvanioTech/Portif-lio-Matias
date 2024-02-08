
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/EvanioTech/Portif-lio-Matias/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
