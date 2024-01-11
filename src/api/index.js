const api = async (page, limit) => {
    const req = await fetch(
        `https://narutodb.xyz/api/character?page=${page}&limit=${limit}`
    );
    const data = req.json()
    return data
};

export default api
