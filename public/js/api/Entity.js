/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
class Entity {
  static get URL() {
    return ``;
    }
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    return createRequest({
      url: this.URL,
      data,
      method: `GET`,
      responseType: `json`,
      callback
    })
    
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    return createRequest({
      url: this.URL,
      method: `POST`,
      data: Object.assign({_method: `PUT`}, data),
      responseType: `json`,
      callback
    });
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    return createRequest({
      url: this.URL,
      method: `GET`,
      data: Object.assign({id: ``}, data),
      responseType: `json`,
      callback: (err, response) => {
        if (response.readyState === response.DONE && response.status === 200) {
          callback(err, response);
        }
      }
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    return createRequest({
      url: this.URL,
      method: `POST`,
      data: Object.assign({id: 21,_method: `GET`}, data),
      responseType: `json`,
      callback: (err, response) => {
        if (response.readyState === response.DONE && response.status === 200) {
          callback(err, response);
        }
      }
    });  
  }
}