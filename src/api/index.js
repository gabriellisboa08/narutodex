const api = async () => {
    const req = await fetch(
        "https://naruto-api.herokuapp.com/api/v1/characters?sort=true"
    );
    const data = req.json()
    return data
};

export default api
