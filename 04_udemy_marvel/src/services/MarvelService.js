class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=45d86b5c3e69da46a633492d547054e3';
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Ошибка запроса. Код: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (limit, offset) => {
    const res = await this.getResource(
      `${this._apiBase}comics?limit=${limit}&offset=${offset}&${this._apiKey}`
    );
    return res.data.results.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}comics/${id}?&${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    let newDesc = '';
    if (char.description && char.description.length > 200) {
      newDesc = char.description.slice(0, 200) + '...';
    }
    return {
      id: char.id,
      name: char.title,
      desc: newDesc || 'Данных нет',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    };
  };
}
export default MarvelService;
