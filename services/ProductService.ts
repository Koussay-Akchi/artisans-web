import artisansAPI from './apis/artisansAPI';

export default class ProductService {
  static readonly BASE_ROUTE = 'v1/products';
  static getProductsList() {
    return artisansAPI.get(`${this.BASE_ROUTE}`);
  }

  static getProductsByArtisan(id: String | undefined) {
    return artisansAPI.get(`${this.BASE_ROUTE}/artisan/` + id);
  }

  static countProductsByArtisan(id: String | undefined) {
    return artisansAPI.get(
      `${this.BASE_ROUTE}/artisan/` + id + '/count'
    );
  }

  static getProductById(id: string | undefined) {
    return artisansAPI.get(`${this.BASE_ROUTE}/` + id);
  }


  static createProduct(data: any) {
    return artisansAPI.post(`${this.BASE_ROUTE}/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static updateProduct(id: string | undefined, data: any) {
    return artisansAPI.put(`${this.BASE_ROUTE}/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static deleteProduct(clientId: any) {
    return artisansAPI.delete(`${this.BASE_ROUTE}/${clientId}`);
  }
}
