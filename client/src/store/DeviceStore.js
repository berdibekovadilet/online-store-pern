import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 14",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
      },
      {
        id: 2,
        name: "Iphone 14",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
      },
      {
        id: 3,
        name: "Iphone 14",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
      },
      {
        id: 4,
        name: "Iphone 14",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
      },
      {
        id: 5,
        name: "Iphone 14",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
